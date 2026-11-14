function PharmacyStatus() {
    let isOpen = true;
    return isOpen ? (
        <>
            <h1>باز است</h1>
            <button>تماس با ما</button>
        </>
    ) : (
        <h1>بسته است</h1>
    );
}

export default PharmacyStatus;

// function PharmacyNotice() {
//     let hasDelivery = true;

//     return (
//         <>
//             <h1>خدمات داروخانه</h1>
//             {hasDelivery && <h2>ارسال دارو درب منزل</h2>}
//         </>
//     );
// }
