import PharmacyInfo from "./components/pharmacy_info/pharmacy_info";
import MyButton from "./components/button/button";
import Services from "./components/services/services";
import Counter from "./components/counter/counter";
import PharmacyStatus from "./components/pharmacy_status/pharmacy_status";
import CustomerName from "./components/customer_name/customer_name";
import CustomerForm from "./components/customer_form/customer_form";
function App() {
    return (
        <>
            <PharmacyStatus />
            <PharmacyInfo name="Aban" phoneNumber="123123123" dr="Ali" address="دورود کوی شهید بهشتی" />
            <Services />
            <MyButton />
            <Counter />
            <CustomerName />
            <CustomerForm />
        </>
    );
}

export default App;
