import { Header } from './components/layout/header'
import { NavBar } from './components/layout/navBar'
import { Footer } from './components/layout/footer'

function App() {

  return (
    <>
      <Header />

      <NavBar />

      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">Todos</span>: 10 itens</p>
          </header>

          <article>
            <figure>
              <img src="/assets/img/burguer.png" alt="Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer</h3>
            <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <p><strong>R$ 22,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/burguer-bacon.png" alt="Bacon Burger" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Bacon Burger</h3>
            <p>Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.</p>
            <p><strong>R$ 25,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/burguer-double.png" alt="Duplo Burguer" />
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Duplo Burguer</h3>
            <p>Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.</p>
            <p><strong>R$ 29,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/batata-rustica.png" alt="Batata Rústica" />
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Rústica</h3>
            <p>Porção de batata com alecrim, parmesao e maionese verde.</p>
            <p><strong>R$ 18,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/batata-tradicional.png" alt="Batata Tradicional" />
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Tradicional</h3>
            <p>Porção de batata e maionese verde.</p>
            <p><strong>R$ 15,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/agua.png" alt="Água Sem Gás" />
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Água Sem Gás</h3>
            <p>Garrafa descartável de água sem gás com 500 ml.</p>
            <p><strong>R$ 8,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/refri.png" alt="Refrigerante" />
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Refrigerante 300 ml</h3>
            <p>Copo de refrigerante de 300 ml.</p>
            <p><strong>R$ 10,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/chopp.png" alt="Chopp" />
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Chopp 300 ml</h3>
            <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
            <p><strong>R$ 15,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/petit-gateau.png" alt="Petit Gateau" />
              <figcaption>Sobremesa</figcaption>
            </figure>
            <h3>Petit Gateau</h3>
            <p>Petit Gateau com uma bola de sorvete de creme.</p>
            <p><strong>R$ 25,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="/assets/img/mousse-maracuja.png" alt="Mousse de Maracujá" />
              <figcaption>Sobremesa</figcaption>
            </figure>
            <h3>Mousse de Maracujá</h3>
            <p>Mousse de maracujá feito com a fruta de verdade.</p>
            <p><strong>R$ 18,00</strong></p>
            <button type="button">Adicionar</button>
          </article>
        </section>

        <aside>
          <h2>Seu pedido</h2>

          <div className="cart-empty">
            <img src="/assets/img/cart.svg" alt="Carrinho vazio" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar</p>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  )
}

export default App
