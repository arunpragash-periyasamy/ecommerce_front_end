import { Link } from "react-router-dom";
const NavList = ({name, icon, status}) => {
    function removeSpaces(str) {
        return str.replace(/\s/g, '');
      }      
  return (
    <li className={"nav-item " + status} id={removeSpaces(name)}>
        <Link className="nav-link" to={removeSpaces(name)}>
            {icon}
        {name}
        </Link>
    </li>
  );
};

export default NavList;
