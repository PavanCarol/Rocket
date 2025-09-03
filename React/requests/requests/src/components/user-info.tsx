import React from "react";
import useUser from "../hooks/use-users";

export default function UserInfo(){
    const {user, userRequestStatus, getUser}= useUser();
    
    React.useEffect(()=>{
        getUser("Gus");
    },[getUser])

    if(userRequestStatus==='loading'){
        return<div>Carregando usuário...</div>
    }
    return(
    <ul>
        <li>Nome: {user?.name}</li>
        <li>UserName (id):{user?.id}</li>
    </ul>
    );
}