import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';

const StyledButtons = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  const { type, content, onPress } = props;

  const backgroundColor = type == 'primary' ? 'black' : 'white';
  const textcolor = type == 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}>
        <Text style={[styles.text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButtons;