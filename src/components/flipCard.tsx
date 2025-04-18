import React, {forwardRef, useImperativeHandle, useState} from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import { Text, Card } from 'react-native-paper';
import { ArabicLetter } from '../data/alphabet';

export type FlipCardRef = {
    flipIfBack: () => void;
};

type Props = {
    letter: ArabicLetter;
};

const FlipCard = forwardRef<FlipCardRef, Props>(({ letter }: Props, ref) => {    const [flipped, setFlipped] = useState(false);
    const rotation = useSharedValue(0);

    const flip = () => {
        const newRotation = flipped ? 0 : 180;
        rotation.value = withTiming(newRotation, { duration: 500 });
        setFlipped(!flipped);
    };

    useImperativeHandle(ref, () => ({
        flipIfBack: () => {
            if (flipped) {
                flip();
            }
        },
    }));

    const frontStyle = useAnimatedStyle(() => ({
        transform: [
            { rotateY: `${interpolate(rotation.value, [0, 180], [0, 180])}deg` },
        ],
        opacity: interpolate(rotation.value, [0, 90], [1, 0]),
    }));

    const backStyle = useAnimatedStyle(() => ({
        transform: [
            { rotateY: `${interpolate(rotation.value, [0, 180], [180, 360])}deg` },
        ],
        opacity: interpolate(rotation.value, [90, 180], [0, 1]),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }));

    return (
        <Pressable onPress={flip}>
            <View style={styles.container}>
                <Animated.View style={[styles.card, frontStyle]}>
                    <Card style={styles.cardInner}>
                        <Card.Content>
                            <Text style={styles.letter}>{letter.letter}</Text>
                        </Card.Content>
                    </Card>
                </Animated.View>
                <Animated.View style={[styles.card, backStyle]}>
                    <Card style={styles.cardInner}>
                        <Card.Content>
                            <Text variant="titleLarge">{letter.name}</Text>
                            <Text>{letter.pronunciation}</Text>
                        </Card.Content>
                    </Card>
                </Animated.View>
            </View>
        </Pressable>
    );
});

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 40,
    },
    card: {
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
    },
    cardInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    letter: {
        fontSize: 100,
        textAlign: 'center',
    },
});

export default FlipCard;
