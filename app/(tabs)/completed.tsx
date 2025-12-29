import Header from "@/components/Header";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CompletedScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header title="My Goals" onAboutPress={() => router.push("/about")} />
      <Text>Completed Screen</Text>
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
