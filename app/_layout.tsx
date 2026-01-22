import { GoalsProvider } from "@/contexts/GoalsContext";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <GoalsProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="about" options={{ headerShown: false }} />
        </Stack>
      </GoalsProvider>
      <Toast position="bottom" bottomOffset={120} visibilityTime={1200} />
    </>
  );
}
