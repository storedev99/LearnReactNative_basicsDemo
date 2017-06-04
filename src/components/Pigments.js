import React, {Component} from 'react';
import {
	Text, 
	StyleSheet
	} from 'react-native';

class Pigments extends Component {
  render(){
    console.log("Value of tidbits is :" + this.props.tidbits);
    const fillers = this.props.tidbits;
    return(
      <Text style = {styles.welcome}> Powerfull as {fillers[0]}, Yet., Humble as {fillers[1]}</Text>
      );
  };
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = Pigments;