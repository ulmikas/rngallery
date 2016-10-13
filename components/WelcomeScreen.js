import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class WelcomeScreen extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
	    console.log(this.spinValue)
	}

	render() {
		return (
			<View style={styles.welcome}>
				<Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
				LOADING...
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	welcome: {
		backgroundColor: "#333",
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default WelcomeScreen;
