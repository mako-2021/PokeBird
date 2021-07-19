const quizData = [
    {
        id: 1,
        questionText: 'How much of their lives albatrosses spend at sea?',
        answerOptions: [
            { answerText: 'less than 25%', isCorrect: false },
            { answerText: 'around 50%', isCorrect: false },
            { answerText: 'at least 85%', isCorrect: true }
        ],
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/765be0cc148c4606be5d1e51bdcfb973/2013-albatross-chick-1920-2.jpg'
    },
    {
        id: 2,
        questionText: 'Is Bellbird endemic to NZ?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false }
        ],
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/a9df6771b0394be39a12138a802ae8fa/bellbird-s-evans-1920-2.jpg'
    },
    {
        id: 3,
        questionText: 'Which bird of the Chatham Islands has recovered from the brink of extinction due to a successful recovery program?',
        answerOptions: [
            { answerText: 'Chatham petrel', isCorrect: false },
            { answerText: 'Chatham albatross', isCorrect: false },
            { answerText: 'Chatham Islands black robin', isCorrect: true }
        ],
        correctAnswer: 'Chatham Islands black robin',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/e2d052e58a524678834413ef47993150/chathams-island-black-robin-hero.jpg'
    }
];

export default quizData
