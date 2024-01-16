import { Checkbox } from '@/components'
import { currencyFormat } from '@/utils';
import { Chip, Input } from '@nextui-org/react'
import React from 'react'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { MdAttachMoney } from "react-icons/md";

export enum WayOfSale {
    byLength = 'metros',//Tubos o cañerias -> m,cm
    byWeight = 'kilos',//barras de metal ->kg
    byUnits = 'unidades',//accesorios o piezas -> units
    bySize = 'cm²',//planchas -> cm², m²
    byRoll = 'unidades',//cables , hilos o cuerdas -> units
    asService = 'horas',//Servicio prestado por instalacion -> hrs
}

export interface CotizacionItemData {
    image: string,
    name: string,
    description?: string,
    precio: number,
    wayOfSale: WayOfSale,
    cantidad: number,// kg, m,cm ,cm², m², units, hrs


}

export const CotizacionTableItem = ({ image, name, description, precio, cantidad, wayOfSale }: CotizacionItemData) => {
    return (
        <tr className="bg-gray-800 ">
            <td className="w-1/12 text-center rounded-l-xl  p-3">
                <Checkbox />
            </td>
            <td className="text-center w-2/4 p-3">
                <div className="flex align-items-center">
                    <img src={image} alt={name} className="rounded-full h-12 w-12  object-cover" />
                    <div className="ml-2 text-left">
                        <div className="text-gray-200 text-lg">{name}</div>
                        <div className="text-gray-500">{description}</div>
                    </div>
                </div>
            </td>

            <td className="text-center w-1/4 p-3 ">
                <Chip className='text-white border-green-700' variant='dot'
                    startContent={<MdAttachMoney size={20} className='text-green-700' />}
                >
                    {currencyFormat(precio)}
                </Chip>
            </td>
            <td className="text-center w-3/6 p-3">
                <Input
                    labelPlacement="outside"
                    endContent={
                        <h1 className="text-1xl text-default-400 pointer-events-none flex-shrink-0" >{wayOfSale}</h1>
                    }

                    isDisabled={wayOfSale === WayOfSale.asService} type='number' className='py-0' size='sm' value={cantidad.toString()} />
            </td>
            <td className="text-center w-1/4 p-3 rounded-r-xl">
                <Chip className='text-white border-green-700' variant='flat'
                    startContent={<MdAttachMoney size={20} className='text-green-700' />}
                >
                    {currencyFormat(precio * cantidad)}
                </Chip>
            </td>
            {/* <td className="text-center w-1/4 p-3 rounded-r-xl">

                <button className='text-red-700 flex justify-center w-full'>
                    <IoMdRemoveCircleOutline size={25} />
                </button>
            </td> */}
        </tr>
    )
}
