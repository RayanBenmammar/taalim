import {View, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import {useState} from "react";
import {arabicAlphabet} from "../data/learning/alphabet";
import {Button} from "react-native-paper";
import {arabicWithShortVowels} from "../data/learning/shortVowels";
import {LearningCardData} from "../data/learning/learning";
import LearningCard from "../components/learningCard";
import {arabicWithLongVowels} from "../data/learning/longVowels";
import {sukun} from "../data/learning/sukun";
import {chadda} from "../data/learning/chadda";

const useCardNavigation = (array: LearningCardData[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState(array[0]);

    const getNextCard = () => {
        const nextIndex = (currentIndex + 1) % array.length;
        setCurrentIndex(nextIndex);
        setCurrentCard(array[nextIndex]);
    };

    const getPreviousCard = () => {
        if(currentIndex === 0) {
            return;
        }
        const previousIndex = (currentIndex - 1 + array.length) % array.length;
        setCurrentIndex(previousIndex);
        setCurrentCard(array[previousIndex]);
    }

    return { currentIndex, currentCard, getNextCard, getPreviousCard };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Learning'>;

export default function LearningScreen({ route } : Props) {
    const { category } = route.params;
    const getCardsArray = () => {
        switch (category) {
            case 'alphabet':
                return arabicAlphabet;
            case 'shortVowels':
                return arabicWithShortVowels;
            case 'longVowels':
                return arabicWithLongVowels;
            case 'sukun':
                return sukun;
            case 'chadda':
                return chadda;
            default:
                return arabicAlphabet;
        }
    };
    const { currentIndex,currentCard, getNextCard, getPreviousCard } = useCardNavigation(getCardsArray());


    return (
        <View style={styles.container}>
            <LearningCard card={currentCard}></LearningCard>
            <View style={styles.buttonsContainer}>
                {currentIndex !== 0 &&
                    <Button mode="contained" onPress={getPreviousCard} style={styles.button}>
                        Précédent
                    </Button>
                }
                {currentIndex !== getCardsArray().length -1 &&
                    <Button mode="contained" onPress={getNextCard} style={styles.button}>
                        Suivant
                    </Button>
                }
            </View>

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
    buttonsContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
    }
});