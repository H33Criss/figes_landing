import Image from 'next/image';
import React from 'react'

export const LandingPage = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center mt-12 md:mt-24">
                <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                    <h1 className="text-3xl md:text-5xl p-2 text-blue-500 tracking-loose">Figes Spa</h1>
                    <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
                    </h2>
                    <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                        register now to showcase your talent and win exciting prizes.</p>
                    <a href="#"
                        className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-500 hover:border-transparent">
                        Conocénos</a>
                </div>
                <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                    <div className="h-full flex flex-wrap content-center">
                        <div>
                            <Image alt={''} width={200} height={400}
                                className="inline-block mt-28  xl:block"
                                src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" />

                        </div>
                        <div>
                            <Image alt={''} width={400} height={600}
                                className="inline-block radius-pill mt-24 md:mt-0 p-8 md:p-0 mr-5"
                                src="https://www.todoagua.es/wp-content/uploads/2022/04/tipos-de-tuberias-agua.jpg" />

                        </div>
                        <div >
                            <Image alt={''} width={200} height={400}
                                className=" mt-28 rounded-xl  lg:block "
                                src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
