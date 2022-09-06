import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { MdOutlineError } from 'react-icons/md'
import { api } from '../../../api/axios'
import { useEffect } from 'react'
import DropFileInput from '../../../components/dropFileInput/DropFileInput'
import axios from 'axios'
import { URL_AZURE } from '../../../constants/http.azure.request'

export default function RestaurantInfo({
  infoUser,
  setPage,
  formDataNotify,
  setFormDataNotify
}) {
  const [errorPostUser, setErrorPostUser] = useState('')
  const [listImages, setListImages] = useState('')

  const handleSubmitStep = async e => {
    let formData = new FormData()
    listImages.forEach(item => {
      formData.append('imgs', item)
    })
    try {
      const response = api.post(
        `/images/saveImage/${infoUser.idRestaurant}`,
        formData
      )
      setPage(7)
    } catch (e) {
      console.error('error executeImageQueue =>', e)
    }
  }

  useEffect(() => {}, [listImages])

  return (
    <>
      <StepsStyle.Container>
        <DropFileInput
          listImages={listImages}
          setListImages={setListImages}
          formDataNotify={formDataNotify}
          setFormDataNotify={setFormDataNotify}
        />
        {errorPostUser && (
          <FormStyle.ErrorMessageLogin>
            {errorPostUser}
          </FormStyle.ErrorMessageLogin>
        )}
        <StepsStyle.ContainerButton>
          <FormStyle.Button type="button" onClick={handleSubmitStep}>
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
