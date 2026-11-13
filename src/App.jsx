import PharmacyInfo from "./components/pharmacy_info/pharmacy_info";
import MyButton from "./components/button/button";
import Services from "./components/services/services";
import Counter from "./components/counter/counter";
import PharmacyStatus from "./components/pharmacy_status/pharmacy_status";
function App() {
    return (
        <>
            <PharmacyStatus />
            <PharmacyInfo name="Aban" phoneNumber="123123123" dr="Ali" address="دورود کوی شهید بهشتی" />
            <Services />
            <MyButton />
            <Counter />
        </>
    );
}

export default App;
