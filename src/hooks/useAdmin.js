import { useEffect } from "react"
import { useState } from "react"

const useAdmin =user=>{
    const [admin, setAdmin] = useState(false)
    useEffect(()=>{
        const email =user?.email;
        if(email){
            fetch(`https://thawing-savannah-50233.herokuapp.com/admin/${email}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application.json'
                },
               


            })
            .then(res=>res.json())
            .then(data =>setAdmin(data.admin))

        }

    },[user])
    return [admin]

}
export default useAdmin;