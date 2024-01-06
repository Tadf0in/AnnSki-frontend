import { NavLink, useParams } from "react-router-dom"
import Loading from "../../utils/Loading"
import useFetch from "../../hooks/useFetch"
import FormFloating from "../../utils/Fields"
import { useState } from "react"
import Form from "./Form"
import Ok from './Ok'

export default function Buy() {
    const {goodie_id} = useParams()
    const {loading, data} = useFetch('/api/shop/'+goodie_id, {method: 'GET'})

    const [response, setResponse] = useState(null)
    const [clique, setClique] = useState(false)
    const [quantite, setQuantite] = useState({
        quantite: 1
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setClique(true)
        document.getElementById('footer').scrollIntoView()
    }

    const handleRetour = (e) => {
        setResponse(null)
        document.getElementById('footer').scrollIntoView()
    }
    
    return response ? <div className="d-flex flex-column align-items-center">
        <Ok status={response.status}></Ok>
        { response.status === 201 ? 
            <NavLink to="/goodies" className='btn btn-primary'>Retour</NavLink>
        :
            <button type="button" className="btn btn-primary" onClick={(e) => {handleRetour(e)}}>Retour</button>
        }
      </div>
      :  <>
        {loading && <Loading />}    

        { data ? <div className="buy d-flex flex-column align-items-center">
            <div className="buy-page d-flex justify-content-center">
                <div className="buy-left d-flex flex-column justify-content-center">
                    <h2>{data.nom}</h2>
                    <img src={data.image} alt="photo"/>
                </div>

                <form className="buy-right d-flex flex-column justify-content-end" onSubmit={e => handleSubmit(e)}>
                    <span>En stock : {data.stock}</span>
                    <FormFloating type="number" name="quantite" id="buy-form-quantite" placeholder="Quantité" get={quantite} set={setQuantite}/>
                    <span className="span-prix-buy d-flex align-items-center">
                        <button type="submit" className="btn btn-primary" 
                            disabled={quantite.quantite <=0 || quantite.quantite > data.stock || (quantite.quantite*1) % 1 !== 0}
                        >Acheter</button>
                        &nbsp;&nbsp;&nbsp;
                        <span className="fw-bold fs-4 prix">{(data.prix * quantite.quantite).toString().replace('.', ',')}€</span>
                    </span>
                </form>
            </div>

            { clique && <Form data={data} quantite={quantite.quantite} setResponse={setResponse}/> }
        </div>
        
        : <span className='fst-italic text-body-secondary d-flex justify-content-center'>Indisponible pour le moment</span>}
    </>
}