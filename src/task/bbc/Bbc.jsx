import { useState } from "react";

import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import "./bbc.css"


const Bbc = (props) => {

    const [image, setImage] = useState([
        { name: 'img1', src: img1,},
        { name: 'img2', src: img2},
        { name: 'img3',src: img3},
        { name: 'img4',src: img4}

    ])
    console.log(image);
    return (
        <div className="bbc-main">
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
export default Bbc;