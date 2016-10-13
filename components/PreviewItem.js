import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, Image, View, Dimensions} from 'react-native';

class PreviewItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.scrollcontainer}>
				<ScrollView>
					<Text style={styles.title}>{this.props.item.title}</Text>
					<View style={styles.imgwrapper}>
						<Image source={{uri: this.props.item.originalUrl}} style={styles.image} />
					</View>
				  <Text style={styles.description}>{this.props.item.description}</Text>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollcontainer: {
		flexDirection: 'column',
		width: Dimensions.get('window').width,
	},
	title: {
		minHeight: 110,
		padding: 10,
		paddingTop: 30,
		fontSize: 24,
		textAlign: 'center',
	},
	imgwrapper: {
		flex: 1,
		height: 300,
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	image: {
		flex: 1,
	},
	description: {
		fontSize: 16,
		padding: 20
	}
})

export default PreviewItem;