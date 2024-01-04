import React from 'react'
import { CaracteristicaData, CaracteristicaItem } from './CaracteristicaItem';

const caracteristicasItems: CaracteristicaData[] = [
    {
        image: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png',
        title: 'Adaptabilidad',
        description: 'Nuestros productos especializados serán adaptados para distintos clientes y distintas necesidades.',
    },
    {
        image: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png',
        title: 'Personalizacion',
        description: 'Personalizamos nuestra propuesta en funcion de tu negocio y necesidad.',
    },
    {
        image: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png',
        title: 'Personalizacion',
        description: 'Personalizamos nuestra propuesta en funcion de tu negocio y necesidad.',
    },
    {
        image: 'https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png',
        title: 'Personalizacion',
        description: 'Personalizamos nuestra propuesta en funcion de tu negocio y necesidad.',
    },
];


export const Caracteristicas = () => {
    return (
        <div className="pb-16  overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
                <div>
                    <span className="text-gray-300 text-lg font-semibold">Main features</span>
                    <h2 className="mt-4 text-2xl text-blue-600 font-bold md:text-4xl">A technology-first approach to payments <br className="lg:block" hidden /> and finance</h2>
                </div>
                <div className="mt-16 grid  divide-x divide-y divide-gray-950 rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        caracteristicasItems.map(item => (
                            <CaracteristicaItem {...item} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
