const { useEffect } = require("react");
const { useState } = require("react")

const useToken =user=>{
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUer ={email:email};    
        if(email){
            fetch(`https://thawing-savannah-50233.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application.json'
                },
                body:JSON.stringify(currentUer)


            })
            .then(res=>res.json())
            .then(data =>console.log('data inse',data))
           
        }

    },[user]);
    return [token];
}
export default useToken;