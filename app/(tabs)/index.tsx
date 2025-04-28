import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        
        <Image source={require('../../assets/images/banner.png')} style={styles.logo} />
        
        <Text style={styles.title}>Favoritos da Galera</Text>
        <View style={styles.favoritos}>
          <Image source={require('../../assets/images/fruta4.webp')} style={styles.favoritoItem} />
          <Image source={require('../../assets/images/fruta2.jpg')} style={styles.favoritoItem} />
          <Image source={require('../../assets/images/fruta3.jpeg')} style={styles.favoritoItem} />
        </View>
        
        <View style={styles.cupomBox}>
          <Text style={styles.cupomText}>Resgate Cupom</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>

        <View style={styles.lojaBox}>
          <Image source={require('../../assets/images/fruta1.avif')} style={styles.lojaImage} />
          <View>
            <Text style={styles.lojaTitle}>Loja do Seu Zé</Text>
            <Text style={styles.lojaSubTitle}>Está perto de você!</Text>
          </View>
        </View>

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

      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="search" size={24} color="black" />
          <Text>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="receipt" size={24} color="black" />
          <Text>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person" size={24} color="black" />
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  logo: {
    width: '70%',
    height: 70,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    margin: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  favoritos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  favoritoItem: {
    width: '30%',
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
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 60,
    backgroundColor: 'white',
  },
  menuItem: {
    alignItems: 'center',
  }
});
