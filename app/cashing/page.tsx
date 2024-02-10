import Image from "next/image";
import Link from "next/link";


export default function cashingPage() {
    return (
        <div className="mx-auto container mt-[80px] text-lg px-3 text-justify">
            {/* <Link href={'/cashing/history'} className="block text-center text-xl font-bold py-6">History</Link> */}
            <Link href={'https://nextjs.org/docs/app/building-your-application/caching'} className="block text-center text-xl underline transition-all hover:text-blue-300">Nextjs da ma‘lumotlarni keshlanishi bo‘yicha qisqacha ma‘lumotlar.</Link>
            <p>Bu bo‘limda Nextjs da keshlanishi jarayonini eng yuqori turlarini hamda uni ishalash prinsipini men tushunganimcha yoritib berishga harakat qilaman</p>
            <p>Next.js ilovangiz ish faoliyatini yaxshilaydi va renderlash ishlari va maʼlumotlar soʻrovlarini keshlash orqali xarajatlarni kamaytiradi. Ushbu sahifada Next.js keshlash mexanizmlari, ularni sozlash uchun foydalanishingiz mumkin bo‘lgan API-lar va ularning bir-biri bilan o‘zaro ta‘siri batafsil ko‘rib chiqiladi.
                <br />
                Quyidagi jadvalda biz Nextjs ning keshalnish mexanizmlari ko‘rishimiz mumkin.
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
                            <td className="px-3 border border-slate-500" >Ma‘lumotlarni React komponent daraxtidan qayta foydalanadi</td>
                            <td className="px-3 border border-slate-500">Har bir so‘rovda - hayot sikli</td>

                        </tr>
                        <tr className="grid grid-cols-5">
                            <td className="px-3 border border-slate-500"><Link href={'#'} className="underline text-blue-200">Data Cache	Data</Link></td>
                            <td className="px-3 border border-slate-500">Data</td>
                            <td className="px-3 text-center border border-slate-500"> Serverda</td>
                            <td className="px-3 border border-slate-500">Foydalanuvchilar so‘rovlari va o‘rnatishalri bo‘ylab ma‘lumotlarni saqlash</td>
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
                            <td className="px-3 border border-slate-500">Navigatsiyada server so‘rovlarini kamaytiring</td>
                            <td className="px-3 border border-slate-500">Foydalanuvchi sessiyasi yoki vaqtga asoslangan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Odatda Nextjs imkon boricha barcha to‘liq keshlashga harakat qiladi - ishash tezligini oshirish va trafik sarfini kamaytirish uchun. Bu routerlarni statik rendering qilishni va ma‘lumot so‘rovlari keshlanishini anglatadi. (Agar qarshi bo‘lmasa foydalnuvchi.)</p>
            <Image src={'/caching-overview.avif'} alt="Keshlanishni ko‘rinishlari" width={800} height={800} className="mx-auto py-5" />
            <p>Yuqoridagi rasmda Next da keshlash jarayonini ummumiy sxemasi keltirilgan. Unda ko‘rsak keshlash ikki jarayonda sodir bo‘ladi. Bular: <br />
                - Mijoz (client) tarafda <br />
                - Server tarafda <br />
            </p>
            <h4 className="text-2xl text-center">Mijoz (client) tarafda - Roter Cashe</h4>
            <p>Bunda client biror sahifaga birincha marta kirganda birinchi jarayon sekin bo‘ladi. So‘ngra shu sahifaga qayta murojat qilganda jarayon kuttirmasdan sodir bo‘ladi. Ya‘ni keshlanish brauzerda kechadi. Bu bizga ilovamiz tezligini bersa ikkinchi tomondan agar biz murojaat qilgan sahifa o‘zgartirilgan bo‘lsa u o‘zgarishlarni ko‘rmasdan keshlangan eski ma‘lumotlar kelishiga sabab bo‘ladi.</p>
            <h4 className="text-2xl text-center">Server tarafda</h4>
            <p>Agar mijoz ikkinchi yoki undan ko‘p martada avval murojat qilmagan sahifaga murojaatqilsa undagi ma‘lumot mijozda hali keshlanmagan bo‘ladi va shunda keshlashni server qismiga o‘tiladi. Qilgan murojaati dastlab loyiha build qilingandagi statik routlardan qidiriladi va agar topilsa uni qaytaradi. Bu jarayon server keshingning birinchi bosqichi <code>Full Route Cache</code> da kechadi.</p>
            <h4 className="text-xl text-center">Full Route Cashe</h4>
            <p>
                Bu keshlanish loyiha build qilinganda qaysi qismini keshlash imkoni bo‘lsa uni keshlab olishi hisobiga amalga oshadi. Yoki boshqacha aytadigan bo‘lsak loyiya build qilingandan Next SSG - statik side generation qilganida keshlash jarayoni bo‘ladi. Bunda agar loyiha ichida dinamik funksiyalar bo‘lsa SSG tashlab ketiladi shu qismidan. <br />
                Sabab Next avvaldan bilmaydi mijoz qanday harakatlanishini. Dinamik funksiyalarda uni statik qilish uchun (agar bu kerak bo‘lsa) Nextjsning
                <code> generateStaticParams ()</code>  funksiyasidan foydalanish mumkin.
            </p>
            <h4 className="text-xl text-center">Request Memoization</h4>
            <p>
                Bu keshlanish agar Foydalanuvchi so‘ragan sahifa yoki komponent Full Route Cashe da bo‘lmasa ya‘ni loyiha build qilinganda undagi dinamik funksiyalar build qilinmaydi. Shunda foydalanuvchi so‘rovi fetch ga o‘tadi. Agar Request Memoization da bu so‘rov avvalgi so‘rov bilan bir hil bo‘lsa uni qaytaradi agar bir xil bo‘lmasa uni keyingi keshlanish mexanizmiga yuboradi. Ya‘ni Request Memoization - Reactdagi keshlanish jarayoni bo‘lib uni yashash sikli bir so‘rov miqdorida bo‘ladi. Yani faqat bir so‘rovni saqlaydi keshlab o‘zida. Bu bizga so‘rovlar ikkilanmasligi ya‘ni so‘rov bir marta bo‘lgach uni saqlab qayta yubrish imkonini beradi. Lekin bu keshlanishni kamchiligi so‘rovni faqat oxirgi qilingan bittasini saqlab qoladi.
            </p>
            <h4 className="text-xl text-center">Data cashing</h4>
            <p>
                Bu keshlanish Next taqdim etayotgan keshalnish mexanizmi bo‘lib bunda agar foydalanuvchi so‘ragan so‘rov ungacha bo‘lgan keshlanish mexanizmalrida bo‘lmasa u ya‘ni Data cashing so‘rovga o‘zidan javob beradi. Agar uni o‘zidan ham bo‘lmasa serverga murojat qilib undan olayotganda o‘ziga keshlab saqlab qoladi.
            </p>
            <Image src={'/caching-overview.avif'} alt="Keshlanishni ko‘rinishlari" width={800} height={800} className="mx-auto py-5" />
            <p>Endi suratga qaytadigan bo‘lsak un tushunish ancha osonroq bo‘ladi. Ya‘n mijoz birinchi sahifaga kirganda uni so‘rovi brauzer keshidan qidiriladi. So‘ng u yerda bo‘lmasa Full Router Cashe dan qidiriladi. Agar u yuerda bo‘lsa olinib uni o‘zi keshlab foydalanuvchiga taqdim qiladi. Agar u yerda ham bo‘lmasa Request Memoization keshiga murojaat qilinadi. Natija u yerda bo‘lsa uni dastlab Full Route Cashe o‘ziga saqlaydi. So‘ng uni Route Cashe ga yuboradi. U ma‘lumotni brauzer keshiga saqlaydi. So‘ng mijozga qayta foydalanadigan qilib taqdim etiladi. Va shu kabi davom etadi...</p>

        </div>
    )
}