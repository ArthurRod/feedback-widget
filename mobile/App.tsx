import { KeyboardAvoidingView } from "react-native";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import Widget from "./src/components/Widget";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { theme } from "./src/theme";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <Widget />

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </KeyboardAvoidingView>
  );
}
