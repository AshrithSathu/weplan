import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("@/assets/images/Login.jpeg")}
        style={styles.loginImage}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>We Guide you to your dreams!</Text>
        <Text style={styles.quote}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni,
          pariatur in, saepe dolore porro, aliquam veritatis ex assumenda
          tempore quas ab consectetur atque? Illum ea exercitationem explicabo
          maiores soluta?
        </Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            router.push("auth/signIn");
          }}
        >
          <Text style={styles.signInButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    height: 500,
    width: "100%",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 0,
    fontFamily: "outfitMedium",
    padding: 15,
  },
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    height: "100%",
  },
  quote: {
    padding: 10,
    textAlign: "center",
    fontFamily: "outfitRegular",
    fontSize: 16,
    color: "#7d7d7d",
  },
  signInButton: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 99,
    width: 200,
    alignSelf: "center",
    marginTop: "10%",
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
