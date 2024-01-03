export default function Ok({ status }) {
    let message
    let color

    switch (status) {
        case 201:
            message = "Merci, votre inscription a bien été enregistrée"
            color = "success"
            break
        case 208:
            message = "Vous êtes déjà inscrit pour cette sortie"
            color = "info"
            break
        case 400:
            message = "Un problème est survenu et votre inscription n'a pas été prise en compte, vérifiez les informations rentrées puis réessayez"
            color = "danger"
            break
        case 403:
            message = "Désolé, il ne reste plus de place pour cette sortie, les inscriptions sont fermées"
            color = "success"
            break
        case 500:
            message = "Un problème est survenu au niveau du serveur, si le problème persiste veuillez contacter un membre du bureau"
            color = "danger"
            break
        default:
            message = "Désolé, un problème est survenu et votre inscription n'a pas été prise en compte"
            color = "danger"
            break
      }

    return <div className={"alert alert-" + color + " register-ok"}>
        {message}
    </div>
}