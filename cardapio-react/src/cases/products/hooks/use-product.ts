import { useRef, useState } from 'react'
import type { Product } from '../dtos/products'
import { getCategoryLabel, getProducts } from '../service/product-service'
import { calculateSubtotal } from '../../../utils/price'

export function useProduct() {
  const products = getProducts();
  const confirmationRef = useRef<HTMLDialogElement>(null);
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);

  function requestAdd(product: Product) {
    setPendingProduct(product);
    confirmationRef.current?.showModal();
  }

  const [cart, setCart] = useState<Partial<Record<Product['id'], number>>>({});
  const cartItems = products
    .filter((product) => (cart[product.id] ?? 0) > 0)
    .map((product) => ({
      ...product,
      quantity: cart[product.id] ?? 0,
      subtotal: calculateSubtotal(product.price, cart[product.id] ?? 0),
    }));
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + Math.round(item.subtotal * 100), 0) / 100;

  function changeQuantity(id: Product['id'], amount: number) {
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[id] ?? 0) + amount;
      if (quantity > 0) next[id] = quantity;
      else delete next[id];
      return next;
    });
  }

  function removeProduct(id: Product['id']) {
    setCart((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  }

  function confirmAdd() {
    if (!pendingProduct || !confirmationRef.current?.open) return;
    changeQuantity(pendingProduct.id, 1);
    confirmationRef.current.close();
  }

  const [activeCategory, setActiveCategory] = useState("todos");
  const selectedCategoryLabel = getCategoryLabel(activeCategory);
  const visibleProducts = getProducts(activeCategory);


  function clearCart() {
    setCart({});
  }

  function cancelAdd() {
    confirmationRef.current?.close();
  }

  function resetPendingProduct() {
    setPendingProduct(null);
  }

  return {
    activeCategory,
    setActiveCategory,
    selectedCategoryLabel,
    visibleProducts,
    cartItems,
    itemCount,
    total,
    changeQuantity,
    removeProduct,
    clearCart,
    confirmationRef,
    pendingProduct,
    requestAdd,
    confirmAdd,
    cancelAdd,
    resetPendingProduct,
  };
}
