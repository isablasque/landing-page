import Style from "./menu.module.css"

function Menu( props )
{
    return (
        <section className={Style.menu}>
            <ul>
                <li>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </li>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Produtos</a>
                </li>
                <li>
                    <a href="index.html">Sustentabilidade</a>
                </li>
                <li>
                    <a href="index.html">30% OFF</a>
                </li>
                <li>
                    <i class="fa-regular fa-user"></i>
                </li>
            </ul>
        </section>
    )
}
export default Menu;