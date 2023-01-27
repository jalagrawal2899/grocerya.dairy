import React, { useState } from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-paper';

function garammasala() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        backgroundColor: active ? 'red' : 'green',
        width: 320,
        marginLeft: 20,
        marginTop: 20,
        height: 55,
      }}>
      
      <Text style={styles.cardText}>Garam Masala / Kitchen King</Text>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
 
  cardText:{
     marginLeft:90,
     color:'white',
     fontWeight:'bold',
     marginTop:-35
  },

})
export default garammasala;
