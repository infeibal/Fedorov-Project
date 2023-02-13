import { useState } from "react"

const Floor = () => {
    const [floor, setFloor] = useState()


    return(
        <>
            <div>
                <input id="cb" type="checkbox" name="male" onChange={(event) => setFloor('Male')} />
                <label for="male">Male</label>
            </div>
            <div>
                <input id="cb" type="checkbox" name="female" onChange={(event) => setFloor('Female')}/>
                <label for="female">Female</label>   
            </div>
            <p>{floor}</p>
        </>
    )
}

export default Floor;