import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomButton from '../ui/CustomButton';
import { Colors } from '../../constants/color';

export default Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tipCard}>
        <Text style={styles.tipText}>
          "Think of ways to ensure success before you even give birth"
        </Text>
        <Text style={styles.tipAuthor}>~Stacy Brosnan</Text>
        <Text style={styles.tipCredentials}>
          Lactation Consultant, New York City
        </Text>
      </View>
      <View style={styles.shopButton}>
        <Ionicons name="home" color={Colors.primary500} size={28} />
        <View style={styles.shopTextContainer}>
          <Text style={styles.shopHeading}>50% OFF on Amazon</Text>
          <Text style={styles.shopSubheading}>
            Get Flat 50% off on all products
          </Text>
        </View>
      </View>
      <View style={styles.recordButton}>
        <CustomButton
          title="Record Video"
          onPress={() => {}}
          backgroundColor={Colors.primary500}
          textColor={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  tipCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: Colors.primary500,
  },
  tipText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  tipAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.grey,
  },
  tipCredentials: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.grey,
  },
  shopButton: {
    padding: 8,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopTextContainer: {
    marginHorizontal: 12,
  },
  shopHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
  shopSubheading: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  recordButton: {},
});
