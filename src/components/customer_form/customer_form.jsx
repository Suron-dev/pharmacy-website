import { useState } from "react";
function CustomerForm() {
    function handleSubmit(e) {
        console.log(name);
        e.preventDefault();
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    const [name, setName] = useState("");

    return (
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} value={name} type="text" />
            <br />
            <br />
            <br />
            <button>click me!</button>
        </form>
    );
}

export default CustomerForm;
