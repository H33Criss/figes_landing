import React from 'react'
import { GiCash } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";

export const CotizacionHeader = () => {
    return (
        <div className='container mx-auto grid grid-cols-12 mt-16'>
            {/* <div className='flex items-center  col-start-1 col-end-6'>
                <MdAttachMoney size={70} />
                <h1 className='antialiased font-semibold '>FigesSPA</h1>
            </div> */}
            <div className='flex items-center flex-row-reverse col-start-13 col-end-7'>
                <h1 className='text-6xl font-semibold'>Cotizacion</h1>
                <GiCash size={55} className={'mr-2'} />
            </div>
            {/* <div className='flex items-start  col-start-1 col-end-6 mt-5'>
                <button className='bg-blue-600 rounded-xl py-2 px-6 hover:bg-blue-500 hover:scale-105 transition-all'>Seleccionar Productos</button>
            </div> */}
            <div className='flex items-center flex-row-reverse col-start-13 col-end-7 mt-2'>
                <span className='text-blue-600 text-sm antialiased font-semibold'>Cotiza nuestros productos y contactanos luego si te agrada.</span>
            </div>

        </div>
    )
}
