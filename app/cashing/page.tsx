import Image from "next/image";
import Link from "next/link";


export default function cashingPage() {
    return (
        <div className="mx-auto container mt-[80px] text-lg">
            {/* <Link href={'/cashing/history'} className="block text-center text-xl font-bold py-6">History</Link> */}
            <Link href={'https://nextjs.org/docs/app/building-your-application/caching'} className="block text-center text-xl underline transition-all hover:text-blue-300">Nextjs da ma'lumotlarni keshlanishi bo'yicha qisqacha ma'lumotlar.</Link>
            <p>Bu bo'limda Nextjs da keshlanishi jarayonini eng yuqori turlarini hamda uni ishalash prinsipini men tushunganimcha yoritib berishga harakat qilaman</p>
            <p>Next.js ilovangiz ish faoliyatini yaxshilaydi va renderlash ishlari va maʼlumotlar soʻrovlarini keshlash orqali xarajatlarni kamaytiradi. Ushbu sahifada Next.js keshlash mexanizmlari, ularni sozlash uchun foydalanishingiz mumkin bo'lgan API-lar va ularning bir-biri bilan o'zaro ta'siri batafsil ko'rib chiqiladi.
                <br />
                Quyidagi jadvalda biz Nextjs ning keshalnish mexanizmlari ko'rishimiz mumkin.
            </p>
            <div className="overflow-x-auto py-5">
            <table className="table-auto text-left w-[1536px]  border-separate border border-slate-500">
                <thead className="text-center">
                    <tr className="grid grid-cols-5">
                        <th className="px-3 border border-slate-500">Mexanizm</th>
                        <th className="px-3 border border-slate-500">Nima qiladi</th>
                        <th className="px-3 border border-slate-500">Qayerda</th>
                        <th className="px-3 border border-slate-500">Maqsad</th>
                        <th className="px-3 border border-slate-500">Davomiyligi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="grid grid-cols-5">
                        <td className="px-3 border border-slate-500"><Link href={'#'} className="underline text-blue-200">Request Memoization</Link></td>
                        <td className="px-3 border border-slate-500">Funksiyaning qiymatlarini qaytaradi</td>
                        <td className="px-3 text-center border border-slate-500">Serverda</td>
                        <td className="px-3 border border-slate-500" >Ma'lumotlarni React komponent daraxtidan qayta foydalanadi</td>
                        <td className="px-3 border border-slate-500">Har bir so'rovda - hayot sikli</td>

                    </tr>
                    <tr className="grid grid-cols-5">
                        <td className="px-3 border border-slate-500"><Link href={'#'} className="underline text-blue-200">Data Cache	Data</Link></td>
                        <td className="px-3 border border-slate-500">Data</td>
                        <td className="px-3 text-center border border-slate-500"> Serverda</td>
                        <td className="px-3 border border-slate-500">Foydalanuvchilar so'rovlari va o'rnatishalri bo'ylab ma'lumotlarni saqlash</td>
                        <td className="px-3 border border-slate-500">Doimiy (qayta tasdiqlanishi mumkin)</td>
                        

                    </tr>
                    <tr className="grid grid-cols-5">
                        <td className="px-3 border border-slate-500"><Link href={'#'} className="underline text-blue-200">Full Route Cache</Link></td>
                        <td className="px-3 border border-slate-500">HTML and RSC payload</td>
                        <td className="px-3 text-center border border-slate-500">Serverda</td>
                        <td className="px-3 border border-slate-500">Renderlash narxini kamaytiring va ish faoliyatini yaxshilang</td>
                        <td className="px-3 border border-slate-500">Doimiy (qayta tasdiqlanishi mumkin)</td>
                       
                    </tr>
                    <tr className="grid grid-cols-5">
                        <td className="px-3 border border-slate-500"><Link href={'#'} className="underline text-blue-200">Router Cache</Link></td>
                        <td className="px-3 border border-slate-500">RSC Payload</td>
                        <td className="px-3 text-center border border-slate-500">Mijozda</td>
                        <td className="px-3 border border-slate-500">Navigatsiyada server so'rovlarini kamaytiring</td>
                        <td className="px-3 border border-slate-500">Foydalanuvchi sessiyasi yoki vaqtga asoslangan</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <p>Odatda Nextjs imkon boricha barcha to'liq keshlashga harakat qiladi - ishash tezligini oshirish va trafik sarfini kamaytirish uchun. Bu routerlarni statik rendering qilishni va am'lumot so'rovlari keshlanishini anglatadi. (Agar qarshi bo'lmasa foydalnuvchi.)</p>
            <Image src={'/caching-overview.avif'} alt="Keshlanishni ko'rinishlari" width={1000} height={1000}/>

        </div>
    )
}