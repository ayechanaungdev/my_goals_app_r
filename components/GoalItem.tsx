import { StyleSheet, Text, View } from "react-native";

type GoalItemProps = {
  text: string;
};

const GoalItem = ({ text }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#fffef3",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 2,
    borderRadius: 6,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  goalText: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 4,
  },
});

export default GoalItem;
