import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Image } from 'react-native';

export default function App() {

  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./src/assets/images/fundo.jpg')}
        style={styles.img}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.myName} >Do it  your Login</Text>
        <TextInput 
          placeholder='Nome'
          style={styles.inputs}
          inputMode='text'
        />
        <TextInput 
          placeholder='Senha'
          keyboardType='numeric'
          secureTextEntry={true}
          style={styles.inputs}
        />
        <Button
          onPress={pressButton}
          title='Entrar'
          color= 'black'
        />
        <Image
          source={require('./src/assets/images/pinguin.png')}
          style={styles.logo}
          resizeMode='cover'
        />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  secondaryContainer: {
    flex: 1 ,
    width: '100%',
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },

  myName: {
    color: '#BDBDBD',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  img: {
    width:'100%',
    height:'100%',
  },

  inputs: {
    backgroundColor: '#BDBDBD99',
    borderWidth: 1,
    borderRadius: 3 ,
    height: 75,
    width: 300,
    margin: 3,
    textAlign: 'center',
    fontSize: 15,
  },

  logo: {
    width: 200,
  },

});