import { ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../assets/color';
import { HistoryApp } from '../Components/HistoryApp';
import { Partners } from '../Components/Partners';

const AboutUs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <HistoryApp />
        <Partners />
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});
