import Image from 'next/image';
import React from 'react'

export const LandingPage = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20 ">
            <div className="container mx-auto md:mx-0 md:ml-40 flex flex-col md:flex-row items-center mt-12 md:mt-24">
                <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                    <h1 className="text-3xl md:text-5xl p-2 text-blue-700 tracking-loose">Figes Spa</h1>
                    <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
                    </h2>
                    <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                        register now to showcase your talent and win exciting prizes.</p>
                    <a href="#"
                        className="bg-transparent hover:bg-blue-600 hover:shadow-blue-700  text-blue-500 hover:text-black rounded shadow hover:shadow-md py-2 px-4 border border-blue-500 hover:border-transparent">
                        Conocénos</a>
                </div>
                <div className="hidden md:block p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                    <div className="h-full flex ">
                        <div className='animate-float-v2'>
                            <Image alt={''} width={500} height={500}
                                className="inline-block mt-28 radius-guitar xl:block"
                                src="https://www.arqhys.com/wp-content/uploads/2012/12/fontanieria.jpg" />

                        </div>
                        <div className='animate-float-v1 mx-3'>
                            <Image alt={''} width={600} height={600}
                                className="inline-block radius-pill mt-24 md:mt-0 p-8 md:p-0 mr-5"
                                src="https://generaldefundicion.com/wp-content/uploads/2020/07/principales-diferencias-entre-las-tuberias-de-pvc-y-las-de-metal.jpg" />

                        </div>
                        <div className='animate-float-v3'>
                            <Image alt={''} width={500} height={400}
                                className=" mt-28 rounded-full  lg:block "
                                src="https://titulos.descubrelafp.org/ARCHIVO/fotografias/titulaciones/1597149532_597149524-acuicola.jpg" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
