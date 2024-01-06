import React, { useEffect, useState } from 'react'
import FormFloating from '../../utils/Fields'
import { FormSelect } from '../../utils/Fields'
import apiPostForm from '../../utils/apiPostForm'


export default function Form({ data, quantite, setResponse }) {
  const [formData, setFormData] = useState({
    adherent: "",
    nom: "",
    prenom: "",
    mail: "",
    tel: "",
    ecole: "",
    quantite: quantite,
    goodie_id: data.id
  })

  useEffect(() => {
    setFormData({...formData, quantite: quantite})
  }, [quantite])

  const handleSubmit = async (e) => {
    await apiPostForm(e, '/api/shop/commande', formData, setResponse)
  }

  return <form className='buy-form' onSubmit={e => handleSubmit(e)}>
      <FormSelect key="form-select-register-adherent" name="adherent" placeholder="Adhérent ?" 
      get={formData} set={setFormData} options={[
        ["false", "Non adhérent"], 
        ["true", "Adhérent"]
      ]}/>

      <FormFloating type="text" name="nom" id="formFLoating-buy-nom" placeholder="Nom" get={formData} set={setFormData}/>
      <FormFloating type="text" name="prenom" id="formFLoating-buy-prenom" placeholder="Prénom" get={formData} set={setFormData}/>
      <FormFloating type="mail" name="mail" id="formFLoating-buy-mail" placeholder="Adresse mail" get={formData} set={setFormData}/>
      <FormFloating type="tel" name="tel" id="formFLoating-buy-tel" placeholder="Numéro de téléphone" get={formData} set={setFormData}/>

      <FormSelect key="form-select-buy-ecole" name="ecole" placeholder="École" 
      get={formData} set={setFormData} options={[
        ["Polytech", "Polytech"],
        ["IUT", "IUT"],
        ["IAE", "IAE"],
        ["exte", "Exté"],
      ]}/>

      <button type="submit" className="btn btn-primary" 
          disabled={quantite <=0 || quantite > data.stock || (quantite*1) % 1 !== 0}
      >Acheter</button>
    </form>
}