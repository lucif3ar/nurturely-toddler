import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '../../constants/color';
import CustomButton from '../ui/CustomButton';

export default Body = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.aboutSection}>
        <Text style={styles.heading}>About Doctor</Text>
        <Text style={styles.subHeading}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          placeat quasi natus beatae nobis hic temporibus quae exercitationem
          alias necessitatibus iste nulla.
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.heading}>Location</Text>
        <View style={styles.locationCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="home" color={Colors.white} size={24} />
          </View>
          <View style={styles.locationText}>
            <Text style={styles.heading}>Lotus Medical Center</Text>
            <Text style={styles.subHeading}>
              3518 W, Grey Street, Pennsylvaia
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.consultation}>
          <Text style={styles.subHeading}>Consultation price</Text>
          <Text style={styles.heading}>₹ 500</Text>
        </View>
        <CustomButton
          title="Book Appointment"
          onPress={() => {}}
          backgroundColor={Colors.primary500}
          textColor={Colors.white}
        />
        <CustomButton
          title="View Past Prescriptions"
          onPress={() => {}}
          backgroundColor={Colors.primary500}
          textColor={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 3,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.white,
  },
  aboutSection: {
    margin: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  location: {
    margin: 16,
  },
  locationCard: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 30,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary400,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  consultation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
