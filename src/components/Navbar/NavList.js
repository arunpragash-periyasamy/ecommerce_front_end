import { Link } from "react-router-dom";
import { useCapitalizeFirstLetter, useRemoveSpaces } from "../../utils/customHooks";
const NavList = ({name, icon, status}) => {
         const active = (status)? "active" : "";
  return (
    <li className={"nav-item " + active} id={useRemoveSpaces(name)}>
        <Link className="nav-link" to={useRemoveSpaces(name).toLowerCase()}>
            {icon}
        {useCapitalizeFirstLetter(name)}
        </Link>
    </li>
  );
};

export default NavList;
