import React, { Component, } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class App extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "rgba(230,28,104,1)",
            fontSize: 43,
            fontWeight: "normal",
            fontFamily: "Papyrus",
          }}>
          START DOING STUFF HERE!!!
        </Text>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App
