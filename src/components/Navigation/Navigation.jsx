import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <a href="#" className="navigation__link active">
            All Entries <span>3</span>
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Favorites <span>1</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
