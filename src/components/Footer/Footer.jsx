import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__copyright">
          &copy; Journal-App {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
