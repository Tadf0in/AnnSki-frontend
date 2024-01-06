import { Link } from "react-router-dom";

export default function Item({ item }) {

  return (
    <div className="item card d-flex flex-column">
        <img className="card-img-top" alt="image"
            src={item.image}
        />

        <div className="card-body d-flex flex-column">
          <span className="fs-3">{item.nom}</span>
          <p className="card-text">{item.desc}</p>
        </div>
        <span className='fw-bold fs-4 prix'>{item.prix.toString().replace('.', ',')}€</span>

        <Link to={"/goodies/acheter/"+item.id} className="btn btn-primary">Acheter</Link>
    </div>
  )
}
