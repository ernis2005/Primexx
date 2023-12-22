import HomeComponent from "@/components/Home/Home";


export const metadata = {
    title: 'Primex',
    description: 'Дарим доступ к растущему миру возможностей! ',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}
const Home =  () => {
    // const dataRate:Product[] = await getRateTime()
    // const dataCountry:ProductCountry[] = await getCountry()
    
    return (<HomeComponent/>);
}

export default Home