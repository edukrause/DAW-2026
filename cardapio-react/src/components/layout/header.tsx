type HeaderProps = {
    itemCount: number;
};

export function Header({ itemCount }: HeaderProps) {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src="/assets/img/logo_lanchonete.svg" alt="Logo" />
                    <div>
                        <h1>Cardápio Digital</h1>
                        <p>Faça o seu pedido pelo nosso cardápio digital</p>
                    </div>
                </div>
                <a className="cart-button" href="#cart" aria-label={`Ver carrinho: ${itemCount} itens`}>
                    <img src="/assets/img/cart.svg" alt="" />
                    {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
                </a>
            </div>
        </header>
    );
}