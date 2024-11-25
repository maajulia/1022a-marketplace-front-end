import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <>
            <header className="site-header">
                <nav className="navigation">
                    <ul>
                        <li><a href="#novidades">Novidades</a></li>
                        <li><a href="#feminino">Feminino</a></li>
                        <li><a href="#masculino">Masculino</a></li>
                        <li><a href="#kids">Kids</a></li>
                    </ul>
                </nav>

                <Link to={"/cadastro-produtos"} className="button">Cadastro Look</Link>

            </header>
        </>
    )
}