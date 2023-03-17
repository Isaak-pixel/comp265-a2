import * as React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{flex: 1}}>
      <Text style={styles.header}>Trending Recipes</Text>
      <View style={styles.recipeBox}>
        <Image source={{uri: 'https://placekitten.com/350/150'}}
         style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
         <Text>Recipe Name Would go here</Text>
      </View>

      <View style={styles.recipeBox}>
        <Image source={{uri: 'https://placekitten.com/351/150'}}
         style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
         <Text>Recipe Name Would go here</Text>
      </View>

      <View style={styles.recipeBox}>
        <Image source={{uri: 'https://placekitten.com/356/150'}}
         style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
         <Text>Recipe Name Would go here</Text>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
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
    textAlign: 'center',
    margin: 10,
  } ,
  recipeBox: {
    backgroundColor: 'lightgreen',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
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
