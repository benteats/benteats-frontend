import { useState } from 'react'
import { apikey } from '../data/config'

export const searchInput = initialValue => {
  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState(initialValue)

  const handleChange = async e => {
    setValue(e.target.value)
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${apikey}&autocomplete=true`
      const response = await fetch(endpoint)
      const results = await response.json()
      setSuggestions(results?.features)
    } catch (error) {
      console.log('Error fetching data, ', error)
    }
  }

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions
  }
}
