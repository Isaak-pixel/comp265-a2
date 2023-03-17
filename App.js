import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search screen</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    mode="modal"
    screenOptions= {{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTintColor: '#10591d',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <HomeStack.Screen name="Very Cool Recipes" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
    mode="modal"
    screenOptions= {{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTintColor: '#10591d',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <SearchStack.Screen name="Search for Recipes" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
    mode="modal"
    screenOptions= {{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTintColor: '#10591d',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <SettingsStack.Screen name="Settings & Options" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
