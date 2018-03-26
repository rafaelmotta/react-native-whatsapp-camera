import React from 'react'
import {
  StyleSheet,
  Button,
  View
} from 'react-native'

import {
  WZCamera
} from './src/components'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <WZCamera />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
