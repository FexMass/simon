import axios from "axios"
import { useEffect, useState } from "react"

const useAxiosRequest = (url, payload) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(url, payload)
            .then((response) => setData({ "deadline": "2022-10-06T21:01:00.000" })) //modify time to test funkcionality (has to be bigger than current date)
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded }
}

export default useAxiosRequest
