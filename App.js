import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Home from './Screen/Home';
import ShopNow from './Screen/ShopNow';
import Bookmark from './Screen/Bookmark';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>
      {/* <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }}/> */}
      <Stack.Screen name="ShopNow" component={ShopNow} options={{ title: 'Shop Now'}}/>
      <Stack.Screen name="Bookmark" component={Bookmark}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
