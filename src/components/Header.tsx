"use client"
const Header = () => {
    return (
        <header >
            <div className="h-20 flex justify-between px-8 items-center bg-yellow-50">
                <span className="font-bold text-2xl">COTTA</span>
                <ul className="flex gap-8 font-bold  text-2xl">
                    <li>Home</li>
                    <li>Propostas</li>
                    <li>Eventos</li>
                    <li>Contato</li>
                </ul>

            </div>

        </header>
    )
}

export default Header;
