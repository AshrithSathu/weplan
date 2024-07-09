import Login from "@/components/login/Login";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  // setTimeout(() => {
  //   router.push("auth/signIn");
  // }, 100);
  return (
    // <SafeAreaView
    //   style={{
    //     backgroundColor: "black",
    //   }}
    // >
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <Login />
    </View>
    // </SafeAreaView>
  );
}
