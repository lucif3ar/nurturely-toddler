import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/color';

export default Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Greetings User!</Text>
      <Text style={styles.subHeading}>Your tasks for the day:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
    color: Colors.primary500,
    fontWeight: '500',
    marginVertical: 8,
  },
});
