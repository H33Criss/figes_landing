import React from 'react'
import { ProductPresentationData, ProductPresentationItem } from './ProductPresentationItem'
import { IoPeopleOutline } from 'react-icons/io5';
import { GrTest } from "react-icons/gr";
import { GiBlackBook } from "react-icons/gi";
import Link from 'next/link';


const productsPresentationItems: ProductPresentationData[] = [
    {
        title: 'Equipo experimentado',
        description: 'Team BrainEdge education is a bunch of highly focused, energeticset of people.',
        icon: (<IoPeopleOutline size={35} />),
        color: 'bg-red-500'
    },
    {
        title: 'Mejores Tests',
        description: 'Team BrainEdge education is a bunch of highly focused, energeticset of people.',
        icon: (<GrTest size={35} />),
        color: 'bg-green-400'
    },
    {
        title: 'Procesos Innovadores',
        description: 'Team BrainEdge education is a bunch of highly focused, energeticset of people.',
        icon: (<GiBlackBook size={35} />),
        color: 'bg-blue-800'
    },
];


export const ProductsPresentation = () => {
    return (
        <div className="container mx-auto md:px-6 py-20 bg-opacity-10 ">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-gray-900 shadow-xl rounded-t-xl">
                {
                    productsPresentationItems.map(item => (
                        <ProductPresentationItem {...item} />
                    ))
                }
            </div>
            <div className="w-full rounded-b-xl flex-col md:flex-row bg-blue-900 shadow-md  py-10 px-5 md:px-20 flex justify-between items-center">
                <p className=" textWhite"> <span className="text-4xl font-medium">¿Mas productos?</span> <br /> <span className="textLg">¡Aun tenemos una gran cartelera! </span></p>
                <Link href={'/productos'} className="px-5 py-3 hover:cursor-pointer hover:scale-105 hover:bg-blue-700 hover:shadow-sm   font-medium text-white shadow-xl  hover:bgWhite duration-150  bg-gray-800 rounded-lg">
                    Ver mas productos
                </Link>
            </div>

        </div>
    )
}
