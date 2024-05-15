import { useState } from "react";

import godfather from './assets/godfather.jpg'
import pulp from './assets/pulp.jpg'
import scarface from './assets/scarface.jpg'
import test from '../airbnb/assets/air1.png'
import "./netflix.css"

const Netflix = (props) => {
    const [image, setImage] = useState([
        { name: 'godfather', src: godfather,},
        { name: 'scarface', src:scarface},
        { name: 'pulp',src: pulp}
    ])

    const deleteHandler = (index) => {
        //make a copy of the array
        let storedImg = [...image]
        // made changes to the image
        storedImg.splice(index, 1)
        setImage(storedImg)
    }

    return (
        <div className="netflix-main">
        <div  className="boxes">{image.map(item => (
            <Image src={item.src} />
        ))}
        </div>
        </div>
    )
}
const Image = ({src, handleClick}) => {
    return (
        <div  className="img">
            <img src={src} />
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Netflix;



