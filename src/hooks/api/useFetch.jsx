import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch(url, params = '') {
  const [data, SetData] = useState(null)
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': '0b5c27b811mshedc318ca5369c39p154bfcjsn96f7546cca96',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  }

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        SetData(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { data, loading }
}
