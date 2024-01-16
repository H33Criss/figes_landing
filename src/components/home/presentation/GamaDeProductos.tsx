import React from 'react'

export const GamaDeProductos = () => {
    return (
        <section className='container mx-auto md:px-6 mt-36 '>
            <div className="relative  pt-36 pb-32 flex content-center items-center justify-center">
                <div className="absolute rounded-md top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://www.crosspipe.cl/wp-content/uploads/2018/10/img-20180206-wa0021.jpg')",
                    }}

                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div>
                                <h1 className="text-white font-semibold text-5xl">
                                    Nuestra gama de Productos
                                </h1>
                                <p className="mt-4 text-lg text-blueGray-200">
                                    This is a simple example of a Landing Page you can build using
                                    Notus JS. It features multiple CSS components based on the
                                    Tailwind CSS design system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <section className="pb-10 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">

                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white  p-3 text-center inline-flex items-center justify-center ">
                                        <img src='/imgs/piezas.jpg' className='h-36  w-36 object-cover  rounded-full ' />
                                    </div>
                                    <h6 className="text-xl font-semibold">Componentes Piezas</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Divide details about your product or agency work into parts.
                                        A paragraph describing a feature will be enough.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center mb-5 ">
                                        <img src='/imgs/img_tuberias-pvc.jpg' className='h-36  w-36 object-cover rounded-full' />
                                    </div>
                                    <h6 className="text-xl font-semibold">Tuberias y Segmentos</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Keep you user engaged by providing meaningful information.
                                        Remember that by this time, the user is curious.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center  mb-5 ">
                                        <img src='/imgs/acuicultura.jpg' className='h-36  w-36 object-cover rounded-full' />
                                    </div>
                                    <h6 className="text-xl font-semibold">Acuicultura</h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        Write a few lines about each one. A paragraph describing a
                                        feature will be enough. Keep you user engaged!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}
