import React, { Children } from 'react'
import '../index.css';

const HeroSec = (props) => {
    return (
        <div className='bg-gray-200 h-3/4 m-auto rounded-md flex'>
            <div className='border-slate-400'>
                <div className='text-9xl font-bold text-slate-600 pt-60 pl-28 md:text-red-700'>Hey There,</div>
                <div className='text-9xl font-bold text-slate-600 pl-32'> I'm Amit</div>
            </div>
            <div className='static right-24'>
            <img src="../brushStoke1.png" className='w-2/4 m-auto absolute left-3/5' />
            </div>
            <div style={{zIndex:999}}>
            <img src="../myPic.png" style={{width:'45vw'}} />
            </div>
            
        </div>
    )
}

export default HeroSec