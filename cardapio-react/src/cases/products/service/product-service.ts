import { products } from '../data/products'
import { categories } from '../../../data/categories'

export function getProducts(category = 'todos') {
  return products.filter((product) => category === 'todos' || product.category === category)
}

export function getCategoryLabel(alias: string) {
  return categories.find((category) => category.alias === alias)?.label ?? alias
}
