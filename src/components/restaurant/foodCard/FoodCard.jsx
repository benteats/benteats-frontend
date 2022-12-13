import * as FoodCardStyle from './FoodCard.style'
import RestaurantNotFound from '../../../components/searchRestaurant/restaurants/restaurantNotFound/RestaurantNotFound'
import { IoMdAdd } from 'react-icons/io'
import NewFood from './newFood/NewFood'
import { useState, useEffect } from 'react'
import { api } from '../../../api/axios'

export default function FoodCard({
  foodResult,
  setFoodResult,
  idRestaurant,
  isOwner = false
}) {
  const [isUpdated, setIsUpdated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const restaurantDetail = {
    title: 'Ooops! Você ainda não cadastrou nenhum prato.',
    description: `Clique no botão a baixo para cadastrar seus pratos ao cardápio`
  }

  async function getMenuFoodById() {
    try {
      const response = await api.get(`foods/${idRestaurant}`)
      setFoodResult(response.data)
    } catch (e) {
      console.error('error getMenuFoodById =>', e)
    }
  }

  useEffect(() => {
    if (isUpdated) {
      getMenuFoodById()
    }
  }, [isUpdated])

  return (
    <>
      <NewFood
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
      />
      {isOwner && (
        <FoodCardStyle.ContainerBtn>
          <button onClick={() => setIsOpen(true)}>
            <IoMdAdd />
            Novo Prato
          </button>
        </FoodCardStyle.ContainerBtn>
      )}
      {foodResult ? (
        <FoodCardStyle.Container>
          {foodResult.map(item => {
            return (
              <FoodCardStyle.FoodCardContent key={item.id}>
                <FoodCardStyle.FoodCardImage>
                  <img src={`data:image/jpg;base64, ${item.image}`} />
                </FoodCardStyle.FoodCardImage>
                <FoodCardStyle.FoodCardData>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <FoodCardStyle.Price>R$ {item.price}</FoodCardStyle.Price>
                </FoodCardStyle.FoodCardData>
              </FoodCardStyle.FoodCardContent>
            )
          })}
        </FoodCardStyle.Container>
      ) : (
        <RestaurantNotFound restaurantDetail={restaurantDetail} />
      )}
    </>
  )
}
