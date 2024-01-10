import { NavLink } from "react-router-dom"
import lydia_logo from "../../../assets/lydia-logo.png"

export default function Ok({ status, prix }) {
    let message

    switch (status) {
        case 201:
            return <>
                <div className="alert alert-success register-ok">
                    Merci, votre inscription a bien été enregistrée
                </div>
                <div className="ok-payer d-flex flex-column align-items-center">
                    <p>N'oubliez pas de payer votre place avant jeudi, sinon elle sera remise en jeu.</p>
                    <a href={"https://lydia-app.com/form/payment/phoneform?vendor_token=57bc0dcb9f1b0296578754&amount="+prix}
                    className="lydia-btn">
                        <img src={lydia_logo} alt="" />
                        &nbsp;
                        Payer avec Lydia
                    </a>
                    <NavLink to="/" className="ok-later nav-link">Payer plus tard</NavLink>
                </div>
            </>

        case 208:
            return <div className={"alert alert-info register-ok"}>
                Vous êtes déjà inscrit pour cette sortie.
                <br/>
                Si vous souhaitez prendre une deuxième place merci de renseigner une adresse mail différente.
            </div>

        case 400:
            message = "Un problème est survenu et votre inscription n'a pas été prise en compte, vérifiez les informations rentrées puis réessayez"
            break

        case 403:
            message = "Désolé, il ne reste plus de place pour cette sortie, les inscriptions sont fermées"
            break

        case 500:
            message = "Un problème est survenu au niveau du serveur, si le problème persiste veuillez contacter un membre du bureau"
            break

        default:
            message = "Désolé, un problème est survenu et votre inscription n'a pas été prise en compte"
            break
      }

    return <div className={"alert alert-danger register-ok"}>
        {message}
    </div>
}