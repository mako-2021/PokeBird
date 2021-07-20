import React, { useState, useEffect } from 'react'
import { getBirdImg } from '../apis/birds'

export default function TooltipImage(props) {
    const { sciName } = props
    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        getBirdImg(sciName)
            .then(res => {
                setPhotoUrl(res.image)
            })
            .catch(e => console.log('Image Unavailable'))
    })

    return <img src={photoUrl} alt='Image not available' style={{ maxWidth: '150px' }} />



}
