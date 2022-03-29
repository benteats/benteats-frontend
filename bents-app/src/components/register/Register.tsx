import { useState } from 'react';
import {
  StepDetails,
  StepTitles,
  StepDescription
} from './RegisterMap';

export default function Register() {

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    date: "",
    formattedDate: "",
    address: "",
    services: {
      listServices: "",
    },
    typeClient: "",
    area: "",
    message: ""
  });

  // const StepPage = () => {
  //   if (page === 0) {
  //     return <InfoStep page={page} setPage={setPage} formData={formData} setFormData={setFormData} />
  //   } else if (page === 1) {
  //     return (
  //       <DetailsStep page={page} setPage={setPage} formData={formData} setFormData={setFormData} pestItems={pestItems} setPestItems={setPestItems} />
  //     );
  //   } else {
  //     return <ConclusionStep page={page} setPage={setPage} formData={formData} setFormData={setFormData} clientItems={clientItems} setClientItems={setClientItems} />
  //   }

    return (
      <>

      </>
    )
  }
