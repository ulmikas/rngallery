import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, Dimensions} from 'react-native';
import PreviewItem from './PreviewItem';

class GalleryGridItem extends Component {
	constructor(props) {
		super(props);
		const prev = (this.props.current > 0)? [this.props.gallery[this.props.current - 1]]: [];
		const next = (this.props.current + 1 < this.props.gallery.length)? [this.props.gallery[this.props.current + 1]]: [];
		this.state = {
			scrollable: true,
			direction: 'left',
			current: this.props.current,
			width: Dimensions.get('window').width,
			items: [...prev, ...[this.props.gallery[this.props.current]], ...next]
		}
	}

	componentDidMount() {
    this._fastScroll();
	}

	render() {
		return (
			<ScrollView 
				ref={scrollView => (this._scrollView = scrollView)}
				horizontal={true} 
				style={styles.horscroll}
				pagingEnabled={true}
				scrollEnabled={this.state.scrollable}
				onScrollEndDrag={this._onScrollEndDrag}
				onContentSizeChange={this._onContentSizeChange}
				onMomentumScrollEnd={this._onScrollEnd}
 				scrollEventThrottle={200}
				>
				{this.state.items.map( item => <PreviewItem key={item.originalUrl.split('?')[1]} item={item} /> )}
	    </ScrollView>
		)
	}

	_fastScroll = () => {
		this._scrollView.scrollTo({
    	x: this.state.width, 
    	y: 0, 
    	animated: false
    });
	}

	_addPrev = () => {
		let newCurrent = (this.state.current > 1) ? this.state.current - 1 : 0;
		let newItem = this.props.gallery[newCurrent];
		if ( this.state.items.indexOf(newItem) === -1 ) {
			this.setState({
				items: [newItem, ...this.state.items]
			});
			this._fastScroll();
		} 
	}

	_addNext = () => {
		let last = this.props.gallery.length - 1;
		let newCurrent = (this.state.current < last ) ? this.state.current + 1 : last;
		let newItem = this.props.gallery[newCurrent];
		if ( this.state.items.indexOf(newItem) === -1 ) {
			this.setState({
				items: [...this.state.items, newItem]
			});
		} 
	}

	_onScrollEnd = () => {
		if ( !this.state.scrollable ) {
			if ( this.state.direction === 'left' ) {
				this._addNext();	
			}
			if ( this.state.direction === 'right' ) {
				this._addPrev();	
			}
			this.setState({
				scrollable: true,
			});		
		}
		
	}

	_onScrollEndDrag = (e) => {
		if ( e.nativeEvent.targetContentOffset.x < this.state.width ) {
			this.setState({
				direction: 'right',
				scrollable: false,
				current: this.state.current - 1
			});	
		} else if ( e.nativeEvent.targetContentOffset.x > this.state.width ) {
			this.setState({
				direction: 'left',
				scrollable: false,
				current: this.state.current + 1
			});	
		}
	}

	_onContentSizeChange = () => {
		this.setState({
			scrollable: true,
		});
		console.log('csc');
	}

}

const styles = StyleSheet.create({
	horscroll: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
	},

})

export default GalleryGridItem;
