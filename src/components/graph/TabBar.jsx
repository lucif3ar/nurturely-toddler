import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/color';

export default TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.leftTab}>
        <Text style={[styles.subHeading, { color: Colors.primary500 }]}>
          Weekly Report
        </Text>
      </View>
      <View style={styles.rightTab}>
        <Text style={[styles.subHeading, { color: Colors.white }]}>
          Overall Progress
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginVertical: 8,
    borderRadius: 24,
    backgroundColor: Colors.primary400,
    flexDirection: 'row',
  },
  leftTab: {
    flex: 1,
    padding: 8,
    borderRadius: 24,
    backgroundColor: Colors.white,
  },
  rightTab: {
    flex: 1,
    padding: 8,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
