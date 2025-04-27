import {LearningCardData} from "./learning";

export const sukun: LearningCardData[] = [
    {
        id: 'sukun',
        title: 'Introduction au Sukūn',
        contentDescription: 'Dans cette section, vous apprendrez l\'absence de voyelle en arabe, le Sukūn',
        type: 'intro'
    },
    {
        id: 'sukun-intro',
        title: 'Le Sukūn ( ° )',
        contentDescription: 'Le Sukūn est un signe diacritique utilisé en arabe pour indiquer l\'absence de voyelle sur une lettre. Il est représenté par un petit cercle au-dessus de la lettre, ( ° ).',
        type: 'intro'
    },
    {
        id: 'sin-sukun',
        title: 'Sin + Sukūn',
        content: 'سْ',
        contentDescription: 'Le son "s" sans voyelle, comme dans "muscle".',
        contentPronunciation: 'سْ',
        type: 'letter'
    },
    {
        id: 'ismi',
        title: 'Ismi',
        content: 'إِ سْ مِ ي',
        contentDescription: '\"Mon nom\" en arabe est "Ismi". Le Sukūn est utilisé sur la lettre "س" pour indiquer qu\'il n\'y a pas de voyelle après.',
        contentPronunciation: 'إسْمِي',
        type: 'word'
    },
    {
        id: 'sukun-outro',
        title: 'Félicitations !',
        contentDescription: 'Vous avez appris le Sukūn. Vous pouvez maintenant l\'utiliser pour lire et écrire des mots sans voyelles.',
        type: 'outro'
    }
];