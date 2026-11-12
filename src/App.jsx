import PharmacyInfo from "./components/pharmacy_info/pharmacy_info";
import MyButton from "./components/button/button";
import Services from "./components/services/services";
import Counter from "./components/counter/counter";
function App() {

    return (
    <>
        <PharmacyInfo name="Aban" phoneNumber="123123123" dr="Ali" address="دورود کوی شهید بهشتی" />
        <Services />
        <MyButton />
        <Counter />

    </>
);
    
}

export default App;
