import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, Dimensions} from 'react-native';

class PreviewItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.scrollcontainer}>
				<ScrollView>
					<Text style={styles.title}>{this.props.item.title}</Text>
				  <Text>{this.props.item.description}</Text>
				  <Text>{this.props.item.thumbnailUrl}</Text>
				  <Text>{this.props.item.originalUrl}</Text>
				</ScrollView>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	scrollcontainer: {
		flexDirection: 'column',
		// flex: 1,
		width: Dimensions.get('window').width ,
		// justifyContent: 'center',
		// alignItems: 'center'
		// maxWidth: 300
	},
	title: {
		paddingTop: 20,
		fontSize: 20
	}
})

export default PreviewItem;