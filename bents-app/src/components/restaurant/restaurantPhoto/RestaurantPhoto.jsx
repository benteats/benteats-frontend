import * as RestaurantStyle from './RestaurantPhoto.style'
import { useEffect, useState } from 'react';
import { api } from '../../../api/axios'

export default function RestaurantPhoto({params}) {
  const [images, setImages] = useState(null)
  async function getImageByIdRestaurant() {
    try {
      const response = await api.get(
        `/images/${params}`
      )
      setImages(response.data)
    } catch (e) {
      console.error('error getImageByIdRestaurant =>', e)
    }
  }

  useEffect(() => {
    if(images == null){
      getImageByIdRestaurant()
    }
  }, [])

  return (
    <>
      {images && (
        <RestaurantStyle.PhotosContent>
        <RestaurantStyle.PrincipalPhoto>
          <img src={`data:image/jpg;base64, ${images[0].image}`} />
        </RestaurantStyle.PrincipalPhoto>
        <RestaurantStyle.OtherPhotos>
        {images.filter((index) => index.id != 1).map((element, item) => (
          <div key={item}>
            <img src={`data:image/jpg;base64, ${element.image}`} />
          </div>
        ))}
        </RestaurantStyle.OtherPhotos>
      </RestaurantStyle.PhotosContent>
      )}
    </>
  )
}
