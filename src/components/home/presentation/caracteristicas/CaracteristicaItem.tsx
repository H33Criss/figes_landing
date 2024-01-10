import React from 'react'

export interface CaracteristicaData {
    title: string,
    description: string,
    image: string,
}
export const CaracteristicaItem = ({ description, image, title }: CaracteristicaData) => {
    return (
        <div className="relative group  bg-gray-900 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
            <div className="relative p-8 h-full space-y-8 rounded-lg transition duration-300 group-hover:bg-blue-950  ">
                <img src={image} className="w-20 h-20" alt="burger illustration" />

                <div className="space-y-2">
                    <h5 className="text-xl text-gray-300 font-medium transition group-hover:text-blue-700">{title}</h5>
                    <p className="text-sm text-gray-300">{description}</p>
                </div>
                {/* <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                </a> */}
            </div>
        </div>
    )
}
