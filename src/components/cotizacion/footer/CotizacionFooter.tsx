import { currencyFormat } from '@/utils'
import { Chip } from '@nextui-org/react'
import React from 'react'
import { IoInformationCircleOutline } from 'react-icons/io5'

export const CotizacionFooter = () => {
    return (
        <div className='container mx-auto flex flex-col items-center mt-3'>
            <div className='grid grid-cols-12 bg-gray-800  min-w-full rounded-lg px-5 py-3'>
                <div className='flex flex-row col-start-2 col-end-6 items-center'>
                    <h1 className='font-bold antialiased text-xl'>Total final:</h1>

                </div>
                <div className='flex flex-row-reverse col-start-13 col-end-7 items-center'>
                    <Chip color='success' variant='faded' className='text-3xl ml-3 '>{currencyFormat(1000000)}</Chip>

                </div>
                <div className='flex flex-row col-start-2 col-end-9 items-center'>
                    <IoInformationCircleOutline size={30} className='text-blue-600 mr-1' />
                    <small> Esta es solo una estimacion del total de la cotizacion y para dar un expectativa acertada acerca de los costos de los productos.</small>
                </div>
            </div>
        </div >
    )
}
