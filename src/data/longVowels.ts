import {LearningCardData} from "./learning";

export const arabicWithLongVowels: LearningCardData[] = [
    {
        id: 'long-vowels-intro',
        title: 'Introduction aux voyelles longues',
        contentDescription: 'Dans cette section, vous apprendrez les voyelles longues de l\'arabe. Contrairement aux voyelles courtes qui sont des signes diacritiques, les voyelles longues sont représentées par des lettres : Alif (ا), Waw (و) et Ya (ي).',
        type: 'intro'
    },
    {
        id: 'alif-intro',
        title: 'L\'Alif (ا)',
        contentDescription: 'L\'alif est utilisé pour représenter le son "aa" long, comme dans "pâte". Il prolonge le son de la fatha. Dans la transcription, elle est notée "aa".',
        type: 'intro'
    },
    { id: 'ba-alif', title: 'Ba + Alif', content: 'بَ ا', contentDescription: 'baa (comme dans "barre")', contentPronunciation: 'بَا', type: 'letter' },
    { id: 'da-alif', title: 'Dal + Alif', content: 'دَ ا', contentDescription: 'daa (comme dans "dard")', contentPronunciation: 'دَا', type: 'letter' },
    { id: 'ma-alif', title: 'Mim + Alif', content: 'مَ ا', contentDescription: 'maa (comme dans "marre")', contentPronunciation: 'مَا', type: 'letter' },

    {
        id: 'ya-intro',
        title: 'Le Ya (ي)',
        contentDescription: 'Le ya est utilisé pour représenter le son "ii" long, comme dans "ville". Il prolonge le son de la kasra. Dans la transcription, elle est notée "ii".',
        type: 'intro'
    },
    { id: 'fi-ya', title: 'Fa + Ya', content: 'فِ ي', contentDescription: 'fii (comme dans "fit")', contentPronunciation: 'فِي', type: 'letter' },
    { id: 'si-ya', title: 'Sin + Ya', content: 'سِ ي', contentDescription: 'sii (comme dans "si")', contentPronunciation: 'سِي', type: 'letter' },
    { id: 'li-ya', title: 'Lam + Ya', content: 'لِ ي', contentDescription: 'lii (comme dans "lit")', contentPronunciation: 'لِي', type: 'letter' },

    {
        id: 'waw-intro',
        title: 'Le Waw (و)',
        contentDescription: 'Le waw est utilisé pour représenter le son "ou" long, comme dans "route". Il prolonge le son de la damma. Dans la transcription, elle est notée "uu".',
        type: 'intro'
    },
    { id: 'nu-waw', title: 'Nun + Waw', content: 'نُ و', contentDescription: 'nou (comme dans "nous")', contentPronunciation: 'نُو', type: 'letter' },
    { id: 'su-waw', title: 'Sin + Waw', content: 'سُ و', contentDescription: 'sou (comme dans "sous")', contentPronunciation: 'سُو', type: 'letter' },
    { id: 'ru-waw', title: 'Ra + Waw', content: 'رُ و', contentDescription: 'rou (comme dans "route")', contentPronunciation: 'رُو', type: 'letter' },
    {
        id: 'long-vowels-outro',
        title: 'Félicitations !',
        contentDescription: 'Vous avez terminé l\'apprentissage des voyelles longues en arabe ! Vous pouvez maintenant passer au quiz pour tester vos connaissances.',
        type: 'outro'
    }
];