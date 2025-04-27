import {LearningCardData} from "./learning";

export const chadda: LearningCardData[] = [
    {
        id: 'chadda',
        title: 'Introduction à la Chadda',
        contentDescription: 'Dans cette section, vous apprendrez la Chadda, le signe de doublement de consonne en arabe.',
        type: 'intro'
    },
    {
        id: 'chadda-intro',
        title: 'La Chadda ( ّ   )',
        contentDescription: 'La Chadda est un signe diacritique qui ressemble à un petit "w" ( ّ  ). Placée au-dessus d\'une lettre, elle indique que cette consonne doit être prononcée deux fois',
        type: 'intro'
    },
    {
        id: 'ba-chadda',
        title: 'Ba + Chadda',
        content: 'بّ',
        contentDescription: 'Le son "bb", comme dans "rabbana".',
        contentPronunciation: 'بّ',
        type: 'letter'
    },
    {
        id: 'rabbi',
        title: 'Rabbi',
        content: 'رَ بِّ ي',
        contentDescription: '"Mon Seigneur" en arabe. La Chadda est utilisée sur le "ب" pour indiquer le doublement du "b".',
        contentPronunciation: 'رَبِّي',
        type: 'word'
    },
    {
        id: 'chadda-outro',
        title: 'Félicitations !',
        contentDescription: 'Vous avez appris la Chadda. Vous pouvez maintenant l\'utiliser pour doubler les consonnes en arabe.',
        type: 'outro'
    }
];