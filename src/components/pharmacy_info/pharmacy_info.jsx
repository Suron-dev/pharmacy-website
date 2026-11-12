

function PharmacyInfo(props) {
    return (
        <>
            <h1>pharmacy name : {props.name}</h1>
            <br></br>
            <h2>Doctor name : {props.dr} </h2>
            <br />
            <h2>phone Number : {props.phoneNumber}</h2>
            <br />
            <h2>address : {props.address}</h2>
        </>
    );
}

export default PharmacyInfo;
