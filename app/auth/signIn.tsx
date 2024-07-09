import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const SignIn = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => router.back()}>
          <Entypo name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.signInText}>Let's Sign You In</Text>
        <Text style={styles.subText}>Welcome Back</Text>
        <Text style={styles.subText}>You've been missed</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.navigate("auth/signUp");
          }}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backbutton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  signInText: {
    fontSize: 50,
    fontFamily: "outfitMedium",
  },
  subText: {
    fontSize: 40,
    color: "#7d7d7d",
    fontFamily: "outfitMedium",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  heading: {
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "outfitMedium",
  },
  textInput: {
    width: "90%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: "90%",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "outfitMedium",
  },
});
