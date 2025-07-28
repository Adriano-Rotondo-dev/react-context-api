export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg start py-4 my-5">
      <div className="container">
        <div className="row row-cols-md-3">
          <div className="col">
            <h3>Company</h3>
            <ul className="list-unstyled">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          <div className="col">
            <h3>Socials</h3>
            <ul className="list-unstyled d-flex flex-row align-items-center justify-content-center gap-3">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Affiliate Shops</h3>
            <ul className="list-unstyled">
              <li>CatPen 😸</li>
              <li>FrostWolf 🐺 </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
