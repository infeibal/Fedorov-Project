import { useState } from "react"

const Image = () => {
    const [img, setImg] = useState()
    return(
        <>
            <div className="peps">
                <input className="image" type="text" placeholder="Write image`s URL" onInput={(event) => setImg(event.target.value)}/>
                <img src={img} alt="" className="img"/>
            </div>
        </>
    )
}

export default Image;