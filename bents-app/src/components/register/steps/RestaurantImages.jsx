import { useState } from 'react'
import * as FormStyle from '../../../styles/form/Form.style'
import * as StepsStyle from './Steps.style'
import { MdOutlineError } from 'react-icons/md'
import { api } from '../../../api/axios'
import { useEffect } from 'react'
import DropFileInput from '../../../components/dropFileInput/DropFileInput'
import axios from 'axios'

export default function RestaurantInfo({ infoUser }) {
  useEffect(() => {
    console.log(infoUser)
  }, [])
  const [errorPostUser, setErrorPostUser] = useState('')
  const onFileChange = async (files) => {
    if(files.length == 5){
      files.forEach(
        (item) => {
          let formData = new FormData()
          formData.append('img', item)
          axios({
            method: "post",
            url: `http://localhost:8080/images/addImageInQueue/${infoUser.idRestaurant}`,
            data: formData,
            headers: { Accept: "application/json ,text/plain, */*" },
            });
          })
    }
  }

  const handleSubmitStep = e => {
    e.preventDefault()
    try {
      api.post('/images/executeImageQueue')
      setPage(7)
    } catch (e) {
      console.error('error executeImageQueue =>', e)
      setErrorPostUser(
        <>
          <MdOutlineError /> Houve um erro! Verifique os campos preenchidos!
        </>
      )
    }
  }

  return (
    <>
      <StepsStyle.Container>
        <DropFileInput onFileChange={(files) => onFileChange(files)}/>
        {errorPostUser && (<FormStyle.ErrorMessageLogin>{errorPostUser}</FormStyle.ErrorMessageLogin>)}
        <StepsStyle.ContainerButton>
          <FormStyle.Button type="button" onClick={(handleSubmitStep)}>
            Próximo
          </FormStyle.Button>
        </StepsStyle.ContainerButton>
      </StepsStyle.Container>
    </>
  )
}
