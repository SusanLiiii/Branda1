import React, { Component, useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function App() {
  const [result, setResult] = useState(null);

  const DATA = [
  {
    id: "1",
    title: "Covid",
  },
  {
    id: "2",
    title: "News",
  },
  {
    id: "3",
    title: "Dining",
  },
  {
    id: "4",
    title: "Gosman",
  },
  {
    id: "5",
    title: "Library",
  },
  {
    id: "6",
    title: "Calendar",
  },
  {
    id: "7",
    title: "Shuttles",
  },
  {
    id: "8",
    title: "Map",
  },
  {
    id: "9",
    title: "Laundry",
  },
  {
    id: "10",
    title: "Facilities",
  }
];

const website = [
  "https://www.brandeis.edu/covid-19/dashboard.html",
  "https://www.brandeis.edu/",
  "https://brandeis.sodexomyway.com/#" ,
  "https://www.brandeisjudges.com/facilities/schedule" ,
  "https://www.brandeis.edu/library/" ,
  "https://www.brandeis.edu/events/" ,
  "https://www.brandeis.edu/publicsafety/van-shuttle/index.html",
  "https://www.brandeis.edu/about/visiting/map.html",
  "https://www.laundryview.com/selectProperty",
  "https://www.brandeis.edu/facilities/"
];

const _handlePressButtonAsync = async (index) =>{
    let result = await WebBrowser.openBrowserAsync(website[index]);
    setResult(result);
};

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item, index, style}) => {

    return (
      <TouchableOpacity 
        onPress={() => [setSelectedId(item.id), _handlePressButtonAsync(index)]} 
        style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
};
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
