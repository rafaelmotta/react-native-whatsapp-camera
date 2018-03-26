import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import variables from '../config/variables'

class WZButton extends React.Component {
  static propTypes = {
    activeOpacity: PropTypes.number,
    onPress: PropTypes.func
  }

  static defaultProps = {
    activeOpacity: 0.6,
    onPress: null
  }

  /**
   * Indicate if the button is pressed or not
   */
  state = {
    active: false
  }

  /**
   * callback after user press the button
   */
  handleShowUnderlay = () => {
    this.setState({ active: true })
  }

  /**
   * callback after user release the button
   */
  handleHideUnderlay = () => {
    this.setState({ active: false })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={variables.transparent}
          onShowUnderlay={this.handleShowUnderlay}
          onHideUnderlay={this.handleHideUnderlay}
          onPress={this.props.onPress}
        >
          <View style={styles.outterCircle}>
            <View style={[
              styles.innerCircle,
              this.state.active && styles.innerCircleActive
            ]} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: variables.gutter * 2,
    left: (variables.screenWidth / 2) - 40
  },
  outterCircle: {
    width: variables.scale(70),
    height: variables.scale(70),
    borderRadius: variables.scale(70 / 2),
    borderWidth: variables.scale(5),
    borderColor: variables.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCircle: {
    width: variables.scale(74),
    height: variables.scale(74),
    borderRadius: variables.scale(74 / 2),
    backgroundColor: 'transparent'
  },
  innerCircleActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  }
})

export default WZButton
