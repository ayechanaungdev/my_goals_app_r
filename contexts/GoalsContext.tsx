import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type Goal = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type GoalsContextType = {
  goals: Goal[];
  addGoal: (text: string) => void;
  setCompletedGoal: (id: string) => void;
  deleteGoal: (id: string) => void;
  clearAllGoals: () => void;
};

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export const GoalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const STORAGE_KEY = "goalsdata123";
  const [isLoading, setIsLoading] = useState(true);

  // load stored goals from loacal storage
  useEffect(() => {
    const loadGoals = async () => {
      try {
        const storedGoals = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedGoals) {
          setGoals(JSON.parse(storedGoals));
        }
      } catch (error) {
        console.error("Failed to load goals", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGoals();
  }, []);

  // save goals to storage whenever they change
  useEffect(() => {
    if (!isLoading) {
      const saveGoals = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
        } catch (error) {
          console.error("Failed to save goals", error);
        }
      };
      saveGoals();
    }
  }, [goals, isLoading]);

  const addGoal = (text: string) => {
    setGoals((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isCompleted: false },
    ]);
  };

  const setCompletedGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, isCompleted: !goal.isCompleted } : goal
      )
    );
  };
  const deleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const clearAllGoals = () => {
    setGoals((prevGoals) => prevGoals.filter((goal) => !goal.isCompleted));
  };

  // loading
  if (isLoading) {
    return null;
  }

  return (
    <GoalsContext.Provider
      value={{ goals, addGoal, setCompletedGoal, deleteGoal, clearAllGoals }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) throw new Error("useGoals must be used inside GoalsProvider");
  return context;
};
