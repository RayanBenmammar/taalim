import {View, Text, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import {useRef, useState} from "react";
import {arabicAlphabet} from "../data/alphabet";
import FlipCard, {FlipCardRef} from "../components/flipCard";
import {Button} from "react-native-paper";

const HISTORY_SIZE = 10;

const useLetterSelection = () => {
    const [usedLetters, setUsedLetters] = useState<string[]>([]);
    const [currentLetter, setCurrentLetter] = useState(() => {
        const letter = arabicAlphabet[Math.floor(Math.random() * arabicAlphabet.length)];
        return letter;
    });

    const getNextLetter = () => {
        const availableLetters = arabicAlphabet.filter(
            letter => !usedLetters.includes(letter.letter)
        );

        if (availableLetters.length === 0) {
            const randomLetter = arabicAlphabet[Math.floor(Math.random() * arabicAlphabet.length)];
            setUsedLetters([randomLetter.letter]);
            setCurrentLetter(randomLetter);
            return;
        }

        const selectedLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
        setUsedLetters(prev => {
            const newHistory = [...prev, selectedLetter.letter];
            return newHistory.slice(-HISTORY_SIZE);
        });
        setCurrentLetter(selectedLetter);
    };

    return { currentLetter, getNextLetter };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Learning'>;

export default function LearningScreen({ route } : Props) {
    const { category } = route.params;

    const { currentLetter, getNextLetter } = useLetterSelection();
    const cardRef = useRef<FlipCardRef>(null);

    const handleNext = () => {
        cardRef.current?.flipIfBack();
        setTimeout(() => {
            getNextLetter()
        }, 200);
    };
    return (
        <View style={styles.container}>
            <Text>Learning for: {category}</Text>
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