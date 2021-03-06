import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBirds, getUserObsBySub, addUserObs, delUserObs } from '../apis/birds'
import { setSeenBirds } from '../actions/seenBirds'
import { useAuth0 } from '@auth0/auth0-react'
import { Header, Icon, Grid, Image, Button, Card } from 'semantic-ui-react'

const UserPage = (props) => {
  const { sub } = useAuth0().user
  const { seenBirds, dispatch } = props
  const [birds, setBirds] = useState([])
  const [userBirds, setUserBirds] = useState([])

  const update = () => {
    getUserObsBySub(sub)
      .then(res => {
        setUserBirds(res)
        dispatch(setSeenBirds(res))
        return null
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    return getBirds()
      .then(res => {
        setBirds(res)
        return update()
      })
      .catch(e => console.log(e))
  }, [])

  function handleClick (bird, e) {
    e.preventDefault()
    const seen = seenBirds.find((seenBird) => bird.id === seenBird.birds_id)
    if (seen) {
      alert('Bird has already been added to the list')
    } else if (!seen) {
      addUserObs(bird)
      update()
    }
  }

  function handleDelete (id, e) {
    e.preventDefault()
    delUserObs(id)
    update()
  }

  return (
    <>
      <div>
        <Header as='h1' icon textAlign='center' style={{ marginTop: '20px' }}>
          <Icon name='users' circular />
          <Header.Content>User Gallery</Header.Content>
        </Header>
      </div>
      <div>
        <Header as='h2' textAlign='center'>Seen Birds</Header>
        <Grid relaxed stackable>
          <Grid.Row columns={4}>
            {userBirds.map((bird, i) => (
              <Grid.Column key={i}>
                <Card centered style={{ marginTop: '20px' }} textAlign='center'>
                  <Image src={bird.image} circular />
                  <Card.Content>
                    <Card.Header>{bird.commonName}</Card.Header>
                    <Card.Meta>
                      <span>{bird.nzStatus}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Button style={{ margin: 'auto' }} onClick={(e) => handleDelete(bird.id, e)}>Delete</Button>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Header as='h2' icon textAlign='center' style={{ marginTop: '20px' }}>
          <Icon name='binoculars' />
          <Header.Content>Bird Gallery</Header.Content>
        </Header>
        <Grid relaxed stackable devided>
          <Grid.Row columns={5} width={15}>
            {birds.map((bird, i) => {
              const seen = seenBirds.find((seenBird) => bird.id === seenBird.birds_id)
              const addBird = { userSub: sub, id: bird.id }
              if (seen) {
                return (
                  <Grid.Column key={i}>
                    <Card centered style={{ marginTop: '20px' }} textAlign='center'
                      onClick={(e) => handleClick(addBird, e)}>
                      <Image src={bird.image} />
                      <Card.Content>
                        <Card.Header>{bird.commonName}</Card.Header>
                        <Card.Meta>
                          <span>{bird.nzStatus}</span>
                        </Card.Meta>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              } else {
                return (
                  <Grid.Column key={i}>
                    <Card centered style={{ marginTop: '20px' }} textAlign='center'
                      onClick={(e) => handleClick(addBird, e)}>
                      <Image src={bird.image} className='img-dim' />
                      <Card.Content>
                        <Card.Header>{bird.commonName}</Card.Header>
                        <Card.Meta>
                          <span>{bird.nzStatus}</span>
                        </Card.Meta>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              }
            }
            )}
          </Grid.Row>
        </Grid>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    seenBirds: state.seenBirds
  }
}

export default connect(mapStateToProps)(UserPage)
