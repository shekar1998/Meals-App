import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealsData from '../assets/MealData.json';
import MealsCard from '../Components/MealsCard';

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return <MealsCard key={item.name} item={item} />;
  };
  return (
    <View style={{ flex: 1,   justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center' }}>
      <FlatList 
      data={MealsData} 
      renderItem={renderItem} 
      keyExtractor={(item) => item.id} 
      numColumns={2} 
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
