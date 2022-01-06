import {useContext, useState} from "react";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const Like = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const [id, setId] = useState([])

    const handleLike = () => {
       
    }

    return (
        <div>
            <span>{id.length}</span>
            <button type="button" onClick={handleLike}>LIKE</button>
        </div>
    );
};
