import { QuizCardData } from "./quiz";

export const arabicAlphabetQuiz: QuizCardData[] = [
    {
        id: 'quiz-alif',
        question: 'Quelle est cette lettre ? ا',
        possibleAnswers: ['Alif', 'Ba', 'Ta', 'Ya'],
        answer: 'Alif',
        answerDescription: 'L\'Alif (ا), la première lettre de l\'alphabet arabe.'
    },
    {
        id: 'quiz-ba',
        question: 'Quelle est cette lettre ? ب',
        possibleAnswers: ['Dal', 'Ba', 'Nun', 'Ta'],
        answer: 'Ba',
        answerDescription: 'Le Ba (ب), comme le "b" en français.'
    },
    {
        id: 'quiz-ta',
        question: 'Quelle est cette lettre ? ت',
        possibleAnswers: ['Ta', 'Ba', 'Tha', 'Dal'],
        answer: 'Ta',
        answerDescription: 'Le Ta (ت), comme le "t" en français.'
    },
    {
        id: 'quiz-tha',
        question: 'Quelle est cette lettre ? ث',
        possibleAnswers: ['Ta', 'Tha', 'Sin', 'Shin'],
        answer: 'Tha',
        answerDescription: 'Le Tha (ث), comme le "th" anglais dans "think".'
    },
    {
        id: 'quiz-jim',
        question: 'Quelle est cette lettre ? ج',
        possibleAnswers: ['Jim', 'Ha', 'Kha', 'Ghayn'],
        answer: 'Jim',
        answerDescription: 'Le Jim (ج), comme le "j" en français.'
    },
    {
        id: 'quiz-ha',
        question: 'Quelle est cette lettre ? ح',
        possibleAnswers: ['Ha', 'Kha', 'Ayn', 'Ha-final'],
        answer: 'Ha',
        answerDescription: 'Le Ha (ح), un "h" expiré profond.'
    },
    {
        id: 'quiz-kha',
        question: 'Quelle est cette lettre ? خ',
        possibleAnswers: ['Kha', 'Ha', 'Ghayn', 'Ayn'],
        answer: 'Kha',
        answerDescription: 'Le Kha (خ), comme la "jota" espagnole.'
    },
    {
        id: 'quiz-dal',
        question: 'Quelle est cette lettre ? د',
        possibleAnswers: ['Ra', 'Dal', 'Tha', 'Zay'],
        answer: 'Dal',
        answerDescription: 'Le Dal (د), comme le "d" en français.'
    },
    {
        id: 'quiz-thal',
        question: 'Quelle est cette lettre ? ذ',
        possibleAnswers: ['Thal', 'Dal', 'Za', 'Za-emph'],
        answer: 'Thal',
        answerDescription: 'Le Thal (ذ), comme le "th" anglais dans "this".'
    },
    {
        id: 'quiz-ra',
        question: 'Quelle est cette lettre ? ر',
        possibleAnswers: ['Ra', 'Dal', 'Nun', 'Waw'],
        answer: 'Ra',
        answerDescription: 'Le Ra (ر), comme un "r" roulé.'
    },
    {
        id: 'quiz-zay',
        question: 'Quelle est cette lettre ? ز',
        possibleAnswers: ['Zay', 'Ra', 'Sin', 'Za-emph'],
        answer: 'Zay',
        answerDescription: 'Le Zay (ز), comme le "z" en français.'
    },
    {
        id: 'quiz-sin',
        question: 'Quelle est cette lettre ? س',
        possibleAnswers: ['Sin', 'Shin', 'Sad', 'Za'],
        answer: 'Sin',
        answerDescription: 'Le Sin (س), comme le "s" en français.'
    },
    {
        id: 'quiz-shin',
        question: 'Quelle est cette lettre ? ش',
        possibleAnswers: ['Shin', 'Sin', 'Sad', 'Tha'],
        answer: 'Shin',
        answerDescription: 'Le Shin (ش), comme "ch" dans "chat".'
    },
    {
        id: 'quiz-sad',
        question: 'Quelle est cette lettre ? ص',
        possibleAnswers: ['Sad', 'Sin', 'Dad', 'Ta-emph'],
        answer: 'Sad',
        answerDescription: 'Le Sad (ص), un "s" emphatique.'
    },
    {
        id: 'quiz-dad',
        question: 'Quelle est cette lettre ? ض',
        possibleAnswers: ['Dad', 'Sad', 'Ta-emph', 'Dal'],
        answer: 'Dad',
        answerDescription: 'Le Dad (ض), un "d" emphatique.'
    },
    {
        id: 'quiz-ta-emph',
        question: 'Quelle est cette lettre ? ط',
        possibleAnswers: ['Ta-emph', 'Ta', 'Dad', 'Za-emph'],
        answer: 'Ta-emph',
        answerDescription: 'Le Ta emphatique (ط), un "t" plus appuyé.'
    },
    {
        id: 'quiz-za-emph',
        question: 'Quelle est cette lettre ? ظ',
        possibleAnswers: ['Za-emph', 'Thal', 'Dad', 'Za'],
        answer: 'Za-emph',
        answerDescription: 'Le Za emphatique (ظ), un "z" plus appuyé.'
    },
    {
        id: 'quiz-ayn',
        question: 'Quelle est cette lettre ? ع',
        possibleAnswers: ['Ayn', 'Ghayn', 'Ha', 'Hamza'],
        answer: 'Ayn',
        answerDescription: 'L\'Ayn (ع), un son guttural unique à l\'arabe.'
    },
    {
        id: 'quiz-ghayn',
        question: 'Quelle est cette lettre ? غ',
        possibleAnswers: ['Ghayn', 'Ayn', 'Kha', 'Qaf'],
        answer: 'Ghayn',
        answerDescription: 'Le Ghayn (غ), comme le "r" français.'
    },
    {
        id: 'quiz-fa',
        question: 'Quelle est cette lettre ? ف',
        possibleAnswers: ['Fa', 'Qaf', 'Kaf', 'Ba'],
        answer: 'Fa',
        answerDescription: 'Le Fa (ف), comme le "f" en français.'
    },
    {
        id: 'quiz-qaf',
        question: 'Quelle est cette lettre ? ق',
        possibleAnswers: ['Qaf', 'Kaf', 'Ghayn', 'Fa'],
        answer: 'Qaf',
        answerDescription: 'Le Qaf (ق), un "k" profond.'
    },
    {
        id: 'quiz-kaf',
        question: 'Quelle est cette lettre ? ك',
        possibleAnswers: ['Kaf', 'Qaf', 'Lam', 'Ya'],
        answer: 'Kaf',
        answerDescription: 'Le Kaf (ك), comme le "k" en français.'
    },
    {
        id: 'quiz-lam',
        question: 'Quelle est cette lettre ? ل',
        possibleAnswers: ['Lam', 'Alif', 'Ra', 'Nun'],
        answer: 'Lam',
        answerDescription: 'Le Lam (ل), comme le "l" en français.'
    },
    {
        id: 'quiz-mim',
        question: 'Quelle est cette lettre ? م',
        possibleAnswers: ['Mim', 'Nun', 'Ba', 'Fa'],
        answer: 'Mim',
        answerDescription: 'Le Mim (م), comme le "m" en français.'
    },
    {
        id: 'quiz-nun',
        question: 'Quelle est cette lettre ? ن',
        possibleAnswers: ['Nun', 'Ba', 'Ya', 'Ta'],
        answer: 'Nun',
        answerDescription: 'Le Nun (ن), comme le "n" en français.'
    },
    {
        id: 'quiz-ha-final',
        question: 'Quelle est cette lettre ? ه',
        possibleAnswers: ['Ha-final', 'Ta', 'Ha', 'Mim'],
        answer: 'Ha-final',
        answerDescription: 'Le Ha final (ه), comme le "h" en français.'
    },
    {
        id: 'quiz-waw',
        question: 'Quelle est cette lettre ? و',
        possibleAnswers: ['Waw', 'Ya', 'Ra', 'Fa'],
        answer: 'Waw',
        answerDescription: 'Le Waw (و), comme "w" ou "ou".'
    },
    {
        id: 'quiz-ya',
        question: 'Quelle est cette lettre ? ي',
        possibleAnswers: ['Ya', 'Ba', 'Nun', 'Waw'],
        answer: 'Ya',
        answerDescription: 'Le Ya (ي), comme "y" ou "i".'
    }
];