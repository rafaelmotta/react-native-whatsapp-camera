import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

import {
  Camera,
  Permissions
} from 'expo'

import {
  WZActionButton,
  WZButton,
  WZCameraRoll,
  WZCameraRollItem
} from './'

class WZCamera extends React.Component {
  static propTypes = {
    buttonInstructionsText: PropTypes.string
  }

  static defaultProps = {
    buttonInstructionsText: 'Hold for video tap for photo'
  }

  async componentWillMount () {
    await Permissions.askAsync(Permissions.CAMERA)
  }

  handleClose = () => {
    // TODO:
  }

  handleToggleFlash = () => {
    // TODO:
  }

  handleOpenGallery = () => {
    // TODO:
  }

  handleInvert = () => {
    // TODO:
  }

  handleSelectRollItem = () => {
    // TODO:
  }

  handleButtonPress = () => {
    // TODO:
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera style={styles.inner}>
          <WZActionButton
            icon="close"
            onPress={this.handleClose}
            style={styles.closeButton}
          />
          <WZActionButton
            icon="flash"
            onPress={this.handleToggleFlash}
            style={styles.flashButton}
          />
          <WZActionButton
            icon="gallery"
            onPress={this.handleOpenGallery}
            style={styles.galleryButton}
          />
          <WZActionButton
            icon="invers"
            onPress={this.handleInvert}
            style={styles.invertButton}
          />
          <WZCameraRoll
            renderItem={image =>
              <WZCameraRollItem
                image={image}
                onPress={this.handleSelectRollItem}
              />
            }
          />
          <WZButton
            onPress={this.handleButtonPress}
          />
          <Text style={styles.instructionsText}>
            {this.props.buttonInstructionsText}
          </Text>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  inner: {
    flex: 1,
    backgroundColor: 'black'
  }
})

export default WZCamera
