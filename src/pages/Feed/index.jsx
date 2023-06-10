import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import Header from '../../components/Header'
import Product from '../../components/Product'
import ProductsList from '../../components/ProductsList'

function Feed() {
  const [listBurguers, setListBurguers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearch, setInputSearch] = useState('')

  const filteredBurgers = listBurguers.filter(burger =>
    burger.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
    burger.category.toLowerCase().includes(inputSearch.toLowerCase())
  )

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

  console.log(filteredBurgers)

  return (
    <>
      <Header setInputSearch={setInputSearch} />
      <ProductsList>
        {
          filteredBurgers.map((burguer) => <Product key={burguer.id} burguer={burguer}></Product>)
        }
      </ProductsList>
    </>

  )
}

export default Feed