import { useState } from "react";

const NameInput = () => {
    const [name, setName] = useState('')
    return(
        <>
            <p className="name-p">{name}</p>
            <input className="nameInput" maxLength="17" type="text" placeholder="Name" onInput={(event) => setName(event.target.value)}/>
        </>
    )
}

export default NameInput;