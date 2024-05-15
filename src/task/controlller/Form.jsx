import { useState } from "react";

const Form = () => {
    const [input, setInput] = useState('');

    const [active, setActive] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault(); //stop page refreshing
        alert(`${input} your details are submitted`);
        setInput('');
    }

     return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>{input}</h1>
            <label>
                <h4>
                Enter your name:
                </h4>
                <input type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        <button onClick={() => setActive(!active)}>
      {active ? 'Active' : 'Inactive'}
    </button>
        </div>
    )
}

export default Form;