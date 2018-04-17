import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class extends React.Component{
  render(){
    return <View style={styles.pt20}>
      <Text>hello ios</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  pt20: {
    paddingTop: 70
  }
})