import { categories } from "../data/categories";
import { useNavigation } from "@react-navigation/native";
import { Card, Button } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


export default function HomeScreen() {

    const navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {categories.map((category) => (
                <Card key={category.id} style={styles.card}>
                    <Card.Title title={category.name} />
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate("Learning", { category: category.id })}>
                            Apprendre
                        </Button>
                        <Button onPress={() => navigation.navigate("Quiz", { category: category.id })}>
                            Quiz
                        </Button>
                    </Card.Actions>
                </Card>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        marginBottom: 16,
    },
});