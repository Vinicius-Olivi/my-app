import Pet from "./Pet";

const Person = (props) => {
    return (
        <div>
            <h1>My name is {props.name} and my age is {props.age}</h1>
            <Pet petName={props.petName} type={props.type}/>
        </div>
        
    )
    }
    

export default Person;