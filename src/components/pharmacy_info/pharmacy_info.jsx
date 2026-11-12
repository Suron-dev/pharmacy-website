const Info = {
    pharmacyName: "Aban",
    doctor: "Ali",
    phoneNumber: "0901111111",
    address: "دورود کوی شهید بهشتی کوچه اول",
};

function PharmacyInfo() {
    return (
        <>
            <h1>pharmacy name : {Info.pharmacyName}</h1>
            <br></br>
            <h2>Doctor name : {Info.doctor} </h2>
            <br />
            <h2>phone Number : {Info.phoneNumber}</h2>
            <br />
            <h2>address : {Info.address}</h2>
        </>
    );
}

export default PharmacyInfo;
