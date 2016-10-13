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
								<GalleryGridThumb 
									key={item.thumbnailUrl.split('?')[1]} 
									onPressBtn={() => { this.props.navigator.push({name: 'GalleryGridItem', gallery: this.props.gallery, current: index}); }} 
									item={item} /> 
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
		backgroundColor: '#eee'
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}
})

export default GalleryGrid
