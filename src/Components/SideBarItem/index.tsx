import { Link } from "react-router-dom";
import * as C from "./styles";
import { CgProfile } from "react-icons/cg";
import { FaHospitalAlt } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

const SidebarItem = ({ title, description, icon, path, active }: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && <CgProfile />}
          {icon === "hospital" && <FaHospitalAlt />}
          {icon === "book" && <VscBook />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};

export default SidebarItem;
