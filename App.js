import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Logo */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      {/* Favoritos */}
      <Text style={styles.title}>Favoritos da Galera</Text>
      <View style={styles.favoritos}>
        <Image source={require('./assets/frutas1.png')} style={styles.favoritoItem} />
        <Image source={require('./assets/frutas2.png')} style={styles.favoritoItem} />
        <Image source={require('./assets/frutas3.png')} style={styles.favoritoItem} />
      </View>
      
      {/* Resgate Cupom */}
      <View style={styles.cupomBox}>
        <Text style={styles.cupomText}>Resgate Cupom</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>

      {/* Loja do Seu Zé */}
      <View style={styles.lojaBox}>
        <Image source={require('./assets/frutas-loja.png')} style={styles.lojaImage} />
        <View>
          <Text style={styles.lojaTitle}>Loja do Seu Zé</Text>
          <Text style={styles.lojaSubTitle}>Está perto de você!</Text>
        </View>
      </View>

      {/* Botões de Promoção */}
      <View style={styles.promoButtons}>
        <TouchableOpacity style={styles.btnOrange}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRed}>
          <Text style={styles.btnText}>50% De Desconto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnYellow}>
          <Text style={styles.btnText}>Frete Grátis</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Ionicons name="home" size={30} color="black" />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={30} color="black" />
          <Text>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="receipt" size={30} color="black" />
          <Text>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={30} color="black" />
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 70,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    margin: 15,
    fontWeight: 'bold',
  },
  favoritos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  favoritoItem: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  cupomBox: {
    backgroundColor: '#00A86B',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  cupomText: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  progress: {
    width: '30%',
    height: '100%',
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  lojaBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  lojaImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  lojaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lojaSubTitle: {
    fontSize: 16,
    color: 'gray',
  },
  promoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  btnOrange: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
  },
  btnRed: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  btnYellow: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
});
