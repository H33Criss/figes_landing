import React from 'react'
import { ProductPresentationData, ProductPresentationItem } from './ProductPresentationItem'
import { IoPeopleOutline } from 'react-icons/io5';
import { GrTest } from "react-icons/gr";
import { GiBlackBook } from "react-icons/gi";


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
            <div className="w-full rounded-b-xl flex-col md:flex-row bg-blue-800 shadow-md  py-10 px-5 md:px-20 flex justify-between items-center">
                <p className=" textWhite"> <span className="text-4xl font-medium">¿Mas productos?</span> <br /> <span className="textLg">¡Aun tenemos una gran variedad! </span></p>
                <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bgWhite duration-150  bg-yellow-400">Ver mas productos </button>
            </div>

        </div>
    )
}
