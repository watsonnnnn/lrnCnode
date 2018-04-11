import React,{PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  NavigatorIOS,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

class Index extends PureComponent{
    render(){
        return <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '最新'
        }}
        barTintColor='#f4f4f4'
        style={{flex: 1}}
        leftButtonTitle='返回'
      />
    // return <View><Text style={styles.mt20}>999</Text></View>
    }
}

class MyScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    console.log(props)
  }

  render() {
    return <View style={{paddingTop:100}}>
          <Text>dianji</Text>
      </View>
  }
}

const styles = StyleSheet.create({
    mt20: {
        marginTop: 22
    }
})

export default Index;