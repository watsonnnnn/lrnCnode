/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigatorIOS, Text, View } from 'react-native';
import Index from './main/index';//首页
import Add from './add'; //添加

/* @flow */

export default class Container extends Component {

  _pressLeft(){
    console.log('left')
  }

  _pressRight = () => {
    console.log('right',this)
    this.refs['nav'].push({
        component: Add,
        title: '添加新文章',
        barTintColor: '#444',
        titleTextColor: '#fff',
        tintColor: '#fff',
        leftButtonTitle: '后退'
    });
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Index,
          title: '最新',
          barTintColor: '#444',
          titleTextColor: '#fff',
          tintColor: '#fff',
          // backButtonIcon: '',
          backButtonTitle: '返回',
          leftButtonTitle: '返回',
          rightButtonTitle: '新增',
          onRightButtonPress: this._pressRight,
          onLeftButtonPress: this._pressLeft
        }}
        ref='nav'
        style={{flex:1}}
      />
    );
  }
}

