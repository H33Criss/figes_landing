'use client';

import { CirclesRight } from './circles/CirclesRight'
import { CirclesLeftBottom } from './circles/CirclesLeftBottom'
import { FormContact } from './FormContact';
import { ContactSuccessModal } from './modals/ContactSuccessModal';
import { ContactErrorModal } from './modals/ContactErrorModal';
import { FaPhone, FaEnvelope, FaMapMarker,FaArrowRight } from 'react-icons/fa';

export const Contact = () => {
    return (

        <section className="pt-20 px-5 md:px-48 lg:py-[120px] overflow-hidden relative z-10">
            <div className="container">
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="animate__animated animate__lightSpeedInLeft w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                            <span className="block mb-4 text-base text-primary font-semibold">
                                ¡Contáctanos!
                            </span>
                            <h2 className="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                Ponte en contacto con nosotros
                            </h2>
                            <h3 className="font-semibold text-xl">¿Has visto un producto que necesitas?</h3>
                            <h4 className="mb-10">📨 ¡Contáctanos! 🤳</h4>
                            <p className="text-base text-body-color leading-relaxed mb-6">
                                Trataremos de contactarte lo más rápido posible.
                            </p>
                            <div className="flex items-center mb-6">
                                <FaPhone className="text-primary mr-3" />
                                <span className="text-base">Teléfono de contacto: +123 456 789</span>
                            </div>
                            <div className="flex items-center mb-6">
                                <FaEnvelope className="text-primary mr-3" />
                                <span className="text-base">Correo electrónico: info@example.com</span>
                            </div>
                            <div className="flex items-center mb-9">
                                <FaMapMarker className="text-primary mr-3" />
                                <span className="text-base">Ubicación: Ciudad, País</span>
                            </div>
                            <div className="flex items-center mb-9">
                                <FaArrowRight className="text-primary mr-3" />
                                <span className="text-base">
                                    ¿Prefieres otra opción?{' '}
                                    <span className="text-link font-bold cursor-pointer">
                                        Contacta con nosotros a través del formulario.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                        <div className="animate__animated animate__fadeIn bg-gray-900 relative rounded-lg p-8 sm:p-12 shadow-lg">
                            <FormContact />
                            <ContactSuccessModal />
                            <ContactErrorModal />
                            <div>
                                <span className="absolute -top-10 -right-9 z-[-1]">
                                    <svg
                                        width="100"
                                        height="100"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                                <CirclesRight />
                                <CirclesLeftBottom />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
