import { Header } from './components/layout/header'
import { NavBar } from './components/layout/nav-bar'
import { Footer } from './components/layout/footer'
import { categories } from './data/categories'
import { ProductCards } from './cases/products/componentes/product-cards'
import { ProductCart } from './cases/products/componentes/product-cart'
import { ProductConfirmation } from './cases/products/componentes/product-confirmation'
import { useProduct } from './cases/products/hooks/use-product'

function App() {
  const {
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
  } = useProduct();

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
            <p>Categoria <span id="selected-category">{selectedCategoryLabel}</span>: {visibleProducts.length} itens</p>
          </header>

          <ProductCards products={visibleProducts} onAdd={requestAdd} />
        </section>

        <ProductCart
          cartItems={cartItems}
          itemCount={itemCount}
          total={total}
          changeQuantity={changeQuantity}
          requestAdd={requestAdd}
          removeProduct={removeProduct}
          clearCart={clearCart}
        />
      </main>

      <ProductConfirmation
        confirmationRef={confirmationRef}
        pendingProduct={pendingProduct}
        resetPendingProduct={resetPendingProduct}
        cancelAdd={cancelAdd}
        confirmAdd={confirmAdd}
      />

      <Footer />
    </>
  )
}

export default App
