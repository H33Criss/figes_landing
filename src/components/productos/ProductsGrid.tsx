import React from 'react'
import { ProductGridData, ProductGridItem } from './ProductGridItem'

const productsGridItems: ProductGridData[] = [
    { image: 'https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/DgFfGcm/paul-weaver-n-Wid-MEQsn-AQ-unsplash-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/K6PL38P/pexels-pixabay-276566-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/zP9sWqP/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/SPyYgjw/pexels-martin-p-chy-1866149-removebg-preview-1.png' },
    { image: 'https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png' },
];

export const ProductsGrid = () => {
    return (
        <div className="mx-auto container px-6 xl:px-0 py-12">

            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden sm:block w-full h-96 object-cover" src="/productos/cobre-tuberias-canerias-1.jpg" alt="sofa" />
                        <img className="sm:hidden w-full h-2/5" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                    {
                        productsGridItems.map((item, i) => (
                            <ProductGridItem key={`${i}-${item.image}`} {...item} />
                        ))
                    }
                </div>
                <div className="flex justify-end items-end mt-12">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>1</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>2</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 dark:text-white border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>3</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <svg className="dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
