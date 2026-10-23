export function NavBar() {
    return (
        <nav>
            <ul className="container">
                <li><button type="button" className="active">Todos</button></li>
                <li><button type="button">Lanches</button></li>
                <li><button type="button">Porções</button></li>
                <li><button type="button">Bebidas</button></li>
                <li><button type="button">Sobremesas</button></li>
            </ul>
        </nav>
    );
}
