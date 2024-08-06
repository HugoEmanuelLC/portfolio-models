export default function Header({openAndCloseNavBar}) {
    return (
        <header>
            <div className="container">
                <h1><span>Braine-l'alleud</span> WAWMOMO <span>brabant-wallon</span></h1>
                <div className="burger" onClick={openAndCloseNavBar}>
                    <i className='bx bx-menu'></i>
                </div>
            </div>
        </header>
    )
}