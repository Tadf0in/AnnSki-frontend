import { useParams } from "react-router-dom"
import Loading from "../../utils/Loading"
import useFetch from "../../hooks/useFetch"
import FormFloating from "../../utils/Fields"
import { useState } from "react"

export default function Buy() {
    const {goodie_id} = useParams()
    const {loading, data} = useFetch('/api/shop/'+goodie_id, {method: 'GET'})

    const [formData, setFormData] = useState({
        quantite: 1
    })
    
    return <>
        {loading && <Loading />}    

        { data ? <div className="buy d-flex flex-column align-items-center">
            <div className="buy-page d-flex justify-content-center">
                <div className="buy-left">
                    <h2>{data.nom}</h2>
                    <img src={data.image} alt="photo"/>
                </div>

                <form className="buy-right d-flex flex-column justify-content-end">
                    <span>En stock : {data.stock}</span>
                    <FormFloating type="number" name="quantite" id="buy-form-quantite" placeholder="Quantité" get={formData} set={setFormData}/>
                    <span className="span-prix-buy d-flex">
                        <button type="submit" className="btn btn-primary" 
                            disabled={formData.quantite <=0 || formData.quantite > data.stock || (formData.quantite*1) % 1 !== 0}
                            >Acheter</button>
                        &nbsp;&nbsp;&nbsp;
                        <span className="fw-bold fs-4 prix">{(data.prix * formData.quantite).toString().replace('.', ',')}€</span>
                    </span>
                </form>
            </div>
        </div>
        
        : <span className='fst-italic text-body-secondary d-flex justify-content-center'>Indisponible pour le moment</span>}
    </>
}