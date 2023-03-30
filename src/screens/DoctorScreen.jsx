import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Colors } from '../constants/color';
import Header from '../components/doctor/Header';
import Body from '../components/doctor/Body';

export default DoctorScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
