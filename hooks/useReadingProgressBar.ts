import { useEffect, useState } from "react";

export default function useReadingProgressBar(){

    const [completion, setCompletion] = useState(0)
    useEffect(()=>{
        const updateScrollCompletion = ()=>{
             const actualPosition = window.scrollY
             const scrollHeight = document.body.scrollHeight - window.innerHeight
             const precent = (actualPosition/scrollHeight)*100
             setCompletion(precent)
        }
        window.addEventListener('scroll',updateScrollCompletion)
    },[])
    return completion
}