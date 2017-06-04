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
    let tidbits =
      [
        'wind blow',
        'ground below'
      ];

    return (
      <View style = {styles.container}>
        <Image source = {pic} style = {{height:500, width:500}}/>
        <Pigments tidbits = {tidbits} />
        <Text style = {styles.instructions}> Click here to enter </Text>
      </View>
    );
  }
}

class Pigments extends Component {
  render(){
    console.log("Value of tidbits is :" + this.props.tidbits);
    const fillers = this.props.tidbits;
    return(
      <Text style = {styles.welcome}> Powerful as a {fillers[0]}., Humble as {fillers[1]}</Text>
      );
  };
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('refreshLearning', () => refreshLearning);
