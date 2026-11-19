import { useState } from "react";
function CustomerForm() {
    function handleSubmit(e){
        return e.preventDefault();
    }

    function handleChange(e){
        return setName(e.target.value);
    }

const [name , setName] = useState("");

    return (
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} type="text" />
            <br />
            <br />
            <br />
            <button>click me!</button>
        </form>
    );
}

export default CustomerForm ;
