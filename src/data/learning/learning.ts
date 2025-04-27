export type LearningCardData = {
    id: string;
    title: string;
    content?: string;
    contentPronunciation?: string;
    contentDescription: string;
    type: 'letter' | 'word' | 'intro' | 'outro';
};
