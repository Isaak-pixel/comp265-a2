import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Trending Recipes</Text>
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Search for Recipes</Text>
    </View>
  );
}

function SavedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Saved Recipes</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Settings</Text>
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

const SavedStack = createNativeStackNavigator();

function SavedStackScreen() {
  return (
    <SavedStack.Navigator
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
      <SavedStack.Screen name="Search for Recipes" component={SavedScreen} />
    </SavedStack.Navigator>
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

const styles = StyleSheet.create({
  header: {
    color: 'forestgreen',
    fontSize: 30,
    fontWeight: 'bold',
  }
  })

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Saved" component={SavedStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
