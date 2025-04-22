import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LearningScreen from "../screens/learningScreen";
import QuizScreen from "../screens/quizScreen";
import HomeScreen from "../screens/homeScreen";

export type RootStackParamList = {
    Home: undefined;
    Learning: { category: string };
    Quiz: { category: string };
};

export default function Navigation() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Learning" component={LearningScreen} />
                <Stack.Screen name="Quiz" component={QuizScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}