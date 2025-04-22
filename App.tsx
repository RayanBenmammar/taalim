import {PaperProvider} from "react-native-paper";
import Navigation from "./src/navigation";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {

    const [fontsLoaded] = useFonts({
        'NotoNaskhArabic': require('./assets/fonts/NotoNaskhArabic-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
  return (
      <SafeAreaProvider>
          <PaperProvider>
              <Navigation />
              <StatusBar style="auto" />
          </PaperProvider>
      </SafeAreaProvider>
  );
}
