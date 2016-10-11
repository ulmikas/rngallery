import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, Dimensions} from 'react-native';
import PreviewItem from './PreviewItem';

class GalleryGridItem extends Component {
	constructor(props) {
		super(props);
		this._setNextPosition(this.props.current);
		// const prev = (this.props.current > 0)? [this.props.gallery[this.props.current - 1]]: [];
		// const next = (this.props.current + 1 < this.props.gallery.length)? [this.props.gallery[this.props.current + 1]]: [];
		// this.state = {
		// 	current: this.props.current,
		// 	items: [...prev, ...[this.props.gallery[this.props.current]], ...next]
		// }
		// console.log('item', prev, next, this.state);
	}

	_setNextPosition(current) {
		let prev = (current > 0)? [this.props.gallery[current - 1]]: [];
		let next = (current + 1 < this.props.gallery.length)? [this.props.gallery[current + 1]]: [];
		this.state = {
			current: current,
			lastScrollPos: 375,
			items: [...prev, ...[this.props.gallery[current]], ...next]
		}
		console.log('!!!!', this.state );
	}

	_addNext() {
		const nextIndex = this.state.current + 1;
		if (0 === this.props.gallery.length - nextIndex) {
			return
		}
		this.setState({
			items: [
				...this.state.items, 
				<PreviewItem 
					key={this.props.gallery[nextIndex].originalUrl.split('?')[1]} 
					item={this.props.gallery[nextIndex]} />
			]
		});
	}

	_addPrev() {
		const prevIndex = this.state.current - 1;
		if (prevIndex < 0) {
			return
		}
		this.setState({
			items: [
			<PreviewItem 
					key={this.props.gallery[prevIndex].originalUrl.split('?')[1]} 
					item={this.props.gallery[prevIndex]} />,
				...this.state.items
		]
		});
	}

	_addPrevNext() {
		let prevItem = [];
		let nextItem = [];

		if (this.state.current + 1 < this.props.gallery.length) {
			nextItem = [
				<PreviewItem 
					key={this.props.gallery[this.state.current + 1].originalUrl.split('?')[1]} 
					item={this.props.gallery[this.state.current + 1]} 
				/>
			]
		}
		
		if (this.state.current > 0) {
			prevItem = [
				<PreviewItem 
					key={this.props.gallery[this.state.current - 1].originalUrl.split('?')[1]} 
					item={this.props.gallery[this.state.current - 1]} 
				/>,
			]
		}

		this.setState({
			items: [
				prevItem,
				...this.state.items,
				nextItem
		]
		});	
	}

	_getPosition(index) {
		return Dimensions.get('window').width * index;
	}

	componentWillMount() {
		// this._addPrevNext();
	}

	componentDidMount() {
		// console.log(this._scrollView);

    this._scrollView.scrollTo({
    	x:this._getPosition(1), 
    	y:0, 
    	animated: true
    });

    // this.setState ({
    // 	items: this.props.gallery
    // });
	}

	componentWillUpdate(nextProps, nextState) {
		// console.log( nextProps, nextState )      
	}

	componentDidUpdate(prevProps, prevState) {
	  // console.log( 'update', this.state )   
	}


	_getNextItems(current) {
		if ( current + 2 < this.props.gallery.length ) {
			return [...this.state.items, this.props.gallery[this.state.current + 2]];
		} else {
			return this.state.items;
		}
	}

	_getPrevItems(current) {
		if ( current > 2 ) {
			return [this.props.gallery[this.state.current - 2], ...this.state.items ];
		} else {
			return this.state.items;
		}
	}

	_onScroll(e) {
		console.log(e.nativeEvent.contentOffset.x);
		if ( e.nativeEvent.contentOffset.x > this.state.lastScrollPos + 375 * .5 ) {
			this.setState({
				lastScrollPos: this.state.lastScrollPos + 375,
				current: this.state.current + 1,
				items: this._getNextItems(this.state.current)
			});

		} else if ( e.nativeEvent.contentOffset.x < this.state.lastScrollPos - 375 * .5  ) {
			this.setState({
				lastScrollPos: (this.state.lastScrollPos > 375 )? this.state.lastScrollPos - 375 : 375,
				current: this.state.current - 1,
				items: this._getPrevItems(this.state.current)
			});	

						this._scrollView.scrollTo({
	    	x:this._getPosition(1), 
	    	y:0, 
	    	animated: false
	    });
		}




		// this._scrollView.scrollTo({
  //   	x:this._getPosition(1), 
  //   	y:0, 
  //   	animated: false
  //   });

	// 	console.log('3333', this.state);
	}

	render() {
		return (
			<ScrollView 
				ref={scrollView => (this._scrollView = scrollView)}
				horizontal={true} 
				style={styles.horscroll}
				pagingEnabled={true}
				// onScrollEndDrag={e => { this._onScrollEnd(e) }}
				onScroll={e => { this._onScroll(e) }}
 				scrollEventThrottle={200}
				>
				{this.state.items.map( item => <PreviewItem key={item.originalUrl.split('?')[1]} item={item} /> )}
	    </ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	horscroll: {
		flex: 1,
		flexDirection: 'row',
		// flexWrap: 'nowrap',
		alignSelf: 'stretch',
	},

})

export default GalleryGridItem;

// {this.props.gallery.map( i => <PreviewItem item={i} /> )}

// onScroll={() => { console.log( this.state ) }}
// 				scrollEventThrottle={200}

// {this.props.gallery.map( item => <PreviewItem key={item.originalUrl.split('?')[1]} item={item} /> )}