export default function Ok({ status }) {
    let message
    let color

    switch (status) {
        case 201:
            message = "Merci pour votre commande !"
            color = "success"
            break
        case 400:
            message = "Un problème est survenu et votre commande n'a pas été prise en compte, vérifiez les informations rentrées puis réessayez"
            color = "danger"
            break
        case 406:
            message = "Désolé, votre commande n'a pas été prise en compte, vérifiez la quantité demandée."
            color = "danger"
            break
        case 500:
            message = "Un problème est survenu au niveau du serveur, si le problème persiste veuillez contacter un membre du bureau"
            color = "danger"
            break
        default:
            message = "Désolé, un problème est survenu et votre commande n'a pas été prise en compte"
            color = "danger"
            break
      }

    return <div className={"alert alert-" + color + " register-ok"}>
        {message}
    </div>
}