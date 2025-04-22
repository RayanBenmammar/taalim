import {PaperProvider} from "react-native-paper";
import Navigation from "./src/navigation";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
          <PaperProvider>
              <Navigation />
              <StatusBar style="auto" />
          </PaperProvider>
      </SafeAreaProvider>
  );
}
