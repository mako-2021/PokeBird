exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {
          commonName: 'Haast tokoeka kiwi',
          latinName: 'Apteryx australis',
          birdOrder: 'Casuariiformes',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Endangered',
          length: '45 cm',
          weight: 'M: 2.4 kg | F: 3.1 kg',
          description: 'A large brown kiwi with rufous to dark brown soft feathers streaked with brown and black, a long pale bill, and short pale legs and toes.',
          image: '/images/001.png',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/southern-brown-kiwi'
        },
        {
          commonName: 'Rowi | Okarito brown kiwi',
          latinName: 'Apteryx rowi',
          birdOrder: 'Casuariiformes',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Vulnerable',
          length: '40 cm',
          weight: 'M: 1.9 kg | F: 2.6 kg',
          description: 'A large brown kiwi with pale brown soft feathers streaked with brown and black, a long pale bill, and short pale legs, toes and claws.',
          image: '/images/002.png',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/okarito-brown-kiwi'
        },
        {
          commonName: 'North Island brown kiwi',
          latinName: 'Apteryx mantelli',
          birdOrder: 'Casuariiformes',
          nzStatus: 'Endemic',
          conservationStatus: 'Declining',
          length: '40 cm',
          weight: 'M: 2 kg | F: 2.7 kg',
          description: 'A large brown kiwi with dark brown spiky feathers streaked with reddish brown and black, a long pale bill, and short dark legs, toes and claws.',
          image: '/images/003.png',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/north-island-brown-kiwi'
        },
        {
          commonName: 'Great spotted kiwi',
          latinName: 'Apteryx haastii',
          birdOrder: 'Casuariiformes',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Vulnerable',
          length: '45 cm',
          weight: 'M: 2.2 kg | F: 3.0 kg',
          description: 'A large pale kiwi with brownish-grey finely mottled feathers or banded horizontally with white, a long pale bill, and short dark legs and toes often with dark or dark streaked claws.',
          image: '/images/004.png',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/great-spotted-kiwi'
        }])
    })
}
