import RestaurantPhoto from '../../components/restaurant/restaurantPhoto/RestaurantPhoto'
import * as RestaurantStyle from '../restaurant/Restaurant.style'
import { FilterButton, UploadLabel } from '../../styles/Global'
import { FaStar } from 'react-icons/fa'
import { GrRestaurant } from 'react-icons/gr'
import { AiOutlineDollarCircle, AiOutlineCloudUpload } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { BiChat } from 'react-icons/bi'
import AppSimpleNavbar from '../../components/searchRestaurant/navBar/AppSimpleNavbar'
import { api } from '../../api/axios'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { URL_AZURE } from '../../constants/http.azure.request'

export default function UserRestaurant() {
  const [restaurantsResult, setRestaurantsResult] = useState(null)
  const [uploadImage, setUploadImage] = useState(false)
  const { userData } = useContext(AuthContext)


  async function getRestaurantById() {
    try {
      const response = await api.get(
        `/restaurants/getRestaurantById/${userData.idRestaurant}`
      )
      setRestaurantsResult(response.data)
    } catch (e) {
      console.error('error getRestaurantByCoordinates =>', e)
    }
  }

  const onFileChange = async (e) => {
    console.log(e.target.files[0])
    const files = e.target.files[0]
    let formData = new FormData()
    formData.append('filename', files)
    console.log('formData', formData)
    try {
      axios({
        method: 'post',
        url: `${URL_AZURE}/foods/fileReader/${userData.idRestaurant}`,
        data: formData,
        headers: {
          Authorization: `Bearer ${userData.token}`,
          Accept: 'application/json ,text/plain, */*'
        },
      });
      setUploadImage(true)
    } catch (e) {
      console.error('error executeImageQueue =>', e)
    }
  }

  useEffect(() => {
    if (restaurantsResult == null) {
      getRestaurantById()
    }
  }, [])

  return (
    <>
      {restaurantsResult && (
        <RestaurantStyle.Container>
          <AppSimpleNavbar />
          <RestaurantStyle.Content>
            <RestaurantPhoto params={userData.idRestaurant} />
            <RestaurantStyle.RestaurantTitle>
              <div>
                <h2>{restaurantsResult.user.name}</h2>
                <FaStar />
                <span>5,0</span>
              </div>
              <span>{restaurantsResult.user.address}, {restaurantsResult.user.addressNumber} </span>
            </RestaurantStyle.RestaurantTitle>
            <RestaurantStyle.RestaurantOptions>
              <UploadLabel>
                <input type='file' onChange={onFileChange} />
                <AiOutlineCloudUpload />
                Subir Cardápio TXT
              </UploadLabel>
            </RestaurantStyle.RestaurantOptions>
            <RestaurantStyle.RestaurantDetail>
              <RestaurantStyle.ContainerDetail>
                <RestaurantStyle.RestaurantDetailItem>
                  <div>
                    <GrRestaurant />
                  </div>
                  <div>
                    <h3>Tipo de Culinária</h3>
                    <span>{restaurantsResult.foodType}</span>
                  </div>
                </RestaurantStyle.RestaurantDetailItem>
                <RestaurantStyle.RestaurantDetailItem>
                  <div>
                    <FiClock />
                  </div>
                  <div>
                    <h3>Horário</h3>
                    <span>{restaurantsResult.closingTime}</span>
                  </div>
                </RestaurantStyle.RestaurantDetailItem>
                <RestaurantStyle.RestaurantDetailItem>
                  <div>
                    <AiOutlineDollarCircle />
                  </div>
                  <div>
                    <h3>Média de Preço</h3>
                    <span>R$ {restaurantsResult.priceAverage}</span>
                  </div>
                </RestaurantStyle.RestaurantDetailItem>
                <RestaurantStyle.RestaurantDetailItem>
                  <div>
                    <BiChat />
                  </div>
                  <div>
                    <h3>Avaliações</h3>
                    <span>{restaurantsResult.priceAverage}</span>
                  </div>
                </RestaurantStyle.RestaurantDetailItem>
              </RestaurantStyle.ContainerDetail>
            </RestaurantStyle.RestaurantDetail>
            <RestaurantStyle.Description>
              <RestaurantStyle.Subtitle>
                Sobre este restaurante
              </RestaurantStyle.Subtitle>
              <p>{restaurantsResult.description}</p>
            </RestaurantStyle.Description>
            <RestaurantStyle.Description>
              <RestaurantStyle.Subtitle>
                Sobre este restaurante
              </RestaurantStyle.Subtitle>
              <p>{restaurantsResult.description}</p>
            </RestaurantStyle.Description>
          </RestaurantStyle.Content>
        </RestaurantStyle.Container>
      )}
    </>
  )
}
