import { StyleSheet, View,  } from 'react-native';
import { Text, Card } from 'react-native-paper';
import * as Speech from 'expo-speech';
import { IconButton } from 'react-native-paper';
import {LearningCardData} from "../data/learning/learning";


type Props = {
    card: LearningCardData;
};

const LearningCard = (({ card }: Props) => {


    const speakLetter = (text: string) => {
        Speech.speak(text, {
            language: 'ar-SA',
            pitch: 1,
            rate: 0.8,
        });
    };


    return (
        <View style={styles.container}>
            <Card style={styles.cardInner}>
                <Card.Content style={styles.contentContainer}>
                    <Text style={styles.title}>{card.title}</Text>
                    { card.content &&
                        <Text style={styles.content}>{card.content}</Text>
                    }
                    <Text style={styles.contentDescription}>{card.contentDescription}</Text>
                    { card.contentPronunciation &&
                        <IconButton
                            icon="volume-high"
                            size={32}
                            onPress={() => speakLetter(card.contentPronunciation!)}
                            style={styles.soundButton}
                            accessibilityLabel="Lire la lettre à haute voix"
                        />
                    }
                </Card.Content>
            </Card>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        minHeight: '50%',
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        minHeight: '100%',
        backfaceVisibility: 'hidden',
    },
    cardInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
    content: {
        fontSize: 90,
        textAlign: 'center',
        writingDirection: 'rtl',
        fontFamily: 'NotoNaskhArabic'
    },
    contentDescription: {
        fontSize: 20,
        textAlign: 'center',
    },
    soundButton: {
        marginTop: 10,
    }
});

export default LearningCard;
