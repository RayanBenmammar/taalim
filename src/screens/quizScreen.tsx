import {View, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import {useRef, useState} from "react";
import FlipCard, {FlipCardRef} from "../components/flipCard";
import {Button} from "react-native-paper";
import {QuizCardData} from "../data/quiz/quiz";
import {arabicAlphabetQuiz} from "../data/quiz/alphabet";

const useCardNavigation = (array: QuizCardData[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState(array[0]);

    const getNextCard = () => {
        const nextIndex = (currentIndex + 1) % array.length;
        setCurrentIndex(nextIndex);
        setCurrentCard(array[nextIndex]);
    };

    return { currentIndex, currentCard, getNextCard };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function QuizScreen({ route }: Props) {
    const { category } = route.params;
    const getCardsArray = () => {
        switch (category) {
            case 'alphabet':
                return arabicAlphabetQuiz ;
            default:
                return arabicAlphabetQuiz;
        }
    };
    const { currentIndex,currentCard, getNextCard } = useCardNavigation(getCardsArray());
    const cardRef = useRef<FlipCardRef>(null);

    const handleNext = () => {
        cardRef.current?.flipIfBack();
        setTimeout(() => {
            getNextCard()
        }, 200);
    };

    const handleAnswer = () => {
        cardRef.current?.displayBack();
    };
    return (
        <View style={styles.container}>
            <FlipCard ref={cardRef} card={currentCard} />
            { currentCard.possibleAnswers.map(answer => (
                <Button key={answer} mode="contained" onPress={handleAnswer} style={styles.button}>
                    {answer}
                </Button>
            ))}
            <Button mode="contained" onPress={handleNext} style={styles.button}>
                Question suivante
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
