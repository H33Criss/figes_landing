import Image from 'next/image'
import { IoArrowDownOutline } from 'react-icons/io5'
import { CgScrollV } from "react-icons/cg";
import Link from 'next/link';

export const Presentation = () => {
    return (
        <div className='min-h-screen'>
            <div className="h-3/4 grid grid-cols-1 md:grid-cols-12 bg-blacktext-white pt-5 sm:pt-20 md:pt-32">
                <div className="flex col-span-1	 md:col-start-2 md:col-end-6 ">
                    <div className="flex flex-col w-full justify-center items-start p-8 animate__animated animate__fadeInDown  ">
                        <h1 className="text-3xl md:text-5xl p-2 text-blue-700 tracking-loose">Figes Spa</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                            Piezas : Tuberias y Componentes
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">Nos especializamos en productos para la industria de la <strong className='mx-1'>acuicultura</strong>, !Explora nuestra ofertas!</p>
                        <Link href="/productos"
                            className="bg-transparent hover:bg-blue-600 hover:shadow-blue-700  text-blue-500 hover:text-black rounded shadow hover:shadow-md py-2 px-4 border border-blue-500 hover:border-transparent">
                            Nuestros productos
                        </Link>
                    </div>
                </div>
                <div className="flex px-16 md:px-0 flex-col md:flex-row col-span-1	 md:col-start-6 md:col-end-12 items-center justify-center">
                    <div className='animate-float-v2 mt-10'>
                        <Image alt={''} width={500} height={500}
                            className="inline-block radius-guitar xl:block"
                            src="https://www.arqhys.com/wp-content/uploads/2012/12/fontanieria.jpg" />
                    </div>
                    <div className='animate-float-v1 mb-0 md:mb-16 mx-3 mt-10'>
                        <Image alt={''} width={600} height={600}
                            className="inline-block radius-pill"
                            src="https://generaldefundicion.com/wp-content/uploads/2020/07/principales-diferencias-entre-las-tuberias-de-pvc-y-las-de-metal.jpg" />

                    </div>
                    <div className='animate-float-v3  mt-10'>
                        <Image alt={''} width={500} height={400}
                            className="rounded-full  lg:block "
                            src="https://titulos.descubrelafp.org/ARCHIVO/fotografias/titulaciones/1597149532_597149524-acuicola.jpg" />
                    </div>
                </div>
            </div>
            <div className='h-full mt-20 mb-32 md:mb-0'>
                <div className='flex  justify-center items-center animate-float-fast'>
                    <CgScrollV size={40} className='text-white' />
                    <span className='text-white'>Scroll Abajo</span>
                    <IoArrowDownOutline size={30} className='text-white' />
                </div>
            </div>
            
        </div>
    )
}
