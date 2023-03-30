//React and React Native Imports
import React, { useState } from 'react';

//React hooks or functions from external libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from '@apollo/client';

//Utility Imports
import Ionicons from '@expo/vector-icons/Ionicons';

//Screen Imports
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import DoctorScreen from './src/screens/DoctorScreen';
import BlogsScreen from './src/screens/BlogsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VideoPlayerScreen from './src/screens/VideoPlayerScreen';
import GraphsScreen from './src/screens/GraphsScreen';
import PhoneVerificationScreen from './src/screens/PhoneVerificationScreen';

//Local Helper Function Imports
import { Colors } from './src/constants/color';
import { createAppolloClient } from './src/services/apollo/apolloClient';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.darkGrey,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTitleStyle: { color: Colors.white },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Nurturely Tots',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DoctorScreen"
        component={DoctorScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medical" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BlogsScreen"
        component={BlogsScreen}
        options={{
          title: 'Blogs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="documents" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App = () => {
  const [client] = useState(createAppolloClient);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.white,
          }}
        >
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhoneAuth"
            component={PhoneVerificationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TabsScreen"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VideoScreen"
            component={VideoPlayerScreen}
            options={{
              title: "Today's Assignment",
            }}
          />
          <Stack.Screen
            name="GraphsScreen"
            component={GraphsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
