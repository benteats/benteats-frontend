import * as RestaurantStyle from './RestaurantPhoto.style'

export default function RestaurantPhoto() {
  return (
    <>
      <RestaurantStyle.PhotosContent>
        <RestaurantStyle.PrincipalPhoto>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </RestaurantStyle.PrincipalPhoto>
        <RestaurantStyle.OtherPhotos>
          <div>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </div>
        </RestaurantStyle.OtherPhotos>
      </RestaurantStyle.PhotosContent>
    </>
  )
}
