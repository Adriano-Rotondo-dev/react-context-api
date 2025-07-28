import { NavLink } from "react-router-dom";

const navLinks = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/about-us", text: "About Us" },
  { id: 3, to: "/products", text: "Products" },
];

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h1 className="fw-bold display-3">Foxy Store</h1>
          </NavLink>
          <ul className="navbar-nav me mt-2 mt-lg-0">
            {/* RENDO DINAMICA LA NAVBAR  */}
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={link.to}
                    aria-current="page"
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
