import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Menu = () => (
  <LinearGradient colors={['#FFB6C1', '#FF69B4']} style={styles.gradientContainer}>
    <View style={styles.menuContainer}>
      <Text style={styles.title}>ForeignHer</Text>

      <TouchableOpacity onPress={()=>console.log("hello")}>
        <LinearGradient colors={['#FF4081', '#E91E63']} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Chatbot</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>console.log("hello")}>
        <LinearGradient colors={['#F06292', '#D81B60']} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Translate</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>console.log("hello")}>
        <LinearGradient colors={['#EC407A', '#C2185B']} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Maps</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>console.log("hello")}>
        <LinearGradient colors={['#E91E63', '#AD1457']} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>SOS</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // Ensures full screen coverage
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
  },
  menuButton: {
    padding: 15,
    borderRadius: 10,
    width: 200,
    marginVertical: 10,
    alignItems: 'center',
    borderColor: '#FF1493',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Menu;
