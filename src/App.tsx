import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Menu from './components/Menu';

const App = () => {
  return (
    <Menu/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});


export default App;