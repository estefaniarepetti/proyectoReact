
export default function Navbar(){
    const navStyle ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none",
        color: "#1d95e6",
        
    }
    return(
        <header>
            <nav className="nav">
                <div className="logo">Mi Logo </div>
             <ul className="navListado" style={navStyle} >
             <li>  Home</li>
                <li> Shop </li>
                <li> Accesorios</li>
                <li> Contactanos</li>
             </ul>
            </nav>

        </header>


    );
}