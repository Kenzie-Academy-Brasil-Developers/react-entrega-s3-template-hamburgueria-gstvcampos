import { useEffect, useState } from 'react'
import { api } from '../../services/api'

function Feed() {
  const [listBurguers, setListBurguers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  

  useEffect(() => {
    const getBurguers = async () => {
      try {
        const reponse = await api.get('/products')

        setListBurguers(reponse.data)
      } catch (error) {

        //criar toast erro
        console.error(error)

      } finally {
        setIsLoading(false)
      }
    }

    getBurguers()

  }, [])


  //criar toast
  if (isLoading) {
    return <div>Loagind...</div>
  }
  // ou colocar em condicional isLoadign ? carregamento : pagina

  return (
    <>
      <p>salve</p>


    </>

  )
}

export default Feed