"use client"
import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'
import { useAppSelector } from '@/app/redux/features/auth-slice'
import { CiAlarmOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
interface Peson {
    setModule: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ setModule }: Peson) => {
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
    const useName = useAppSelector((state) => state.authReducer.value.name)
    return (
        <div className={s.module}>
            <div className={s.block1}>
                <button onClick={() => setModule(false)}>
                    <AiOutlineClose />
                </button>
                <ul>
                    <ul >
                        <li>
                            <Link onClick={() => setModule(false)} href={'/'}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/page/services'}>
                                Услуги
                            </Link></li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/page/rates'}>
                                Тарифы
                            </Link></li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/page/news'}>
                                Новости
                            </Link></li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/page/FAQ'}>
                                F.A.Q.
                            </Link></li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'#'}>
                                О нас
                            </Link></li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'#'}>
                                Контакты
                            </Link></li>
                    </ul>
                </ul>   
                <div className={s.block2}>
                    <div className={s.block2Contend}>
                        <div className={s.Login}>

                            <ul>

                                {isAuth !== true ? (<><li>
                                    <a href={'/entrance'}>
                                        Вход
                                    </a>
                                </li><span></span><li>Регистрация</li></>) : <li> <Link href={'/profile'} >{useName}</Link></li>}

                            </ul>
                        </div>
                        <div className={s.buttonSearch}>
                            <Link href={'/page/tracking'} style={{ border: 'none' }}>
                                <AiOutlineSearch />
                                <p>Отследить товар</p>
                            </Link>
                        </div>
                        <div className={s.menu0infoBlock1}>
                            <ul>
                                <li> <CiAlarmOn /> 09:00 - 20:00</li>
                                <li><BsTelephone /> <a href="tel:+996 770 710-170">+996 770 710-170</a>  </li>
                                <li><MdOutlineMailOutline /> <a href="mailto:info@primex.kg">info@primex.kg</a> </li>
                            </ul>
                        </div>
                        <ul className={s.socialMedia}>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9176 0C10.8666 0 10.3582 0.0178125 8.76709 0.090625C7.17912 0.16375 6.0952 0.416563 5.14676 0.7875C4.1657 1.17063 3.33349 1.68313 2.50439 2.51719C1.67467 3.35094 1.16503 4.18781 0.782798 5.17406C0.412997 6.12813 0.161283 7.21844 0.0898089 8.81469C0.0186454 10.4147 0 10.9263 0 15C0 19.0738 0.0180239 19.5834 0.0901197 21.1834C0.163148 22.7803 0.41455 23.8703 0.783109 24.8241C1.16441 25.8106 1.67405 26.6475 2.50346 27.4813C3.33225 28.3156 4.16446 28.8294 5.1449 29.2125C6.09395 29.5834 7.17818 29.8363 8.76584 29.9094C10.3569 29.9822 10.865 30 14.9157 30C18.9671 30 19.4739 29.9822 21.065 29.9094C22.653 29.8363 23.7381 29.5834 24.6872 29.2125C25.6679 28.8294 26.4989 28.3156 27.3277 27.4813C28.1574 26.6475 28.6671 25.8106 29.0493 24.8244C29.416 23.8703 29.6677 22.78 29.7423 21.1838C29.8138 19.5838 29.8324 19.0738 29.8324 15C29.8324 10.9263 29.8138 10.415 29.7423 8.815C29.6677 7.21813 29.416 6.12813 29.0493 5.17438C28.6671 4.18781 28.1574 3.35094 27.3277 2.51719C26.498 1.68281 25.6683 1.17031 24.6863 0.7875C23.7353 0.416563 22.6508 0.16375 21.0628 0.090625C19.4717 0.0178125 18.9652 0 14.9129 0H14.9176ZM14.4204 2.70331L14.9176 2.70346C18.9002 2.70346 19.3723 2.71783 20.945 2.78971C22.3994 2.85658 23.1887 3.10096 23.7145 3.30627C24.4106 3.57815 24.9069 3.90315 25.4286 4.42815C25.9507 4.95315 26.2739 5.45315 26.5449 6.15315C26.749 6.68127 26.9924 7.47502 27.0586 8.93752C27.13 10.5188 27.1456 10.9938 27.1456 14.9969C27.1456 19 27.13 19.475 27.0586 21.0563C26.9921 22.5188 26.749 23.3125 26.5449 23.8407C26.2745 24.5407 25.9507 25.0391 25.4286 25.5638C24.9066 26.0888 24.4109 26.4138 23.7145 26.6857C23.1893 26.8919 22.3994 27.1357 20.945 27.2025C19.3726 27.2744 18.9002 27.29 14.9176 27.29C10.9346 27.29 10.4626 27.2744 8.89012 27.2025C7.43578 27.135 6.64645 26.8907 6.12034 26.6853C5.42425 26.4135 4.92703 26.0885 4.40496 25.5635C3.88289 25.0385 3.5597 24.5397 3.28872 23.8394C3.08455 23.3113 2.84123 22.5175 2.77504 21.055C2.70356 19.4738 2.68927 18.9988 2.68927 14.9931C2.68927 10.9875 2.70356 10.515 2.77504 8.93377C2.84154 7.47127 3.08455 6.67752 3.28872 6.14877C3.55908 5.44877 3.88289 4.94877 4.40496 4.42377C4.92703 3.89877 5.42425 3.57377 6.12034 3.30127C6.64614 3.09502 7.43578 2.85127 8.89012 2.78408C10.2662 2.72158 10.7994 2.70283 13.5795 2.69971V2.70346C13.8392 2.70305 14.1189 2.70317 14.4204 2.70331ZM21.0899 6.99287C21.0899 5.99881 21.8917 5.1935 22.8799 5.1935C23.8681 5.1935 24.6698 5.99912 24.6698 6.99287C24.6698 7.98662 23.8681 8.79287 22.8799 8.79287C21.8917 8.79287 21.0899 7.98662 21.0899 6.99287ZM14.9173 7.29688C10.6871 7.29704 7.25745 10.746 7.25745 15C7.25745 19.2541 10.6873 22.7016 14.9176 22.7016C19.148 22.7016 22.5765 19.2541 22.5765 15C22.5765 10.7459 19.1476 7.29688 14.9173 7.29688ZM19.8897 15C19.8897 12.2384 17.6634 10 14.9176 10C12.1714 10 9.94543 12.2384 9.94543 15C9.94543 17.7613 12.1714 20 14.9176 20C17.6634 20 19.8897 17.7613 19.8897 15Z" fill="white" />
                            </svg></a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.93252 2.1C0.83252 4.22 0.83252 7.61 0.83252 14.4V15.6C0.83252 22.38 0.83252 25.77 2.93252 27.9C5.05252 30 8.44252 30 15.2325 30H16.4325C23.2125 30 26.6025 30 28.7325 27.9C30.8325 25.78 30.8325 22.39 30.8325 15.6V14.4C30.8325 7.62 30.8325 4.23 28.7325 2.1C26.6125 0 23.2225 0 16.4325 0H15.2325C8.45252 0 5.06252 0 2.93252 2.1ZM5.89251 9.1297C6.05251 16.9297 9.95251 21.6097 16.7925 21.6097H17.1925V17.1497C19.7025 17.3997 21.6025 19.2397 22.3625 21.6097H25.9125C25.5484 20.263 24.9029 19.0087 24.0187 17.9297C23.1344 16.8506 22.0314 15.9713 20.7825 15.3497C21.9017 14.6682 22.8682 13.7632 23.6219 12.6912C24.3755 11.6193 24.9 10.4035 25.1625 9.1197H21.9425C21.2425 11.5997 19.1625 13.8497 17.1925 14.0597V9.1297H13.9625V17.7697C11.9625 17.2697 9.44251 14.8497 9.33251 9.1297H5.89251Z" fill="#F5F5F5" />
                            </svg></a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M30.8325 15C30.8325 23.2843 24.1168 30 15.8325 30C7.54825 30 0.83252 23.2843 0.83252 15C0.83252 6.71573 7.54825 0 15.8325 0C24.1168 0 30.8325 6.71573 30.8325 15ZM3.86225 15C3.86225 21.611 9.22153 26.9703 15.8325 26.9703C22.4435 26.9703 27.8028 21.611 27.8028 15C27.8028 8.38901 22.4435 3.02973 15.8325 3.02973C9.22153 3.02973 3.86225 8.38901 3.86225 15Z" fill="#F5F5F5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.5417 8C18.5417 8.20465 18.5608 8.40619 18.596 8.60124C18.7654 9.50291 19.299 10.2767 20.0402 10.7595C20.5578 11.0984 21.1712 11.2935 21.8325 11.2935L21.8324 11.8211V13.6596C20.6056 13.6596 19.4682 13.2664 18.5416 12.6013V17.4136C18.5416 19.8149 16.5864 21.7719 14.1871 21.7719C13.2606 21.7719 12.3979 21.4776 11.6919 20.982C10.5673 20.1922 9.83252 18.8876 9.83252 17.4136C9.83252 15.009 11.7846 13.0553 14.1839 13.0585C14.3852 13.0585 14.5801 13.0745 14.7718 13.1001V13.6596L14.7648 13.663L14.7717 13.6628V15.5174C14.5865 15.4599 14.3884 15.4247 14.1839 15.4247C13.0881 15.4247 12.1967 16.3168 12.1967 17.4136C12.1967 18.1778 12.6312 18.8397 13.2638 19.1754C13.2697 19.1835 13.2757 19.1916 13.2817 19.1996L13.2923 19.2136C13.285 19.1995 13.2766 19.1857 13.267 19.1722C13.5449 19.3193 13.858 19.4025 14.1903 19.4025C15.2605 19.4025 16.136 18.5487 16.1743 17.4871L16.1775 8H18.5417Z" fill="#F5F5F5" />
                            </svg></a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="28" viewBox="0 0 37 28" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.4575 4.0625C31.77 4.4375 32.7075 5.375 33.0825 6.6875C33.8325 9.125 33.8325 14 33.8325 14C33.8325 14 33.8325 18.875 33.27 21.3125C32.895 22.625 31.9575 23.5625 30.645 23.9375C28.2075 24.5 18.8325 24.5 18.8325 24.5C18.8325 24.5 9.27001 24.5 7.02001 23.9375C5.70751 23.5625 4.77003 22.625 4.39503 21.3125C3.83253 18.875 3.83252 14 3.83252 14C3.83252 14 3.83251 9.125 4.20751 6.6875C4.58251 5.375 5.52003 4.4375 6.83253 4.0625C9.27003 3.5 18.645 3.5 18.645 3.5C18.645 3.5 28.2075 3.5 30.4575 4.0625ZM0.83252 14.0004L0.832542 14.0196L0.832678 14.0667C0.832831 14.107 0.833129 14.1647 0.833714 14.2381C0.834881 14.3849 0.837195 14.5947 0.841782 14.8531C0.850936 15.3687 0.869242 16.0836 0.906025 16.8805C0.976196 18.4008 1.1229 20.4749 1.47185 21.9871L1.48923 22.0624L1.51045 22.1367C2.1702 24.4458 3.88671 26.1623 6.19585 26.8221L6.24391 26.8358L6.29241 26.8479C7.15629 27.0639 8.43836 27.1793 9.6197 27.2563C10.888 27.3391 12.3377 27.393 13.6911 27.4286C15.049 27.4644 16.3324 27.4822 17.2749 27.4911C17.7467 27.4955 18.1344 27.4978 18.4048 27.4989C18.5401 27.4994 18.6461 27.4997 18.7187 27.4999L18.8317 27.5C18.8317 27.5 18.8325 27.5 18.8325 24.5C18.8325 27.5 18.8328 27.5 18.8328 27.5L18.9443 27.4999C19.0157 27.4997 19.1198 27.4994 19.2527 27.4989C19.5185 27.4978 19.8997 27.4955 20.3642 27.4911C21.2922 27.4822 22.5581 27.4644 23.9043 27.4286C25.2464 27.393 26.6892 27.339 27.9648 27.2564C29.171 27.1783 30.4421 27.0632 31.3196 26.8607L31.3949 26.8433L31.4692 26.8221C33.7782 26.1623 35.4949 24.4458 36.1546 22.1367L36.1758 22.0624L36.1932 21.9871C36.5422 20.4749 36.6889 18.4008 36.759 16.8805C36.7958 16.0835 36.8141 15.3687 36.8233 14.853C36.8278 14.5947 36.8302 14.3849 36.8313 14.2381C36.8319 14.1647 36.8322 14.1069 36.8324 14.0667L36.8325 14.0196L36.8325 14.0009C36.8325 14.0009 36.8325 14 34.2359 14C36.8325 14 36.8325 13.9995 36.8325 13.9995L36.8325 13.9928L36.8325 13.9786L36.8323 13.9295C36.8321 13.8879 36.8317 13.8288 36.8309 13.7539C36.8293 13.6043 36.8262 13.3912 36.82 13.1292C36.8076 12.6067 36.7829 11.8821 36.7331 11.0736C36.6399 9.55883 36.443 7.4253 35.9584 5.83316C35.2924 3.53928 33.5808 1.83481 31.2817 1.17793L31.2336 1.1642L31.1852 1.15207C30.3213 0.936102 29.0392 0.820708 27.8579 0.743665C26.5896 0.66095 25.1398 0.606966 23.7864 0.571351C22.4285 0.535616 21.1451 0.517814 20.2026 0.508923C19.7308 0.504472 19.3431 0.502242 19.0727 0.501124C18.9374 0.500565 18.8314 0.500284 18.7588 0.500143L18.6458 0.5C18.6458 0.5 18.645 0.5 18.645 3.5C18.645 0.5 18.6447 0.5 18.6447 0.5L18.5332 0.500143C18.4618 0.500285 18.3577 0.500566 18.2248 0.501125C17.959 0.502244 17.5779 0.504474 17.1133 0.508927C16.1853 0.517822 14.9194 0.53563 13.5732 0.571369C12.2312 0.606999 10.7884 0.660978 9.51271 0.743574C8.3065 0.821674 7.03544 0.936829 6.15795 1.13933L6.08266 1.1567L6.00837 1.17793C3.69926 1.83767 1.9827 3.55419 1.32294 5.86334L1.2711 6.0448L1.2424 6.23133C1.02394 7.65132 0.927571 9.6458 0.880811 11.1656C0.85665 11.9508 0.844609 12.6559 0.838588 13.1647C0.835573 13.4195 0.834057 13.626 0.833294 13.7699L0.832621 13.9371L0.83252 14.0004ZM15.8325 9.5L23.7075 14L15.8325 18.5V9.5Z" fill="white" />
                            </svg></a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M15.8516 0C7.59176 0 0.86775 6.71756 0.864749 14.9766C0.863249 17.6166 1.55479 20.1938 2.86592 22.4648L0.83252 30L8.68192 28.1455C10.8706 29.3395 13.3345 29.9663 15.8428 29.9678H15.8486C24.1069 29.9678 30.828 23.2487 30.8325 14.9912C30.8355 10.9877 29.2786 7.2236 26.4493 4.3916C23.62 1.5611 19.86 0.0015 15.8516 0ZM15.8486 3C19.0529 3.0015 22.0643 4.2507 24.328 6.5127C26.5917 8.7777 27.8352 11.7873 27.8322 14.9883C27.8292 21.5943 22.4553 26.9678 15.8457 26.9678C13.846 26.9663 11.8652 26.4642 10.1205 25.5117L9.10969 24.9609L7.99337 25.2246L5.03996 25.9219L5.76073 23.2441L6.08596 22.043L5.46481 20.9648C4.41771 19.1528 3.86354 17.0811 3.86504 14.9766C3.86804 8.37356 9.24349 3 15.8486 3ZM10.5483 8.0625C10.2978 8.0625 9.89272 8.15625 9.54919 8.53125C9.20566 8.90475 8.23656 9.80937 8.23656 11.6514C8.23656 13.4934 9.57849 15.2739 9.76601 15.5244C9.95203 15.7734 12.3563 19.6729 16.1621 21.1729C19.3244 22.4194 19.9667 22.1734 20.6538 22.1104C21.3409 22.0489 22.8703 21.2065 23.1824 20.332C23.4944 19.4575 23.4951 18.7053 23.4021 18.5508C23.3091 18.3948 23.0593 18.3018 22.6843 18.1143C22.3107 17.9268 20.4699 17.0229 20.1264 16.8984C19.7829 16.7739 19.5316 16.7109 19.2826 17.0859C19.0335 17.4609 18.3179 18.3018 18.0989 18.5508C17.8798 18.8013 17.6623 18.835 17.2872 18.6475C16.9122 18.4585 15.7064 18.0621 14.2752 16.7871C13.1621 15.7956 12.411 14.5723 12.192 14.1973C11.9745 13.8238 12.1715 13.6186 12.359 13.4326C12.5271 13.2646 12.7311 12.9954 12.9187 12.7764C13.1047 12.5574 13.1692 12.4013 13.2937 12.1523C13.4182 11.9033 13.3545 11.6836 13.2615 11.4961C13.1685 11.3086 12.4401 9.45975 12.1071 8.71875C11.8265 8.09625 11.5303 8.08179 11.2632 8.07129C11.0457 8.06229 10.7973 8.0625 10.5483 8.0625Z" fill="#F5F5F5" />
                            </svg></a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M30.8325 15C30.8325 23.2843 24.1168 30 15.8325 30C7.54825 30 0.83252 23.2843 0.83252 15C0.83252 6.71573 7.54825 0 15.8325 0C24.1168 0 30.8325 6.71573 30.8325 15ZM3.86225 15C3.86225 21.611 9.22152 26.9703 15.8325 26.9703C22.4435 26.9703 27.8028 21.611 27.8028 15C27.8028 8.389 22.4435 3.02973 15.8325 3.02973C9.22152 3.02973 3.86225 8.389 3.86225 15Z" fill="#F5F5F5" />
                                <path d="M21.8444 9.76191L19.6147 21.1464C19.6147 21.1464 19.5189 21.6667 18.8736 21.6667C18.5308 21.6667 18.354 21.5036 18.354 21.5036L15.3264 18.9913L13.2873 20.9994C13.2873 20.9994 13.1986 21.0679 13.0801 21.0709C13.0391 21.072 12.9951 21.0655 12.9499 21.0453L13.5237 17.4952L19.376 12.0809C19.507 11.9815 19.5314 11.7952 19.432 11.6642C19.3314 11.5333 19.1457 11.5095 19.0147 11.6089L11.1648 16.3066L11.1611 16.3048L8.12838 15.4982C8.12838 15.4982 7.5885 15.3423 7.5885 14.8958C7.5885 14.5238 8.14386 14.3464 8.14386 14.3464L20.8319 9.30595C20.8314 9.30536 21.2194 9.16607 21.5022 9.16667C21.676 9.16667 21.8742 9.24107 21.8742 9.46429C21.8742 9.6131 21.8444 9.76191 21.8444 9.76191Z" fill="#F5F5F5" />
                            </svg></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu