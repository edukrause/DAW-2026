import type { Product } from '../dtos/products'
import { getCategoryLabel } from '../service/product-service'
import { formatPrice } from '../../../utils/price'

type ProductCardsProps = {
  products: Product[]
  onAdd: (product: Product) => void
}

export function ProductCards({ products, onAdd }: ProductCardsProps) {
  return (
    <>
      {products.map((product) => {
        const { id, category, image, name, description, price } = product
        const categoryLabel = getCategoryLabel(category)

        return (
          <article key={id}>
            <figure>
              <img src={image} alt={name} />
              <figcaption>{categoryLabel}</figcaption>
            </figure>
            <p>ID: {id}</p>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>{formatPrice(price)}</strong></p>
            <button type="button" onClick={() => onAdd(product)}>Adicionar</button>
          </article>
        )
      })}
    </>
  )
}
