export const currencyFormat = (value: number) => {

    return new Intl.NumberFormat('en-ES', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 3
    }).format(value);
}