export type ArabicLetter = {
    letter: string;
    name: string;
    pronunciation: string;
}

export const arabicAlphabet: ArabicLetter[] = [
    { letter: 'ا', name: 'Alif', pronunciation: 'a (comme dans "âne")' },
    { letter: 'ب', name: 'Ba', pronunciation: 'b (comme dans "bateau")' },
    { letter: 'ت', name: 'Ta', pronunciation: 't (comme dans "télé")' },
    { letter: 'ث', name: 'Tha', pronunciation: 'th (comme dans "think" en anglais)' },
    { letter: 'ج', name: 'Jim', pronunciation: 'j (comme dans "je") ou "g" doux (comme "gentil")' },
    { letter: 'ح', name: 'Ha', pronunciation: 'ḥ (h expiré, plus profond que "h")' },
    { letter: 'خ', name: 'Kha', pronunciation: 'kh (comme le "j" espagnol ou "Bach")' },
    { letter: 'د', name: 'Dal', pronunciation: 'd (comme dans "don")' },
    { letter: 'ذ', name: 'Dhal', pronunciation: 'dh (comme "this" en anglais)' },
    { letter: 'ر', name: 'Ra', pronunciation: 'r roulé (comme en espagnol)' },
    { letter: 'ز', name: 'Zay', pronunciation: 'z (comme dans "zèbre")' },
    { letter: 'س', name: 'Sin', pronunciation: 's (comme dans "soleil")' },
    { letter: 'ش', name: 'Shin', pronunciation: 'sh (comme dans "chat")' },
    { letter: 'ص', name: 'Sad', pronunciation: 'ṣ (s emphatique, plus appuyé)' },
    { letter: 'ض', name: 'Dad', pronunciation: 'ḍ (d emphatique, propre à l’arabe)' },
    { letter: 'ط', name: 'Taʼ', pronunciation: 'ṭ (t emphatique, plus appuyé)' },
    { letter: 'ظ', name: 'Zaʼ', pronunciation: 'ẓ (z emphatique, proche de "the")' },
    { letter: 'ع', name: 'Ayn', pronunciation: 'ʿ (son guttural, difficile à prononcer)' },
    { letter: 'غ', name: 'Ghayn', pronunciation: 'gh (comme le "r" français au fond de la gorge)' },
    { letter: 'ف', name: 'Fa', pronunciation: 'f (comme dans "fleur")' },
    { letter: 'ق', name: 'Qaf', pronunciation: 'q (k profond, au fond de la gorge)' },
    { letter: 'ك', name: 'Kaf', pronunciation: 'k (comme dans "kilo")' },
    { letter: 'ل', name: 'Lam', pronunciation: 'l (comme dans "lune")' },
    { letter: 'م', name: 'Mim', pronunciation: 'm (comme dans "maman")' },
    { letter: 'ن', name: 'Nun', pronunciation: 'n (comme dans "neige")' },
    { letter: 'ه', name: 'Haʼ', pronunciation: 'h (comme dans "héros")' },
    { letter: 'و', name: 'Waw', pronunciation: 'w (comme dans "water") ou "ou" (comme dans "loup")' },
    { letter: 'ي', name: 'Yaʼ', pronunciation: 'y (comme dans "yoga") ou "i" (comme dans "île")' },
];