const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const formatPrice = (value: number) => currencyFormatter.format(value)

export const calculateSubtotal = (price: number, quantity: number) =>
  Math.round(price * 100) * quantity / 100
