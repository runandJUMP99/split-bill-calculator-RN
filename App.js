import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Calculator from "./components/Calculator";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#28df99",
    flex: 1
  }
});
