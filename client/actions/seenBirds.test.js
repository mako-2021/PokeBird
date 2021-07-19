import { SEEN_BIRDS, setSeenBirds } from './seenBirds'

test('it should create an action', () => {
  const bird = [
    { commonName: 'Haast tokoeka kiwi', latinName: 'Apteryx australis', birdOrder: 'Casuariiformes', nzStatus: 'Endemic', conservationStatus: 'Nationally Endangered' }
  ]
  const expected = {
    type: SEEN_BIRDS,
    bird
  }
  const actual = setSeenBirds(bird)
  expect(actual).toEqual(expected)
})
