// src/components/Onboarding.tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Button, AsyncStorage } from 'react-native';
import OnboardingScreen from './OnboardingScreen';

const Onboarding = ({ screens, onComplete, buttonColor = '#000', backgroundColor = '#fff' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = async () => {
    await completeOnboarding();
  };

  const completeOnboarding = async () => {
    await AsyncStorage.setItem('@onboarding_complete', 'true');
    if (onComplete) onComplete();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        contentOffset={{ x: currentIndex * 300, y: 0 }}
      >
        {screens.map((screen, index) => (
          <OnboardingScreen key={index} screen={screen} />
        ))}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        {currentIndex < screens.length - 1 ? (
          <Button title="Skip" onPress={handleSkip} color={buttonColor} />
        ) : null}

        <Button
          title={currentIndex === screens.length - 1 ? 'Get Started' : 'Next'}
          onPress={handleNext}
          color={buttonColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Onboarding;
