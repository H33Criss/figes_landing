'use client';

import { CirclesRight } from './circles/CirclesRight'
import { CirclesLeftBottom } from './circles/CirclesLeftBottom'
import { FormContact } from './FormContact';
import { ContactSuccessModal } from './modals/ContactSuccessModal';
import { ContactErrorModal } from './modals/ContactErrorModal';

export const Contact = () => {
    return (

        <section className="pt-20 px-5 md:px-48 lg:py-[120px] overflow-hidden relative z-10">
            <div className="container">
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                            <span className="block mb-4 text-base text-primary font-semibold">
                                ¡Contactanos!
                            </span>
                            <h2
                                className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                            >
                                Ponte en contacto con nosotros
                            </h2>
                            <p className="text-base text-body-color leading-relaxed mb-9">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                adiqua minim veniam quis nostrud exercitation ullamco
                            </p>

                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                        <div className="bg-gray-900 relative rounded-lg p-8 sm:p-12 shadow-lg">
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
