import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/home/Header';
import CarouselSlider from '../components/home/CarouselSlider';
import ProgressCard from '../components/home/ProgressCard';
import GraphCard from '../components/home/GraphCard';
import Footer from '../components/home/Footer';

export default HomeScreen = () => {
  const [myClientID, setMyClientID] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('myClientID').then((myClientID) => {
      setMyClientID(myClientID);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <CarouselSlider />
      <ProgressCard />
      <GraphCard />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
