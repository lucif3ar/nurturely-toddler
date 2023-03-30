import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/color';

export default StatisticsCard = ({ title, subTitle, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
