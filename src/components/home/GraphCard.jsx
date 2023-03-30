import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

import { Colors } from '../../constants/color';

const screenWidth = Dimensions.get('window').width;

export default GraphCard = () => {
  const navigation = useNavigation();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 30, 28, 25, 30, 35],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: Colors.grey,
    backgroundGradientTo: Colors.grey,
    color: (opacity = 1) => `rgba(240, 71, 112, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.headingContainer}
        onPress={() => {
          navigation.navigate('GraphsScreen');
        }}
      >
        <Text style={styles.heading}>View Detailed Report</Text>
      </Pressable>
      <View style={styles.graphContainer}>
        <LineChart
          style={styles.graph}
          data={data}
          width={screenWidth * 0.9}
          height={180}
          chartConfig={chartConfig}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderWidth: 0.5,
    borderColor: Colors.primary500,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: Colors.grey,
    elevation: 10,
    shadowColor: Colors.primary500,
  },
  graphContainer: {},
  graph: {
    borderRadius: 16,
  },
  headingContainer: {
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: Colors.primary500,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
});
