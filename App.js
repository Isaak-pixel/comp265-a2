import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, ScrollView, TextInput} from 'react-native';
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
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/351/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/356/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.news}>
            <Text style={styles.header}>Recipe News</Text>
            <View>
              <Text style={styles.newsBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae faucibus urna. Praesent id lobortis ante.
              Integer auctor leo nisl. Vestibulum quis rutrum eros. Vivamus scelerisque sed sapien sed efficitur. Nam a tortor
              et enim tincidunt hendrerit. Mauris sed semper est, in finibus felis. Vestibulum vel interdum ex, ut convallis
              lacus. Duis finibus ligula odio, in pulvinar nisi mollis blandit. Aenean sagittis a ex at mattis.</Text>

              <Text style={styles.newsBody}>Vestibulum bibendum purus efficitur, finibus purus a, ultrices lorem. Aenean consectetur scelerisque enim nec
              convallis. Aenean magna purus, pharetra sed ornare sed, rhoncus vitae quam. Ut efficitur est eu nisl euismod
              dictum. Nunc interdum lacus vel faucibus viverra. Phasellus in gravida velit, fermentum egestas nulla. Aliquam
              sem libero, pulvinar eget leo sit amet, rhoncus consequat velit. Curabitur pharetra mi orci, at interdum nulla
              scelerisque laoreet. Fusce non tincidunt diam.</Text>

              <Text style={styles.newsBody}>Phasellus bibendum sagittis accumsan. Mauris mollis augue ut mauris eleifend, in consectetur sapien interdum.
              Fusce tincidunt maximus sodales. Curabitur suscipit diam a justo tincidunt dapibus. Morbi a cursus risus. Nulla
              et magna tortor. Sed mi ipsum, pretium vel nulla eget, volutpat placerat erat.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SearchScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>Search for Recipes</Text>

          <TextInput
            style={styles.input}
            placeholder="Search Recipes"
          />

          <TouchableOpacity style={styles.btnFiller}>
            <Text style={styles.fillerText}>Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/350/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/351/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/356/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SavedScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.header}>Saved Recipes</Text>

          <TextInput
            style={styles.input}
            placeholder="Search Saved Groups"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Create New Group</Text>
          </TouchableOpacity>

          <Text style={styles.savedHead}>Breakfast</Text>
          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/350/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/351/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>

          <Text style={styles.savedHead}>Lunch</Text>
          <View style={styles.recipeBox}>
            <Image source={{uri: 'https://placekitten.com/356/150'}}
            style={{width: 373, height: 150, borderRadius: 10, padding: 0}} />
            <Text style={styles.recipeTitle}>Recipe Name would go here</Text>
            <Text style={styles.recipeSub}>Recipe Subtitle would go here</Text>
            <Text style={styles.recipeDesc}>Recipe Description would go here</Text>
            <Text style={styles.recipePrep}>Prep Time: 45mins</Text>
            <Text style={styles.recipeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (123)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.header}>Settings</Text>

          <Text style={styles.settingsHead}>Settings Heading 1</Text>
          <View>
              <Text style={styles.options}>Settings Option 1</Text>
              <Text style={styles.options}>Settings Option 2</Text>
              <Text style={styles.options}>Settings Option 3</Text>
          </View>

          <Text style={styles.settingsHead}>Settings Heading 2</Text>
          <View>
              <Text style={styles.options}>Settings Option 4</Text>
              <Text style={styles.options}>Settings Option 5</Text>
              <Text style={styles.options}>Settings Option 6</Text>
          </View>

          <Text style={styles.settingsHead}>Settings Heading 3</Text>
          <View>
              <Text style={styles.options}>Settings Option 7</Text>
              <Text style={styles.options}>Settings Option 8</Text>
              <Text style={styles.options}>Settings Option 9</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
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
      <SavedStack.Screen name="Saved Recipes" component={SavedScreen} />
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
  },
  recipeBox: {
    backgroundColor: 'lightgreen',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  news: {
    margin: 20,
  },
  newsBody: {
    fontSize: 15,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  recipeSub: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  recipeDesc: {
    fontSize: 14,
  },

  recipePrep: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  recipeRating: {
    fontSize: 16,
  },
  savedHead: {
    color: 'forestgreen',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: 'forestgreen',
    borderRadius: 50,
    padding: 10,
    width: 300,
  },
  button: {
    backgroundColor: 'lightgreen',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'forestgreen',
    margin: 10,
  },
  btnFiller: {
    backgroundColor: 'lightgreen',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'forestgreen',
    margin: 5,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'forestgreen'
  },
  fillerText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'forestgreen'
  },
  settingsHead: {
    color: 'forestgreen',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    float: 'left',
    margin: 10,
  },
  options: {
    color: '#10591d',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  }
})

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false,
        tabBarActiveTintColor: 'forestgreen', tabBarInactiveTintColor: 'gray', }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="Saved" component={SavedStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
