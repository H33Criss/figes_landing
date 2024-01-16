import React from 'react'
import { CotizacionHeader } from './header/CotizacionHeader'
import { CotizacionTable } from './table/CotizacionTable'
import { CotizacionFooter } from './footer/CotizacionFooter'

export const Cotizacion = () => {
    return (
        <div className='flex flex-col'>
            <CotizacionHeader />
            <CotizacionTable />
            <CotizacionFooter />
        </div>
    )
}
