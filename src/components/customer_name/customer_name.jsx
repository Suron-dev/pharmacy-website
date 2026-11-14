import { useState } from "react";

function CustomerName() {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <h1>{name}</h1>
        </>
    );
}

export default CustomerName;