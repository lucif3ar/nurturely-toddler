import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import { Colors } from '../../constants/color';
import CustomButtonSmall from '../ui/CustomButtonSmall';

export default CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigation = useNavigation();

  const carouselItems = [
    {
      title: 'Apply Butter on Bread',
      thumbnail: 'cognitive-carousel',
      category: 'Cognitive',
    },
    {
      title: 'Draw a Circle',
      thumbnail: 'cognitive-carousel',
      category: 'Cognitive',
    },
    {
      title: 'Blow your Nose',
      thumbnail: 'cognitive-carousel',
      category: 'Cognitive',
    },
    {
      title: 'Make a Boat',
      thumbnail: 'cognitive-carousel',
      category: 'Cognitive',
    },
  ];

  const renderCarouselItem = (itemData) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          style={styles.carouselImage}
          source={require(`../../assets/images/cognitive-carousel.jpeg`)}
          resizeMode="contain"
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <View style={styles.buttonsConatiner}>
            <CustomButtonSmall
              title="Play"
              onPress={() => {
                navigation.navigate('VideoScreen');
              }}
              backgroundColor={Colors.white}
              textColor={Colors.primary500}
            />
            <CustomButtonSmall
              title="Completed"
              onPress={() => {
                console.log('Completed');
              }}
              backgroundColor={Colors.green}
              textColor={Colors.white}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={500}
        itemWidth={250}
        renderItem={renderCarouselItem}
        onSnapToItem={(index) => setCurrentIndex(index)}
        activeSlideOffset={100}
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    borderRadius: 16,
    backgroundColor: Colors.primary500,
  },
  carouselImage: {
    height: 150,
    width: 250,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  descriptionContainer: {
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    marginHorizontal: 8,
    marginBottom: 4,
    color: Colors.white,
    fontWeight: 'bold',
  },
  buttonsConatiner: {
    flexDirection: 'row',
  },
});
