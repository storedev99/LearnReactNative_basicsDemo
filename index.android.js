/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class refreshLearning extends Component {
  render() {
    let pic = {uri:"https://static01.nyt.com/images/2016/06/29/t-magazine/24tmag-ali-slide-E4IJ/24tmag-ali-slide-E4IJ-superJumbo.jpg"};
    return (
      <View>
        <Image source = {pic} style = {{height:500, width:500}}/>
        <Text> Strong as the wind, and friendly as a dove </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('refreshLearning', () => refreshLearning);
