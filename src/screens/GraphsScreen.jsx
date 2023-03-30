import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import { Colors } from '../constants/color';
import TabBar from '../components/graph/TabBar';
import StatisticsCard from '../components/graph/StatisticsCard';

const screenWidth = Dimensions.get('window').width;

export default GraphScreen = () => {
  const firstGraphData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        data: [2, 3, 4, 3, 5, 3, 4],
      },
    ],
  };

  const secondGraphData = {
    labels: ['Co', 'GM', 'SM', 'Sp', 'Se'],
    datasets: [
      {
        data: [6, 5, 7, 2, 4],
      },
    ],
    legend: [
      'Cognitive',
      'General Motor',
      'Sensory Motor',
      'Speech',
      'Sensory',
    ],
  };

  const chartConfig = {
    barPercentage: 0.3,
    backgroundGradientFrom: Colors.grey,
    backgroundGradientTo: Colors.grey,
    color: (opacity = 1) => `rgba(240, 71, 112, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Statistics</Text>
        <TabBar />
        <View style={styles.statCards}>
          <StatisticsCard
            title="Total"
            subTitle="20/35"
            color={Colors.accent500}
          />
          <StatisticsCard
            title="Average"
            subTitle="16.5/35"
            color={Colors.accent500}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.graphContainer}>
          <Text style={styles.graphHeading}>Day Wise Report</Text>
          <BarChart
            style={styles.graphStyle}
            data={firstGraphData}
            width={screenWidth * 0.8}
            height={200}
            chartConfig={chartConfig}
            fromZero={true}
          />
        </View>

        <View style={styles.graphContainer}>
          <Text style={styles.graphHeading}>Topic Wise Report</Text>
          <BarChart
            style={styles.graphStyle}
            data={secondGraphData}
            width={screenWidth * 0.8}
            height={200}
            chartConfig={chartConfig}
            fromZero={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    paddingTop: 32,
  },
  header: {
    flex: 1,
    margin: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  statCards: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  content: {
    flex: 3,
    padding: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: Colors.white,
  },
  graphContainer: {
    margin: 8,
    paddingVertical: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    shadowColor: Colors.primary500,
    backgroundColor: Colors.grey,
  },
  graphStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});
