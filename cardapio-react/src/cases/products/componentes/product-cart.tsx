import type { Product } from '../dtos/products'
import { formatPrice } from '../../../utils/price'

type CartItem = Product & {
  quantity: number
  subtotal: number
}

type ProductCartProps = {
  cartItems: CartItem[]
  itemCount: number
  total: number
  changeQuantity: (id: Product['id'], amount: number) => void
  requestAdd: (product: Product) => void
  removeProduct: (id: Product['id']) => void
  clearCart: () => void
}

export function ProductCart({
  cartItems,
  itemCount,
  total,
  changeQuantity,
  requestAdd,
  removeProduct,
  clearCart,
}: ProductCartProps) {
  return (
    <aside id="cart">
      <h2>Seu pedido</h2>

      <p className="cart-status" role="status">{itemCount} {itemCount === 1 ? 'item no carrinho' : 'itens no carrinho'}</p>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <img src="/assets/img/cart.svg" alt="Carrinho vazio" />
          <p>Seu carrinho está vazio</p>
          <p>Escolha um item do cardápio para começar</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)} cada</p>
                  <div className="cart-quantity">
                    <button type="button" aria-label={`Diminuir quantidade de ${item.name}`} onClick={() => changeQuantity(item.id, -1)}>−</button>
                    <span aria-label="Quantidade">{item.quantity}</span>
                    <button type="button" aria-label={`Aumentar quantidade de ${item.name}`} onClick={() => requestAdd(item)}>+</button>
                  </div>
                  <button className="cart-remove" type="button" onClick={() => removeProduct(item.id)}>Remover {item.name}</button>
                </div>
                <strong>{formatPrice(item.subtotal)}</strong>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p><span>Total</span><strong>{formatPrice(total)}</strong></p>
            <button type="button" onClick={clearCart}>Esvaziar carrinho</button>
          </div>
        </>
      )}
    </aside>
  )
}
