import { useRef, useState } from 'react'
import { Header } from './components/layout/header'
import { NavBar } from './components/layout/navBar'
import { Footer } from './components/layout/footer'
import { categories } from './data/categories'
import { products } from './data/products'

const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function App() {
  const confirmationRef = useRef<HTMLDialogElement>(null);
  const [pendingProduct, setPendingProduct] = useState<(typeof products)[number] | null>(null);

  function requestAdd(product: (typeof products)[number]) {
    setPendingProduct(product);
    confirmationRef.current?.showModal();
  }

  const [cart, setCart] = useState<Record<string, number>>({});
  const cartItems = products
    .filter((product) => (cart[product.id] ?? 0) > 0)
    .map((product) => ({ ...product, quantity: cart[product.id] }));
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + Math.round(item.price * 100) * item.quantity, 0) / 100;

  function changeQuantity(id: string, amount: number) {
    setCart((current) => {
      const next = { ...current };
      const quantity = (next[id] ?? 0) + amount;
      if (quantity > 0) next[id] = quantity;
      else delete next[id];
      return next;
    });
  }

  const [activeCategory, setActiveCategory] = useState("todos");
  const selectedCategory = categories.find((category) => category.alias === activeCategory);
  const visibleProducts = products.filter((product) =>
    activeCategory === "todos" || product.category === activeCategory
  );

  return (
    <>
      <Header itemCount={itemCount} />

      <NavBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{selectedCategory?.label}</span>: {visibleProducts.length} itens</p>
          </header>

          {visibleProducts.map((product) => (
            <article key={product.id}>
              <figure>
                <img src={product.image} alt={product.alt} />
                <figcaption>{categories.find((category) => category.alias === product.category)?.label}</figcaption>
              </figure>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
              <button type="button" onClick={() => requestAdd(product)}>Adicionar</button>
            </article>
          ))}
        </section>

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
                    <img src={item.image} alt={item.alt} />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{formatPrice(item.price)} cada</p>
                      <div className="cart-quantity">
                        <button type="button" aria-label={`Diminuir quantidade de ${item.name}`} onClick={() => changeQuantity(item.id, -1)}>−</button>
                        <span aria-label="Quantidade">{item.quantity}</span>
                        <button type="button" aria-label={`Aumentar quantidade de ${item.name}`} onClick={() => requestAdd(item)}>+</button>
                      </div>
                      <button className="cart-remove" type="button" onClick={() => setCart((current) => {
                        const next = { ...current };
                        delete next[item.id];
                        return next;
                      })}>Remover {item.name}</button>
                    </div>
                    <strong>{formatPrice(Math.round(item.price * 100) * item.quantity / 100)}</strong>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p><span>Total</span><strong>{formatPrice(total)}</strong></p>
                <button type="button" onClick={() => setCart({})}>Esvaziar carrinho</button>
              </div>
            </>
          )}
        </aside>
      </main>

      <dialog
        ref={confirmationRef}
        className="confirm-modal"
        aria-labelledby="confirm-add-title"
        aria-describedby="confirm-add-description"
        onClose={() => setPendingProduct(null)}
      >
        <h2 id="confirm-add-title">Adicionar ao carrinho?</h2>
        {pendingProduct && (
          <>
            <img className="confirm-product-image" src={pendingProduct.image} alt={pendingProduct.alt} />
            <p id="confirm-add-description">Deseja adicionar uma unidade de <strong>{pendingProduct.name}</strong> ao seu pedido?</p>
            <p className="confirm-price">{formatPrice(pendingProduct.price)}</p>
          </>
        )}
        <div className="confirm-actions">
          <button type="button" autoFocus onClick={() => confirmationRef.current?.close()}>Cancelar</button>
          <button type="button" className="confirm-add" onClick={() => {
            if (!pendingProduct || !confirmationRef.current?.open) return;
            changeQuantity(pendingProduct.id, 1);
            confirmationRef.current.close();
          }}>Sim, adicionar</button>
        </div>
      </dialog>

      <Footer />
    </>
  )
}

export default App
