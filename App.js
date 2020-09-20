import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Calculator from "./components/Calculator";
import Header from "./components/Header";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <Header />
        <Calculator />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#28df99",
    flex: 1
  }
});
