import PharmacyInfo from "./components/pharmacy_info/pharmacy_info";
import MyButton from "./components/button/button";
import Services from "./components/services/services";

function App() {

    return (
    <>
        <PharmacyInfo name="Aban" phoneNumber="123123123" dr="Ali" address="دورود کوی شهید بهشتی" />
        <Services />
        <MyButton />
    </>
);
    
}

export default App;
