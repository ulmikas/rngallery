import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import WelcomeScreen from './components/WelcomeScreen';
import GalleryGrid from './components/GalleryGrid';
import GalleryGridItem from './components/GalleryGridItem';

class gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			current: 0,
			gallery: []
		}
	}

	onAfterLoad = (data) => {
		this.setState({ 
			gallery: data,
			current: 0,
			loading: false
	  })
	}

	componentWillMount() {
		fetch('https://s3.amazonaws.com/vgv-public/tests/astro-native/task.json')
			.then( response => response.json() )
			.then(this.onAfterLoad)
	}

  render() {
		if (this.state.loading) {
			return ( <WelcomeScreen /> )
		}
    return (
			<Navigator
				initialRoute={{name: 'GalleryGrid', gallery: this.state.gallery, current: this.state.current, index: 0}}
				renderScene={this.navigationRenderScene}
      />
    );
  }

	navigationRenderScene(route, navigator) {
		switch (route.name) {
			case 'GalleryGrid':
				return ( <GalleryGrid navigator={navigator} gallery={route.gallery} />);
			case 'GalleryGridItem':
				return ( <GalleryGridItem navigator={navigator} gallery={route.gallery} current={route.current} /> );
		}
	}
}

AppRegistry.registerComponent('gallery', () => gallery);
