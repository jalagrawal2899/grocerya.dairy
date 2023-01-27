import * as React from 'react';
import { Button, View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/home';
import Fruit from './screens/fruit';
import Vegetables from './screens/vegetables';



const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ 
      width: 300, 
      height: 110, 
      marginTop: 5,
      alignSelf:'center',
      justifyContent:'center',
       }}
      source={require('./tlogo.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
         headerStyle: {
          backgroundColor: '#2d2d2d',
          height:120,
        }, }} 
        
        />
        <Stack.Screen name="Fruit" component={Fruit}
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
         headerStyle: {
          backgroundColor: '#2d2d2d',
          height:120,
        }, }} 
         />
         <Stack.Screen name="Vegetables" component={Vegetables}
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
         headerStyle: {
          backgroundColor: '#2d2d2d',
          height:120,
        }, }} 
         />
        
        
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
