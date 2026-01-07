import AddGoalItem from "@/components/AddGoalItem";
import GoalItem from "@/components/GoalItem";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Goal = {
  id: string;
  text: string;
};

const HomeScreen = () => {
  const router = useRouter();
  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", text: "Study React Native" },
    { id: "2", text: "Learn Japanese" },
    { id: "3", text: "Practice Japanese Speaking" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModelHandler = () => {
    setModalVisible(true);
  };
  const closeModalHandler = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (goalText: string) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Date.now().toString(), text: goalText },
    ]);
    closeModalHandler();
  };

  return (
    <View style={styles.container}>
      <Header title="My Goals" onAboutPress={() => router.push("/about")} />
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => openModelHandler()}>
        <Text>+ Add Goal</Text>
      </TouchableOpacity>
      <AddGoalItem
        visible={modalVisible}
        onCancel={closeModalHandler}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <GoalItem text={item.text} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalsContainer: {
    paddingHorizontal: 16,
  },
});
