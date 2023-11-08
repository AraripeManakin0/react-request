import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function effect() {
      setLoading(true)
      try {
        const response = await axios.post('http://127.0.0.1:8000/game/move/', { name: 'Ela', code: 789 })
        setData(response.data)
        setError(null)
      } catch (e) {
        setError(e)
        setData(null)
      }
      setLoading(false)
    }
    effect()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <>
      <h1>{data.message}</h1>
      <h1>{data.code}</h1>
    </>
  )
}

export default App
