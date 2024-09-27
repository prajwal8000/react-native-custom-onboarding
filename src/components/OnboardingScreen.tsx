// src/components/OnboardingScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OnboardingScreen = ({ screen }) => {
  return (
    <View style={styles.screenContainer}>
      <Image source={screen.image} style={styles.image} />
      <Text style={styles.title}>{screen.title}</Text>
      <Text style={styles.description}>{screen.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    width: 300, // Adapt the width based on your app's layout
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
