import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.authStatus)

    useEffect(() => {

        // Easy one 
        if (authStatus === true) {
            navigate("/")
        } else if (authStatus === false) {
            navigate("/login")
        }

        //Not understood way 
        if (authentication && authStatus !== authentication) { 
            navigate("/login")   
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading....</h1> : <>{children}</>
}
