import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

class GalleryGridThumb extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPressBtn} style={styles.imgwrapper} >
				<Image source={{uri: this.props.item.thumbnailUrl}} style={styles.thumb} />
			</TouchableOpacity>	
		)
	}

}

const styles = StyleSheet.create({
	imgwrapper: {
		backgroundColor: 'blue',
		flexDirection: 'column',
		margin: 10,
		minWidth: 100,
		height: 100
	},
	thumb: {
		flex: 1,
	}
})

export default GalleryGridThumb
