import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onAddGoal: (text: string) => void;
  onCancel: () => void;
};

const GoalInput = ({ visible, onAddGoal, onCancel }: Props) => {
  const [text, setText] = useState("");

  const onAddGoalHandler = () => {
    if (!text.trim()) return;
    onAddGoal(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonContent}>
          <TouchableOpacity onPress={onAddGoalHandler}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
