import React, { Component } from 'react';
import { NavigatorIOS, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '最新',
          barTintColor: '#444',
          titleTextColor: '#fff'
        }}
        style={{flex:1}}
      />
    );
  }
}

class MyScene extends Component {
  render() {
    return (
      <View style={{paddingTop:70}}>
        <Text >Hello NavigatorIOS</Text>
      </View>
    )
  }
}