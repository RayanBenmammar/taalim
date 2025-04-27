import {LearningCardData} from "./learning";

export const arabicWithShortVowels: LearningCardData[] = [
    {
        id: 'short-vowels-intro',
        title: 'Introduction aux voyelles courtes',
        contentDescription: 'Dans cette section, vous apprendrez les voyelles courtes de l\'arabe. Ces voyelles sont des signes diacritiques qui se placent au-dessus ou en-dessous des lettres : Fatha (   َ   ), Kasra (  ِ   ) et Damma (    ُ   ).',
        type: 'intro'
    },
    {
        id: 'fatha-intro',
        title: 'La Fatha (  َ   )',
        contentDescription: 'La fatha est un petit trait horizontal placé au-dessus de la lettre. Elle produit le son "a" court comme dans "patte". Dans la transcription, elle est notée "a".',
        type: 'intro'
    },
    { id: 'ba-fatha', title: 'Ba + Fatha', content: 'بَ', contentDescription: 'ba (comme dans "bal")', contentPronunciation: 'بَ', type: 'letter' },
    { id: 'da-fatha', title: 'Dal + Fatha', content: 'دَ', contentDescription: 'da (comme dans "date")', contentPronunciation: 'دَ', type: 'letter' },
    { id: 'ma-fatha', title: 'Mim + Fatha', content: 'مَ', contentDescription: 'ma (comme dans "mal")', contentPronunciation: 'مَ', type: 'letter' },

    {
        id: 'kasra-intro',
        title: 'La Kasra (  ِ   )',
        contentDescription: 'La kasra est un petit trait horizontal placé sous la lettre. Elle produit le son "i" court comme dans "lit". Dans la transcription, elle est notée "i".',
        type: 'intro'
    },
    { id: 'bi-kasra', title: 'Ba + Kasra', content: 'بِ', contentDescription: 'bi (comme dans "bit")', contentPronunciation: 'بِ', type: 'letter' },
    { id: 'di-kasra', title: 'Dal + Kasra', content: 'دِ', contentDescription: 'di (comme dans "dit")', contentPronunciation: 'دِ', type: 'letter' },
    { id: 'mi-kasra', title: 'Mim + Kasra', content: 'مِ', contentDescription: 'mi (comme dans "mis")', contentPronunciation: 'مِ', type: 'letter' },

    {
        id: 'damma-intro',
        title: 'La Damma (  ُ   )',
        contentDescription: 'La damma est un petit واو placé au-dessus de la lettre. Elle produit le son "ou" court comme dans "bout". Dans la transcription, elle est notée "u".',
        type: 'intro'
    },
    { id: 'bu-damma', title: 'Ba + Damma', content: 'بُ', contentDescription: 'bou (comme dans "bout")', contentPronunciation: 'بُ', type: 'letter' },
    { id: 'du-damma', title: 'Dal + Damma', content: 'دُ', contentDescription: 'dou (comme dans "doux")', contentPronunciation: 'دُ', type: 'letter' },
    { id: 'mu-damma', title: 'Mim + Damma', content: 'مُ', contentDescription: 'mou (comme dans "mou")', contentPronunciation: 'مُ', type: 'letter' },
    {
        id: 'short-vowels-outro',
        title: 'Félicitations !',
        contentDescription: 'Vous avez terminé l\'apprentissage des voyelles courtes en arabe ! Vous pouvez maintenant passer au quiz pour tester vos connaissances.',
        type: 'outro'
    }
];