import { useEffect, useState } from "react"

export default function useFetch (url, options) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch('https://annski.applikuapp.com' + url, {
            ...options,
            headers: {
                ...options.headers,
                'Accept': 'application/json; charset=UTF-8'
            }

        }).then(res => res.json()).then(data => {
            setData(data)
        })
        .catch(err => {
            setErrors(err)
        })
        .finally(() => setLoading(false))
    }, [])

    return {
        loading, data, errors
    }
}