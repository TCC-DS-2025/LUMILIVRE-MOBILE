import { View, Text, StyleSheet, Image } from 'react-native';
module.exports = {
   assets: ['./assets/fonts/']
};

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.livro}>
      <Image style={styles.imagem} source={require('../assets/images/book-login.png')} />
        <Text style={styles.text}>Lumi Livre</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9E8A7F',
  },
  imagem: {
    width: 150, 
    height: 350, 
    resizeMode: 'contain', // Ajusta a imagem para caber dentro da área
  },

  livro: {
    //suposta estilizacao
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'VesperLibre-Bold'
  },

});


