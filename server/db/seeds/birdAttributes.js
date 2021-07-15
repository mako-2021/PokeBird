exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('birdAttributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('birdAttributes').insert([
        {
          birdId: 001,
          commonName: 'Kārearea / New Zealand falcon',
          latinName: 'Falco novaeseelandiae',
          nzStatus: 'Endemic',
          conservationStatus: 'Recovering',
          length: '40-50 cm',
          weight: 'Male: 205 - 340 g, Female: 420 - 740 g',
          description: 'A robust falcon with broad wings, long tail, long yellow legs and toes, yellow eye-ring and cere, dark eyes, and a distinct moustache stripe from the base of the strongly hooked bill down the face. Adults are brown-backed with a streaked cream breast and a rufous under tail and thighs; fledglings and juveniles are dark brown, lack cream streaking, with blue-grey legs, eye-ring and cere.',
          image: 'http://nzbirdsonline.org.nz/sites/all/files/Falcon1.jpg',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-falcon'
        },
        {
          birdId: 002,
          commonName: 'Piwakawaka / Fantail',
          latinName: 'Rhipidura fuliginosa',
          nzStatus: 'Endemic',
          conservationStatus: 'Not Threatened',
          length: '16 cm',
          weight: '8 g',
          description: 'A small songbird with greyish head, white eyebrows, brown back and rump, cinnamon breast and belly, white and black bands across the upper breast, and a long black and white tail. Five percent of South Island birds are mainly black with black-brown over the rump, belly and flight feathers, and sometimes have a white spot over each ear.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-fantail'
        },
        {
          birdId: 003,
          commonName: 'Kororā / Little penguin',
          latinName: 'Eudyptula minor',
          nzStatus: 'Native',
          conservationStatus: 'Declining',
          length: '33 cm',
          weight: '1 kg',
          description: 'A small, stocky, dark blue and white penguin with a long, robust, dark hooked bill, blue-grey eyes, relatively short flipper-like wings, and pinkish-white legs and feet.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/little-penguin'
        },
        {
          birdId: 004,
          commonName: 'Kākāpō',
          latinName: 'Strigops habroptilus',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Critical',
          length: '60cm',
          weight: 'Male: 2-4 kg, Female: 1-2.5 kg',
          description: 'A very large bulky flightless moss green parrot with a pale owl-like face and large grey bill, legs and feet. The upperparts are moss green mottled with yellow and black above, and similar but more yellow below.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/kakapo'
        },
        {
          birdId: 005,
          commonName: 'Kea',
          latinName: 'Nestor notabilis',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Endangered',
          length: '46 cm',
          weight: '900 g',
          description: 'A large olive-green parrot with orange underwings and rump, a slender grey-black bill, and blue-green iridescence on the primary flight feathers. Females are 20% lighter than males with a shorter bill, and juveniles have a yellow cere, lower mandible and eyelids, which fade to grey as the bird matures.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/kea'
        },
        {
          birdId: 006,
          commonName: 'Kōkako',
          latinName: 'Callaeas wilsoni',
          nzStatus: 'Endemic',
          conservationStatus: 'Recovering',
          length: '38 cm',
          weight: '220 g',
          description: 'A large songbird with a blue-grey body, striking black mask and small rich blue wattles that grow from the base of the bill, long strong legs and a long down-curved tail. The sexes are alike; juveniles have pink or lilac wattles.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/north-island-kokako'
        },
        {
          birdId: 007,
          commonName: 'Ruru / Morepork',
          latinName: 'Ninox novaeseelandiae',
          nzStatus: 'Native',
          conservationStatus: 'Not Threatened',
          length: '29 cm',
          weight: '175 g',
          description: 'A small, dark brown owl of forests and forest remnants, including in suburbs. Most often detected by its characteristic morepork call, moreporks have a range of other calls often confused with kiwi (cree) and little owl (yelp).',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/morepork'
        },
        {
          birdId: 008,
          commonName: 'Kererū',
          latinName: 'Hemiphaga novaeseelandiae',
          nzStatus: 'Endemic',
          conservationStatus: 'Not Threatened',
          length: '50 cm',
          weight: '630 g',
          description: 'A large arboreal pigeon with a red bill, feet and eyes. The upperparts are blue-green with purple-bronze iridescence on the neck, mantle and wing coverts, and the underparts are white with a sharp demarcation between the white and blue-green on the upper breast.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-pigeon'
        },
        {
          birdId: 009,
          commonName: 'Toroa / Antipodean albatross',
          latinName: 'Diomedea antipodensis',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Critical',
          length: '110 cm',
          weight: '4.5 - 8.5 kg',
          description: 'A large pink-billed albatross with plumage ranging in colour from brown with black upper wings, white face and underwing to predominantly white birds with black only on the outer 2/3 of the upper wings. The Auckland Island subspecies is lighter-coloured than the Antipodes Island subspecies, with males lighter-coloured than females and birds becoming lighter-coloured with age.',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/antipodean-albatross'
        }
      ])
    })
}
