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
  useEffect(() => {
    console.log(infoUser)
  }, [])
  const [errorPostUser, setErrorPostUser] = useState('')
  const [listImages, setListImages] = useState('')
  const handleSubmitStep = e => {
    e.preventDefault()
    console.log('listImages', listImages)
    // try {
    //   api.post('/images/executeImageStack')
    //   setPage(7)
    // } catch (e) {
    //   console.error('error executeImageQueue =>', e)
    //   setErrorPostUser(
    //     <>
    //       <MdOutlineError /> Houve um erro! Verifique os campos preenchidos!
    //     </>
    //   )
    // }
  }

  useEffect(() => {
    console.log('atingiu')
  }, [listImages])

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
