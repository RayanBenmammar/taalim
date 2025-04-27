import {View, Text, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import {arabicAlphabet} from "../data/alphabet";
import {arabicWithShortVowels} from "../data/shortVowels";
import {useRef, useState} from "react";
import FlipCard, {FlipCardRef} from "../components/flipCard";
import {Button} from "react-native-paper";
import {LearningCardData} from "../data/learning";

const HISTORY_SIZE = 10;

const useLetterSelection = (array : LearningCardData[]) => {
    const [usedLetters, setUsedLetters] = useState<string[]>([]);
    const [currentLetter, setCurrentLetter] = useState(() => {
        const letter = array[Math.floor(Math.random() * array.length)];
        return letter;
    });

    const getNextLetter = () => {
        const availableLetters = array.filter(
            letter => !usedLetters.includes(letter.content)
        );

        if (availableLetters.length === 0) {
            const randomLetter = array[Math.floor(Math.random() * array.length)];
            setUsedLetters([randomLetter.content]);
            setCurrentLetter(randomLetter);
            return;
        }

        const selectedLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
        setUsedLetters(prev => {
            const newHistory = [...prev, selectedLetter.content];
            return newHistory.slice(-HISTORY_SIZE);
        });
        setCurrentLetter(selectedLetter);
    };

    return { currentLetter, getNextLetter };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function QuizScreen({ route }: Props) {
    const { category } = route.params;
    const getLettersArray = () => {
        switch (category) {
            case 'alphabet':
                return arabicAlphabet;
            case 'shortVowels':
                return arabicWithShortVowels;
            default:
                return arabicAlphabet;
        }
    };
    const { currentLetter, getNextLetter } = useLetterSelection(getLettersArray());
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
