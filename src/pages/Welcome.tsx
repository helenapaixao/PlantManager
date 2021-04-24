import React, { useState } from 'react';
import 
{ View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import colors from '../../styles/colors';
import wateringImg from '../assets/watering.png';
import { Feather} from '@expo/vector-icons';
import fonts from '../../styles/fonts';



export function Welcome() {
  return (
          <View style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'}
      suas plantas    de{ '\n'}
    
      forma fácil</Text>    
        <Image
         source={wateringImg} 
         style={styles.image}
         resizeMode="contain"
          />
      



      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
        </Text>
        <TouchableOpacity style={styles.button}
        activeOpacity={0.7}

      >
    
          <Feather name="chevron-right" style={styles.buttonIcon}    />
      
      </TouchableOpacity>
    </View>


  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {

    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32
  }

})