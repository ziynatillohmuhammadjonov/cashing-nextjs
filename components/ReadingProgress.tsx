"use client"
import {Progress} from 'antd'
import useReadingProgressBar from '@/hooks/useReadingProgressBar'

export default function ReadingProgerss(){
    const completion = useReadingProgressBar()
    
    return (
        <div className='fixed w-full'>
            <Progress percent={completion} showInfo={false} strokeColor='#7b87f0'/>
        </div>
    )
}