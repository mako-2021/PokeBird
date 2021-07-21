const quizData = [
    {
        id: 1,
        questionText: 'How much of their lives albatrosses spend at sea?',
        answerOptions: [
            { answerText: 'Less than 25%', isCorrect: false },
            { answerText: 'Around 50%', isCorrect: false },
            { answerText: 'At least 85%', isCorrect: true }
        ],
        correctAnswer: 'Albatrosses spend at least 85% of their lives at sea returning to land (usually remote islands) to breed and raise their young.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/765be0cc148c4606be5d1e51bdcfb973/2013-albatross-chick-1920-2.jpg'
    },
    {
        id: 2,
        questionText: 'Is Bellbird/korimako endemic to New Zealand?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false }
        ],
        correctAnswer: 'Yes. The bellbird is unique to New Zealand, occurring on the three main islands and many offshore islands. Once common, their numbers declined sharply during the 1860s in the North Island and 1880s in the South Island, about the time that ship rats and stoats arrived.',
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
        correctAnswer: 'Chatham Islands black robin. By 1900, the introduction of rats and cats following human settlement had wiped out the birds from everywhere apart from Little Mangere Island. In 1972 wildlife officers could find only 18 black robins living on Little Mangere Island. In 1976 there were only seven birds left. These were all moved to Mangere Island where 120,000 trees had been planted to provide better shelter. There were only five black robins in the world in 1980, with just a single breeding pair left.The outlook was bleak, but a dedicated team of New Zealand Wildlife Service staff took the daring step of cross-fostering eggs and young to another species to boost productivity. In early 2013, the black robin population was around 250. Numbers remain stable.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/e2d052e58a524678834413ef47993150/chathams-island-black-robin-hero.jpg'
    },
    {
        id: 4,
        questionText: 'What is the Māori name for Silvereye bird?',
        answerOptions: [
            { answerText: 'Tauhou', isCorrect: true },
            { answerText: 'Mātātā', isCorrect: false },
            { answerText: 'Ruru', isCorrect: false }
        ],
        correctAnswer: 'Tauhou which means stranger in Māori.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/cec52a74b8b44a65bb3e703f44b5bec9/silvereye-jj-harrison-1920.jpg'
    },
    {
        id: 5,
        questionText: 'Which new Zealand bird has a distinctive noisy beat of its wings?',
        answerOptions: [
            { answerText: 'Pūkeko', isCorrect: true },
            { answerText: 'Kererū', isCorrect: false },
            { answerText: 'Kiwi', isCorrect: false }
        ],
        correctAnswer: 'Kererū is one of the two species of native pigeon in New Zealand. Kererū can measure up to 51cm from tail to beak, and weigh about 650g.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/d858de7f16ff4eef8c4276fdeb37501b/kereru-taieri-mouth-1920-2.jpg'
    },
    {
        id: 6,
        questionText: 'How many shelduck species are present in NZ?',
        answerOptions: [
            { answerText: 'More than 10', isCorrect: false },
            { answerText: '1', isCorrect: true },
            { answerText: '3', isCorrect: false }
        ],
        correctAnswer: '1 - The Paradise duck/pūtakitaki/pūtangitangi is New Zealand’s only shelduck, a worldwide group of large, often semi-terrestrial waterfowl that have goose-like features.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/34b7142a580b47518ab7923755211ae0/paradise-duck-female-1920.jpg'
    },
    {
        id: 7,
        questionText: 'What is one of New Zealand’s rarest birds?',
        answerOptions: [
            { answerText: 'Stitchbird/hihi', isCorrect: true },
            { answerText: 'Wrybill/ngutu pare', isCorrect: false },
            { answerText: 'Yellowhead/mohua', isCorrect: false }
        ],
        correctAnswer: 'Stitchbird/hihi is a medium-sized forest species that is one of New Zealand’s rarest birds. Habitat loss, the introduction of mammalian predators such as cats and rats and specimen collection probably contributed to the decline of hihi on the mainland. They also appear to be especially prone to the effects of diseases, which may have been introduced to New Zealand with domestic birds.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/6c492a45411948dfa0538357e9188100/stitchbird-hihi-michael-hamilton-1920-2.jpg'
    },
    {
        id: 8,
        questionText: 'Grey warbler/riroriro is one of New Zealand’s lightest birds. Could you guess its weight?',
        answerOptions: [
            { answerText: 'More than 50 grms', isCorrect: false },
            { answerText: 'Less than 10 grms', isCorrect: true },
            { answerText: 'More than 100 grms', isCorrect: false }
        ],
        correctAnswer: 'Grey warbler/riroriro\'s weight is about 6.5g, which is around one-third the weight of a mouse.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/3ee58cadd67144f786d9b98c434fdecb/grey-warbler-michael-hamilton-1920.jpg'
    },
    {
        id: 9,
        questionText: 'Which one of the below New Zealand birds can fly?',
        answerOptions: [
            { answerText: 'Weka', isCorrect: false },
            { answerText: 'Takahē', isCorrect: false },
            { answerText: 'New Zealand dotterel//tūturiwhatu', isCorrect: true }
        ],
        correctAnswer: 'New Zealand dotterel/tūturiwhatu. Both Weka and Takahē are flightless. The endangered New Zealand dotterel was once widespread and common. Now there are only about 2500 birds left, making dotterels more at risk than some species of kiwi.',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/568d611f8c544503b37f0f9dca26bfa9/southern-nz-dotterel-1920-2.jpg'
    },
    {
        id: 10,
        questionText: 'Keas are considered to be one of the most intelligent birds in the world. Is this true or false?',
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false }
        ],
        correctAnswer: 'True. The endangered Kea is one of the most intelligent birds in the world. This unique problem-solving parrot was crowned Bird of the Year in 2017. ',
        imageURL: 'https://www.doc.govt.nz/thumbs/hero/contentassets/16e1b2847aaa47789d5f7ffaf37b0c7b/female-kea-feeding-chick-fiordland-1920.jpg'
    },
];

export default quizData
