import {LearningCardData} from "./learning";

export const arabicAlphabet: LearningCardData[] = [
    {
        id: 'letter-intro',
        title: 'Introduction aux lettres isolées',
        contentDescription: 'Dans cette section, vous apprendrez les lettres isolées de l\'alphabet arabe. Chaque lettre a sa propre forme quand elle est seule, et elle peut changer de forme selon sa position dans un mot.',
        type: 'intro'
    },
    { id: 'alif', title: 'Alif', content: 'ا', contentDescription: 'a (comme dans "âne")', contentPronunciation: 'ا', type: 'letter' },
    { id: 'ba', title: 'Ba', content: 'ب', contentDescription: 'b (comme dans "bateau")', contentPronunciation: 'ب', type: 'letter' },
    { id: 'ta', title: 'Ta', content: 'ت', contentDescription: 't (comme dans "télé")', contentPronunciation: 'ت', type: 'letter' },
    { id: 'tha', title: 'Tha', content: 'ث', contentDescription: 'th (comme dans "think" en anglais)', contentPronunciation: 'ث', type: 'letter' },
    { id: 'jim', title: 'Jim', content: 'ج', contentDescription: 'j (comme dans "je") ou "g" doux (comme "gentil")', contentPronunciation: 'ج', type: 'letter' },
    { id: 'ha', title: 'Ha', content: 'ح', contentDescription: 'ḥ (h expiré, plus profond que "h")', contentPronunciation: 'ح', type: 'letter' },
    { id: 'kha', title: 'Kha', content: 'خ', contentDescription: 'kh (comme le "j" espagnol ou "Bach")', contentPronunciation: 'خ', type: 'letter' },
    { id: 'dal', title: 'Dal', content: 'د', contentDescription: 'd (comme dans "don")', contentPronunciation: 'د', type: 'letter' },
    { id: 'dhal', title: 'Dhal', content: 'ذ', contentDescription: 'dh (comme "this" en anglais)', contentPronunciation: 'ذ', type: 'letter' },
    { id: 'ra', title: 'Ra', content: 'ر', contentDescription: 'r roulé (comme en espagnol)', contentPronunciation: 'ر', type: 'letter' },
    { id: 'zay', title: 'Zay', content: 'ز', contentDescription: 'z (comme dans "zèbre")', contentPronunciation: 'ز', type: 'letter' },
    { id: 'sin', title: 'Sin', content: 'س', contentDescription: 's (comme dans "soleil")', contentPronunciation: 'س', type: 'letter' },
    { id: 'shin', title: 'Shin', content: 'ش', contentDescription: 'sh (comme dans "chat")', contentPronunciation: 'ش', type: 'letter' },
    { id: 'sad', title: 'Sad', content: 'ص', contentDescription: 'ṣ (s emphatique, plus appuyé)', contentPronunciation: 'ص', type: 'letter' },
    { id: 'dad', title: 'Dad', content: 'ض', contentDescription: 'ḍ (d emphatique, propre à l\'arabe)', contentPronunciation: 'ض', type: 'letter' },
    { id: 'ta-emph', title: 'Taʼ', content: 'ط', contentDescription: 'ṭ (t emphatique, plus appuyé)', contentPronunciation: 'ط', type: 'letter' },
    { id: 'za-emph', title: 'Zaʼ', content: 'ظ', contentDescription: 'ẓ (z emphatique, proche de "the")', contentPronunciation: 'ظ', type: 'letter' },
    { id: 'ayn', title: 'Ayn', content: 'ع', contentDescription: 'ʿ (son guttural, difficile à prononcer)', contentPronunciation: 'ع', type: 'letter' },
    { id: 'ghayn', title: 'Ghayn', content: 'غ', contentDescription: 'gh (comme le "r" français au fond de la gorge)', contentPronunciation: 'غ', type: 'letter' },
    { id: 'fa', title: 'Fa', content: 'ف', contentDescription: 'f (comme dans "fleur")', contentPronunciation: 'ف', type: 'letter' },
    { id: 'qaf', title: 'Qaf', content: 'ق', contentDescription: 'q (k profond, au fond de la gorge)', contentPronunciation: 'ق', type: 'letter' },
    { id: 'kaf', title: 'Kaf', content: 'ك', contentDescription: 'k (comme dans "kilo")', contentPronunciation: 'ك', type: 'letter' },
    { id: 'lam', title: 'Lam', content: 'ل', contentDescription: 'l (comme dans "lune")', contentPronunciation: 'ل', type: 'letter' },
    { id: 'mim', title: 'Mim', content: 'م', contentDescription: 'm (comme dans "maman")', contentPronunciation: 'م', type: 'letter' },
    { id: 'nun', title: 'Nun', content: 'ن', contentDescription: 'n (comme dans "neige")', contentPronunciation: 'ن', type: 'letter' },
    { id: 'ha-final', title: 'Haʼ', content: 'ه', contentDescription: 'h (comme dans "héros")', contentPronunciation: 'ه', type: 'letter' },
    { id: 'waw', title: 'Waw', content: 'و', contentDescription: 'w (comme dans "water") ou "ou" (comme dans "loup")', contentPronunciation: 'و', type: 'letter' },
    { id: 'ya', title: 'Yaʼ', content: 'ي', contentDescription: 'y (comme dans "yoga") ou "i" (comme dans "île")', contentPronunciation: 'ي', type: 'letter' },
    {
        id: 'letter-outro',
        title: 'Félicitations !',
        contentDescription: 'Vous avez parcouru toutes les lettres de l\'alphabet arabe ! Vous pouvez maintenant passer au quiz pour tester vos connaissances.',
        type: 'outro'
    }
];