import HomeComponent from "@/components/Home/Home";
export const metadata = {
    title: 'ЭКСПРЕСС ДОСТАВКА ПОСЫЛОК ИЗ ТУРЦИИ И США',
    description: 'Сервис по доставке ваших любимых брендов из любого Американского и Турецкого сайта и маркетплейса в Россию. Бесплатный склад для байеров. Удобный личный кабинет ',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}
const Home =  () => {
  
    return (<HomeComponent/>);
}
// ismanalievernis5@gmail.com
export default Home