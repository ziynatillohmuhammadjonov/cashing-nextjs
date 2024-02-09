import {promises as fs} from 'fs'
import Link from "next/link"

async function  HistoryPage() {
    const text =await fs.readFile(process.cwd()+ '/text.txt', 'utf-8')
    console.log(text);
    
  return (
    <div className='container mx-auto px-5'>
        <h2 className="text-center text-xl font-bold py-6">HistoryPage</h2>
        <Link className="block text-center text-xl font-bold py-6" href={'/cashing'}>Cashing</Link>
        {text}

    </div>

  )
}

export default HistoryPage