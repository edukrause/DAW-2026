import type { Category } from "../../data/categories";

type NavBarProps = {
    categories: Category[];
    activeCategory: string;
    onSelectCategory: (alias: string) => void;
};

export function NavBar({ categories, activeCategory, onSelectCategory }: NavBarProps) {

    return (
        <nav>
            <ul className="container">
                {categories.map((category) => (
                    <li key={category.alias}>
                        <button
                            type="button"
                            className={activeCategory === category.alias ? "active" : undefined}
                            aria-pressed={activeCategory === category.alias}
                            onClick={() => onSelectCategory(category.alias)}
                        >
                            {category.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
