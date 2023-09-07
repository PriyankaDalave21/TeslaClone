import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import StyledButton from '../styledButtons';



const CarItem = () => {
  return (
    <View style={styles.carcontainer}>
      <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $78</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Coustom order has Pressed")
        }}
      />
       <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory has Pressed")
        }}
      />
    </View>
  )
}

export default CarItem;