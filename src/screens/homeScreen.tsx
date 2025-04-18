import {arabicAlphabet} from "../data/alphabet";
import {useRef, useState} from "react";
import { View, StyleSheet} from 'react-native';
import FlipCard, {FlipCardRef} from "../components/flipCard";
import {Button} from "react-native-paper";

const getRandomLetter = () => {
    return arabicAlphabet[Math.floor(Math.random() * arabicAlphabet.length)];
}

export default function HomeScreen() {
    const [currentLetter, setCurrentLetter] = useState(getRandomLetter());
    const cardRef = useRef<FlipCardRef>(null);

    const handleNext = () => {
        cardRef.current?.flipIfBack();
        setTimeout(() => {
            setCurrentLetter(getRandomLetter());
        }, 200);
    };

    return (
        <View style={styles.container}>
            <FlipCard ref={cardRef} letter={currentLetter} />
            <Button mode="contained" onPress={handleNext} style={styles.button}>
                Lettre suivante
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    button: {
        marginTop: 24,
        alignSelf: 'center',
    },
});