import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Text, StyleSheet, FlatList


} from 'react-native';
import colors from '../../styles/colors'
import fonts from '../../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';
import {Header} from '../components/Header'



export function PlantSelect() {
const navigation = useNavigation();
  function handleMoveOn() {

    navigation.navigate('PlantSelect')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header/>
      <Text style={styles.title}>
        Em qual ambiente
      </Text>
      <Text style={styles.subTitle}>
        você quer colocar sua planta?
      </Text>

      <View>
        <FlatList
          data={[1,2,3,4,5]}
          renderItem={({item}) => (
            <EnviromentButton 
            title="Cozinha" 
            active
            />
          )}
          horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}

        />
      </View>

  
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: colors.background
  },

  header: {
    paddingHorizontal: 30
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },

  subTitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading

  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 22,

  }
})