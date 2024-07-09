import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import NewTripCard from "@/components/mytrips/newTripCard";

const Mytrip = () => {
  const [usertrips, setuserTrips] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.text}>Mytrips</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {usertrips.length == 0 ? <NewTripCard /> : null}
    </View>
  );
};

export default Mytrip;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 25,
    paddingTop: 60,
    backgroundColor: "white",
  },
  innercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "outfitBold",
    fontSize: 30,
  },
});
