import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    activated: boolean,
    title: String,
    description: String,
    type: "danger" | "warning"
}

class MessageDisplay extends React.Component<Props> {
    state = {
    };

    render() {
      return (
      <View>
        { this.props.activated ?
            <View style={styles.container}>
                <Text style={[styles.title,{color: `${this.props.type === "danger" ? 'red': 'orange'}`}]}>{this.props.title}</Text>
                <Text style={[styles.description, {color: `${this.props.type === "danger" ? 'red': 'orange'}`}]}>{this.props.description}</Text>
            </View>
            :
            null
        }
        </View>
      )}
  }

export default MessageDisplay;

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    maxWidth: Dimensions.get('window').width * 0.8
  },
});