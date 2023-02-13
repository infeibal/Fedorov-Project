import { useState } from "react"


const SurnameInput = () => {
    const [surname, setSurname] = useState('')
    return(
        <>
            <p className="name-p2">{surname}</p>
            <input className="nameInput" maxLength="17" type="text" placeholder="Surname" onInput={(event) => setSurname(event.target.value)}/>
        </>
    )
}

export default SurnameInput;