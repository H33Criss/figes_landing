import './CotizacionTable.css'
import { CotizacionItemData, CotizacionTableItem, WayOfSale } from './CotizacionTableItem'


// !Solo para pruebas, no usar en produccion!
const cotizacionItems: CotizacionItemData[] = [
    { image: '/productos/service.png', cantidad: 300, name: 'Instalacion', description: 'Prestacion de servicio', precio: 357990, wayOfSale: WayOfSale.asService, },
    { image: '/productos/12015491065.jpg', cantidad: 2, name: 'Tubo Estandar', description: 'PVC', precio: 15000, wayOfSale: WayOfSale.byLength, },
    { image: '/productos/CODO-PVC-CEMENTAR.jpg', cantidad: 1, name: 'Codo Tuberia', description: 'Componente de union', precio: 12000, wayOfSale: WayOfSale.byUnits, },
    { image: '/productos/tubo-cobre-lwc-300x300.png', cantidad: 5, name: 'Rollo De Cobre', description: '11 metros por rollo', precio: 98990, wayOfSale: WayOfSale.byRoll, },
    { image: '/productos/tubo-flexible-con-pvc-gris-25mm-liviano-rollo-50mts.jpg', cantidad: 5, name: 'Mangera plastica', description: 'Mangera adaptable y flexible', precio: 98990, wayOfSale: WayOfSale.byLength, },
]


export const CotizacionTable = () => {
    return (
        <div className="container mx-auto flex flex-col items-center">
            <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                    <tr>
                        <th className="w-1/12 p-3 text-left rounded-l-xl"></th>
                        <th className="w-2/4 p-3 text-left">Nombre</th>
                        <th className="w-1/4 p-3 text-center">Precio Unitario</th>
                        <th className="w-3/6 p-3 text-center">Cantidad</th>
                        <th className="w-1/4 p-3 text-center rounded-r-xl">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cotizacionItems.map(item => (
                            <CotizacionTableItem {...item} />
                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}
