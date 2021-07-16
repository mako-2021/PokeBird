exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('birdAttributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('birdAttributes').insert([
        {
          commonName: 'Haast tokoeka kiwi',
          latinName: 'Apteryx australis',
          birdOrder: 'Casuariiformes',
          nzStatus: 'Endemic',
          conservationStatus: 'Nationally Endangered',
          length: '45 cm',
          weight: 'M: 2.4 kg | F: 3.1 kg',
          description: 'A large brown kiwi with rufous to dark brown soft feathers streaked with brown and black, a long pale bill, and short pale legs and toes.',
          image: '#',
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
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/okarito-brown-kiwi'
        },
        {
          commonName: 'North Island brown kiwi',
          latinName: 'Apteryx mantelli',
          birdOrder: 'Casuariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: '',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/north-island-brown-kiwi'
        },
        {
          commonName: 'Great spotted kiwi',
          latinName: 'Apteryx haastii',
          birdOrder: 'Casuariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/great-spotted-kiwi'
        },
        {
          commonName: 'Little spotted kiwi',
          latinName: 'Apteryx owenii',
          birdOrder: 'Casuariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/little-spotted-kiwi'
        },
        {
          commonName: 'Turkey',
          latinName: 'Meleagris gallopavo',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/wild-turkey'
        },
        {
          commonName: 'Indian peacock',
          latinName: 'Pavo cristatus',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/peafowl'
        },
        {
          commonName: 'Pheasant',
          latinName: 'Phasianus colchicus',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/common-pheasant'
        },
        {
          commonName: 'Chukar',
          latinName: 'Alectoris chukar',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/chukor'
        },
        {
          commonName: 'Brown quail',
          latinName: 'Coturnix ypsilophora',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x kg | F: x kg',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/brown-quail'
        },
        {
          commonName: 'Helmmeted guineafowl',
          latinName: 'Numida meleagris',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/helmeted-guineafowl'
        },
        {
          commonName: 'California quail',
          latinName: 'Callipepla californica',
          birdOrder: 'Galliformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/california-quail'
        },
        {
          commonName: 'White swan',
          latinName: 'Cygnus olor',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/mute-swan'
        },
        {
          commonName: 'Black swan',
          latinName: 'Cygnus atratus',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/black-swan'
        },
        {
          commonName: 'Greylag goose',
          latinName: 'Anser anser',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/greylag-goose'
        },
        {
          commonName: 'Canada goose',
          latinName: 'Branta canadensis',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/canada-goose'
        },
        {
          commonName: 'Pūtangitangi | Paradise shellduck',
          latinName: 'Tadorna variegata',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/paradise-shelduck'
        },
        {
          commonName: 'Whio | Blue duck',
          latinName: 'Hymenolaimus malacorhynchos',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/blue-duck'
        },
        {
          commonName: 'Grey teal',
          latinName: 'Anas gracilis',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/grey-teal'
        },
        {
          commonName: 'Pāteke | Brown teal',
          latinName: 'Anas chlorotis',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/brown-teal'
        },
        {
          commonName: 'Mallard duck',
          latinName: 'Anas platyrhynchos',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/mallard'
        },
        {
          commonName: 'Australasian shoveler',
          latinName: 'Anas rhynchotis',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/australasian-shoveler'
        },
        {
          commonName: 'Pāpango | New Zealand scaup',
          latinName: 'Aythya novaeseelandiae',
          birdOrder: 'Anseriformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-scaup'
        },
        {
          commonName: 'Great crested grebe',
          latinName: 'Podiceps cristatus',
          birdOrder: 'Podicipediformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/australasian-crested-grebe'
        },
        {
          commonName: 'New Zealand dabchick',
          latinName: 'Poliocephalus rufopectus',
          birdOrder: 'Podicipediformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-dabchick'
        },
        {
          commonName: 'Australasian little grebe',
          latinName: 'Tachybaptus novaehollandiae',
          birdOrder: 'Podicipediformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/australasian-little-grebe'
        },
        {
          commonName: 'Tawaki | Fiordland crested penguin',
          latinName: 'Eudyptes pachyrhynchus',
          birdOrder: 'Sphenisciformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/fiordland-crested-penguin'
        },
        {
          commonName: 'Erect-crested penguin',
          latinName: 'Eudyptes sclateri',
          birdOrder: 'Sphenisciformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/erect-crested-penguin'
        },
        {
          commonName: 'Hoiho | Yellow-eyed penguin',
          latinName: 'Megadyptes antipodes',
          birdOrder: 'Sphenisciformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/yellow-eyed-penguin'
        },
        {
          commonName: 'Kororā | Little penguin',
          latinName: 'Eudyptula minor',
          birdOrder: 'Sphenisciformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/little-penguin'
        },
        {
          commonName: 'Southern royal albatross',
          latinName: 'Diomedea epomophora',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/southern-royal-albatross'
        },
        {
          commonName: 'Northern royal albatross',
          latinName: 'Diomedea sanfordi',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/northern-royal-albatross'
        },
        {
          commonName: 'Wandering albatross',
          latinName: 'Diomedea exulans',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/wandering-albatross'
        },
        {
          commonName: 'Black-browed mollymawk',
          latinName: 'Thalassarche impavida',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/campbell-black-browed-mollymawk'
        },
        {
          commonName: 'White-capped albatross',
          latinName: 'Thalassarche cauta',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/white-capped-mollymawk'
        },
        {
          commonName: 'Bullers albatross',
          latinName: 'Thalassarche bulleri',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/bullers-mollymawk'
        },
        {
          commonName: 'Light-mantled albatross',
          latinName: 'Phoebetria palpebrata',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/light-mantled-sooty-albatross'
        },
        {
          commonName: 'Northern giant petrel',
          latinName: 'Macronectes halli',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/northern-giant-petrel'
        },
        {
          commonName: 'Cape petrel',
          latinName: 'Daption capense',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/cape-petrel'
        },
        {
          commonName: 'Grey-faced petrel',
          latinName: 'Pterodroma macroptera',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/grey-faced-petrel'
        },
        {
          commonName: 'Tītī | Cooks petrel',
          latinName: 'Pterodroma cookii',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/cooks-petrel'
        },
        {
          commonName: 'Broad-billed prion',
          latinName: 'Pachyptila vittata',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/broad-billed-prion'
        },
        {
          commonName: 'Fairy prion',
          latinName: 'Pachyptila turtur',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/fairy-prion'
        },
        {
          commonName: 'Westland petrel',
          latinName: 'Procellaria westlandica',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/westland-petrel'
        },
        {
          commonName: 'Black petrel',
          latinName: 'Procellaria parkinsoni',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/black-petrel'
        },
        {
          commonName: 'Bullers shearwater',
          latinName: 'Puffinus bulleri',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/bullers-shearwater'
        },
        {
          commonName: 'Flesh-footed shearwater',
          latinName: 'Puffinus carneipes',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/flesh-footed-shearwater'
        },
        {
          commonName: 'Sooty shearwater',
          latinName: 'Puffinus griseus',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/sooty-shearwater'
        },
        {
          commonName: 'Short-tailed shearwater',
          latinName: 'Puffinus tenuirostris',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/short-tailed-shearwater'
        },

        {
          commonName: 'Huttons shearwater',
          latinName: 'Puffinus huttoni',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/huttons-shearwater'
        },
        {
          commonName: 'Little shearwater',
          latinName: 'Puffinus assimilis',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/little-shearwater'
        },
        {
          commonName: 'White-faced storm petrel',
          latinName: 'Pelagodroma marina',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/white-faced-storm-petrel'
        },
        {
          commonName: 'New Zealand storm petrel',
          latinName: 'Fregetta maoriana',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/new-zealand-storm-petrel'
        },
        {
          commonName: 'Common diving petrel',
          latinName: 'Pelecanoides urinatrix',
          birdOrder: 'Procellariiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/common-diving-petrel'
        },
        {
          commonName: 'Red-tailed tropicbird',
          latinName: 'Phaethon rubricauda',
          birdOrder: 'Phaethontiformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/red-tailed-tropicbird'
        },
        {
          commonName: 'Australian pelican',
          latinName: 'Pelecanus conspicillatus',
          birdOrder: 'Pelecaniformes',
          nzStatus: '',
          conservationStatus: '',
          length: 'M: x cm | F: x cm',
          weight: 'M: x g | F: x g',
          description: '',
          image: '#',
          audio: '#',
          url: 'http://nzbirdsonline.org.nz/species/australian-pelican'
        }
      ])
    })
}