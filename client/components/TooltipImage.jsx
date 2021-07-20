import React, { useState, useEffect } from 'react'
import { getBirdImg } from '../apis/birds'

export default function TooltipImage (props) {
  const { sciName } = props
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    getBirdImg(sciName)
      .then(res => {
        setPhotoUrl(res.image)
        return null
      })
      .catch(e => console.log('Image Unavailable'))
  })

  if (photoUrl) {
    return <img src={photoUrl} alt='bird image' style={{ maxWidth: '150px', background: 'white', borderRadius: '50%', marginTop: '20px' }} />
  } else {
    return (
      <div>
        <i className="fab fa-earlybirds" style={{ fontSize: '100px', marginTop: '20px' }}></i><br />
        <p>Image not available yet but we are working on it!</p>
      </div>
    )
  }
}
