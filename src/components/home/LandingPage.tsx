import React from 'react'
import { Presentation } from './presentation/Presentation';
import { Caracteristicas } from './presentation/caracteristicas/Caracteristicas';
import { GamaDeProductos } from './presentation/GamaDeProductos';
import { ProductsPresentation } from './presentation/products/ProductsPresentation';

export const LandingPage = () => {
    return (
        < >
            <Presentation />
            <Caracteristicas />
            <GamaDeProductos />
            <ProductsPresentation />
        </>
    );
}
