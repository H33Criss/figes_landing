import { ProductsGrid } from "@/components";


export const metadata = {
    title: 'Productos Figes',
    description: 'Productos que ofrece la empresa Figes SPA, los cuales estan especializados en la acuicultura.',
};

export default function ProductosPage() {
    return (
        <>
            <ProductsGrid />
        </>
    );
}