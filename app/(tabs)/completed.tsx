import GoalItem from "@/components/GoalItem";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const CompletedScreen = () => {
  const goals = [
    { id: "1", text: "Study React Native", isCompleted: true },
    { id: "2", text: "Study Japanese", isCompleted: false },
    { id: "3", text: "Clean room", isCompleted: true },
  ];

  const completedGoals = goals.filter((goal) => goal.isCompleted);

  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header title="My Goals" onAboutPress={() => router.push("/about")} />
      <Text>Completed Screen</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={completedGoals}
          renderItem={({ item }) => <GoalItem text={item.text} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No completed goals yet!</Text>}
        />
      </View>
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalsContainer: {
    paddingHorizontal: 16,
  },
});
