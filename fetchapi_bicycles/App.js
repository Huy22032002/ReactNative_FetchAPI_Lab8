import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListBike from "./ListBike";
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>
          {' '}
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          style={{ width: 250, height: 230 }}
          source={require('./b1.png')}
        />
      </View>
      <View style={styles.title}>
        <Text
          style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 30,
            textAlign: 'center',
          }}>
          {' '}
          power bike shop{' '}
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress = {()=> navigation.navigate('List', {navigation})}
          style={{
            padding: 20,
            backgroundColor: 'red',
            borderRadius: 40,
            width: 300,
          }}>
          {' '}
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 27 }}>
            {' '}
            Get Started{' '}
          </Text>{' '}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 5,
    width: 300,
    backgroundColor: 'pink',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 30,
  },
  btn: {
    marginBottom: 40,
    flex: 3,
    justifyContent: 'flex-end',
  },
});
export default App;
