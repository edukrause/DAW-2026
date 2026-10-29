import type { RefObject } from 'react'
import type { Product } from '../dtos/products'
import { formatPrice } from '../../../utils/price'

type ProductConfirmationProps = {
  confirmationRef: RefObject<HTMLDialogElement | null>
  pendingProduct: Product | null
  resetPendingProduct: () => void
  cancelAdd: () => void
  confirmAdd: () => void
}

export function ProductConfirmation({
  confirmationRef,
  pendingProduct,
  resetPendingProduct,
  cancelAdd,
  confirmAdd,
}: ProductConfirmationProps) {
  return (
    <dialog
      ref={confirmationRef}
      className="confirm-modal"
      aria-labelledby="confirm-add-title"
      aria-describedby="confirm-add-description"
      onClose={resetPendingProduct}
    >
      <h2 id="confirm-add-title">Adicionar ao carrinho?</h2>
      {pendingProduct && (
        <>
          <img className="confirm-product-image" src={pendingProduct.image} alt={pendingProduct.name} />
          <p id="confirm-add-description">Deseja adicionar uma unidade de <strong>{pendingProduct.name}</strong> ao seu pedido?</p>
          <p className="confirm-price">{formatPrice(pendingProduct.price)}</p>
        </>
      )}
      <div className="confirm-actions">
        <button type="button" autoFocus onClick={cancelAdd}>Cancelar</button>
        <button type="button" className="confirm-add" onClick={confirmAdd}>Sim, adicionar</button>
      </div>
    </dialog>
  )
}
