import React from 'react'
import { Image, StyleSheet, Text, View, Alert } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

export function Home() {

  const handleOnPres = () => {
    Alert.alert('Vc clicou no botão !')
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.gamerImage}
          source={require('../../assets/gamer.png')}
        />
        <Text style={styles.title}>Vote agora!</Text>
        <Text style={styles.subTitle}>Nos diga qual é seu jogo favorito!</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}> COLETAR DADOS</Text>
          <Text style={styles.buttonIcon}>
            <Icon name="chevron-right" color="#fff" size={25}/>
          </Text>
        </RectButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    backgroundColor: '#0B1F34',
    alignItems: 'center'
  },
  gamerImage: {
    width: 309,
    height: 288
  },
  title: {
    color: '#00D4FF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 31,
    fontFamily: 'Play_700Bold'
  },
  subTitle: {
    color: '#ED7947',
    fontSize: 21,
    marginTop: 15,
    fontFamily: 'Play_400Regular'
  },
  footer: {
    marginTop: '15%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonIcon: {
    backgroundColor: '#ED7947',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 50,
    padding: 17,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: 'Play_700Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34'
  }
})
