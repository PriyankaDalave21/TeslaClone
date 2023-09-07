import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import React from 'react';
import CarItem from './components/CarItem';


const App = () => {
  return (
    <View style={styles.conatiner}>
<CarItem/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center'
  },
 
})
export default App;