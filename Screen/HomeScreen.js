import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealsData from '../assets/MealData.json';
import { MealsCard } from '../Components/MealsCard';

const HomeScreen = (props) => {
  const renderItem = ({ item }) => {
    return <MealsCard key={item.name} item={item} navigation={props.navigation} />;
  };
  return (
    <View
      style={{ flex: 1 }}
    >
      <FlatList
        data={MealsData}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-between', flexGrow: 1, paddingBottom: 10 }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
