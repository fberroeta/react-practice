import { useEffect, useState } from 'react'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    const endpointImageApi = `https://cataas.com/cat/says/${threeFirstWords}?json=true`

    fetch(endpointImageApi, { mode: 'no-cors' })
      .then(res => {
        if (!res.ok) { throw new Error('Error fetching data') }
        return res.json()
      }
      )
      .then(data => {
        const { url } = data
        setImage(url)
      })
      .catch(error => console.error(error))
  }, [fact])

  return { image }
}
