import { useState } from "react";

import air1 from './assets/air1.png'
import air2 from './assets/air2.png'
import air3 from './assets/air3.png'
import air4 from './assets/air4.png'
import "./airbnb.css"


const Airbnb = (props) => {

    const [image, setImage] = useState([
        { name: 'air1', src: air1,},
        { name: 'air2', src: air2},
        { name: 'air3',src: air3},
        { name: 'air4',src: air4}
    ])
    console.log(image);
    return (
        <div className="airbnb-main">

        <div  className="boxes">{image.map(item => (
            <Image src={item.src} />
        ))}
        </div>
        </div>
    )
}

const Image = ({src}) => {
    return (
        <div  className="img">
            <img src={src} />
        </div>
    )
}


export default Airbnb;