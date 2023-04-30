import { useEffect, useState } from 'react'
const CAT_IMAGE_DEFAULT_URL = '/src/assets/cat.webp'
const CAT_IMAGE_API_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    const endpointImageApi = `https://cataas.com/cat/says/${threeFirstWords}?json=true`

    fetch(endpointImageApi, { mode: 'no-cors' })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data')
        }
        return res.json()
      }
      )
      .then(data => {
        const { url } = data
        setImage(url)
      })
      .catch(error => (error))
  }, [fact])
  if (!image) { return { imgUrl: CAT_IMAGE_DEFAULT_URL } }
  return { imgUrl: `${CAT_IMAGE_API_URL}/${image}` }
}
