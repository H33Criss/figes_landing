import { Cotizacion } from "@/components";



export const metadata = {
    title: 'Cotizar Figes',
    description: 'Cotiza sobre nuestros productos, nos adaptaremos a ti y a tu negocio, Contactanos.',
};

export default function CotizacionPage() {
    return (
        <div className="min-h-screen">
            <Cotizacion />
        </div>
    );
}