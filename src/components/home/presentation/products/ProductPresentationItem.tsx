import React from 'react'

export interface ProductPresentationData {
    icon?: React.ReactNode,
    title: string,
    description: string,
    image?: string,
    color: string,
}


export const ProductPresentationItem = ({ icon, title, description, image, color }: ProductPresentationData) => {
    return (
        <div
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r border-gray-950 md:lg:xl:border-b hover:bg-gray-800 cursor-pointer">
            <span className={`p-5 rounded-full ${color} text-white  `}>
                {
                    image
                        ? <img src={image} className='rounded-full h-20 w-20' />
                        :
                        icon
                            ? icon
                            //Icono por defecto 
                            : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )
                }

            </span>
            <p className="text-xl font-medium text-gray-100 mt-3">{title}</p>
            <p className="mt-2 text-sm text-gray-300">
                {description}
            </p>
        </div>
    )
}
