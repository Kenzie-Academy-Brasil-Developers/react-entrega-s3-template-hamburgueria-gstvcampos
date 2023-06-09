import { useEffect, useState } from 'react'
import { api } from './services/api'

function App() {
  const [listBurguers, setlistBurguers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBurguers = async () => {
      try {
        const reponse = await api.get('/products')    

        setlistBurguers(reponse.data)
      } catch (error) {

        //criar toast erro
        console.error(error)

      } finally {
        setIsLoading(false)
      }
    }

    getBurguers()

  }, [])


  if(isLoading) {
    return <div>Loagind...</div>
  }
  // ou colocar em condicional isLoadign ? carregamento : pagina

  return (
    <>
      <p>salve</p>
    
    
    </>
      
  )
}

export default App
