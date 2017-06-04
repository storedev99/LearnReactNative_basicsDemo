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
import Pigments from './src/components/Pigments';

export default class refreshLearning extends Component {
  constructor(props){
    super(props);
    this.state = {colorHere: '#333333'};

    setInterval(() => {
      this.setState(
        {
          colorHere:'#ff0022'
        });
    }, 3000);
  }

  render() {
    let pic = {uri:"https://static01.nyt.com/images/2016/06/29/t-magazine/24tmag-ali-slide-E4IJ/24tmag-ali-slide-E4IJ-superJumbo.jpg"};
    let tidbits =
      [
        'wind blow',
        'ground below'
      ];

    return (
      <View style = {styles.container}>
        <Image source = {pic} style = {{height:500, width:500}}/>
        <Pigments tidbits = {tidbits} />
        <Text style = {[styles.instructions, {color: this.state.colorHere}]}> Click here to enter </Text>
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
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20
  },
});

AppRegistry.registerComponent('refreshLearning', () => refreshLearning);
