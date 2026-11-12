const services = ["مشاوره دارویی", "فروش مکمل", "فروش محصولات بهداشتی", "اندازه‌گیری فشار خون"];

function Services() {
    return (
        <>
            <h2>Pharmacy Services</h2>
            <ul>
                {services.map((service) => (
                    <li key={service} >{service}</li>
                ))}
            </ul>
        </>
    );
}

export default Services;
