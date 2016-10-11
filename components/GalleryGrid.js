import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ListView, ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
// import GalleryGridItem from './GalleryGridItem';
import GalleryGridThumb from './GalleryGridThumb';
import PreviewItem from './PreviewItem';


class GalleryGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<ScrollView>
					<View style={styles.container}>
						{this.props.gallery
							.map( (item, index) => 
								<PreviewItem key={item.originalUrl.split('?')[1]} item={item} />
								// <GalleryGridThumb 
								// 	key={item.thumbnailUrl.split('?')[1]} 
								// 	onPressBtn={() => { this.props.navigator.push({name: 'GalleryGridItem', gallery: this.props.gallery, current: index}); }} 
								// 	item={item} /> 
							)}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#ff0000'
	},
	container: {
		flex: 1,
		// maxWidth: 300,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		backgroundColor: '#00ff00'
	}
})

export default GalleryGrid


// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, ListView, ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
// import GalleryGridItem from './GalleryGridItem';

// class GalleryGrid extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<View style={styles.wrapper}>
// 			<ScrollView>
// 				<View style={styles.container}>
// 					<TouchableOpacity style={styles.imgwrapper}><Text style={styles.thumb}>1</Text></TouchableOpacity>
// 					<TouchableOpacity style={styles.imgwrapper}><Text style={styles.thumb}>1</Text></TouchableOpacity>
// 					{this.props.gallery.map( (item, index) => {
// 						return (
// 							<TouchableOpacity ref="thumb" key={index} onPress={() => {console.log('press ', index)} } style={styles.imgwrapper} >
// 								<Image source={{uri: item.thumbnailUrl}} style={styles.thumb} />
// 							</TouchableOpacity>	
// 						)
// 					})}
// 				</View>
// 			</ScrollView>
// 			</View>
// 		)
// 	}

// 	_onPressButton = (event) => {
// 		console.log('press ', this);
// //    this.props.navigator.push({name: 'GalleryGridItem', galleryItem: event.target});
// 	}
// }

// const styles = StyleSheet.create({
// 	wrapper: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		backgroundColor: '#ff0000'
// 	},
// 	container: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		justifyContent: 'space-around',
// 		backgroundColor: '#00ff00'
// 	},
// 	imgwrapper: {
// 		backgroundColor: 'blue',
// //		flex: 1,
// 		height: 100,
// 		width: 100
// 	},
// 	thumb: {
// 		margin: 5,
// 		//resizeMode: 'cover',
// 		width: 100,
// 		height: 100
// 	}
// })

// export default GalleryGrid

