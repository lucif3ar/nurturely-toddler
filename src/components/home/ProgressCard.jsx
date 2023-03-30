import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { Colors } from '../../constants/color';

const screenWidth = Dimensions.get('window').width;

export default ProgressCard = () => {
  const data = {
    labels: ['Completed'], // optional
    data: [0.4],
  };

  const chartConfig = {
    backgroundGradientFrom: Colors.grey,
    backgroundGradientTo: Colors.grey,
    color: (opacity = 1) => `rgba(240, 71, 112, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <ProgressChart
          data={data}
          height={150}
          width={screenWidth / 2}
          strokeWidth={32}
          radius={48}
          hideLegend={true}
          chartConfig={chartConfig}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>Great Start!</Text>
        <Text style={styles.subHeading}>3 activities to go</Text>
        <Text style={styles.text}>
          Complete all 5 assignments to win rewards!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    borderWidth: 0.5,
    borderColor: Colors.primary500,
    borderRadius: 16,
    backgroundColor: Colors.grey,
    elevation: 10,
    shadowColor: Colors.primary500,
  },
  chartContainer: {
    padding: 8,
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  text: {
    color: Colors.darkGrey,
    textAlign: 'center',
    fontSize: 12,
  },
});
