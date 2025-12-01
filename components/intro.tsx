import Image from 'next/image'
import authorImage from '@/public/images/authors/ahmed.png'
export default function Intro() {
    return (
        <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-8 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 md:mt-0'>
                <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>
                    Hi, I'm Ahmed!
                </h1>
                <p className='mt-3 font-light text-muted-foreground'>
                    I'm a Computer Science Student at Princeton University. 
                </p>
            </div>
            <div className='relative'>
                <Image 
                src={authorImage} 
                alt='Ahmed Virk' 
                width={175} 
                height={175} 
                className='flex-1 rounded-lg' 
                priority />
            </div>
        </section>
    )
} 