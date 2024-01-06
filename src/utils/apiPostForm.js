import { API_URL } from "../../config"

export default async function apiPostForm(e, url, data, setRes) {
    e.preventDefault()
    document.getElementById('scrolltop').scrollIntoView()
    
    await fetch(API_URL + url, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json; charset=UTF-8" 
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        setRes(res)
    })
    .catch(err => console.log(err))
}
