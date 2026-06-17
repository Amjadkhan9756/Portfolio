import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="name"><h2>Amjad</h2></div>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>
                    <li>
                        <a href="/Skill">Skill</a>
                    </li>
                    <li>
                        <a href="/Project">Project</a>
                    </li>
                    <li>
                        <a href="/Experience">Experience</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;