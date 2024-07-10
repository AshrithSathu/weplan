import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchPlace = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Search",
          headerTransparent: true,
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
      />
    </View>
  );
};

export default SearchPlace;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 90,
    backgroundColor: "#fff",
    height: "100%",
  },
});
