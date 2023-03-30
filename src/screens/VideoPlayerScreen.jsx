import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import { Colors } from '../constants/color';
import CustomButton from '../components/ui/CustomButton';

const screenWidth = Dimensions.get('window').width;

export default VideoPlayerScreen = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
        }}
        style={styles.videoPlayer}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.heading}>Apply butter on Bread</Text>
        <Text style={styles.subHeading}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi eius
          unde corporis, soluta animi ut quod fugiat magni exercitationem maxime
          eaque quisquam, a beatae voluptates. Aliquid minus nihil laboriosam
          iste.
        </Text>
        <CustomButton
          title="Report the video"
          onPress={() => {}}
          backgroundColor={Colors.primary500}
          textColor={Colors.white}
        />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.heading}>
          How would you rate the difficulty of the assignment?
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Easy"
              onPress={() => {}}
              backgroundColor={Colors.green}
              textColor={Colors.white}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Medium"
              onPress={() => {}}
              backgroundColor={Colors.accent500}
              textColor={Colors.white}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Hard"
              onPress={() => {}}
              backgroundColor={Colors.primary500}
              textColor={Colors.white}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  videoPlayer: {
    width: screenWidth,
    height: 250,
    videoBackgroundColor: Colors.primary500,
  },
  detailsContainer: {
    margin: 16,
  },
  heading: {
    fontSize: 20,
    color: Colors.primary500,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    color: Colors.darkGrey,
    fontWeight: '500',
    marginVertical: 4,
  },
  feedbackContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
});
