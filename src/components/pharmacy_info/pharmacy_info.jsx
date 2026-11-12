

function PharmacyInfo(name, address, phoneNumber, dr) {
    return (
        <>
            <h1>pharmacy name : {name}</h1>
            <br></br>
            <h2>Doctor name : {dr} </h2>
            <br />
            <h2>phone Number : {phoneNumber}</h2>
            <br />
            <h2>address : {address}</h2>
        </>
    );
}

export default PharmacyInfo;
