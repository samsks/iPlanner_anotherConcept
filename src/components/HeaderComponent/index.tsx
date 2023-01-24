import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import DateComponent from "./DateComponent";
import StyledHeader from "./style";
import UserCard from "./UserCardComponent";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { isVisibleAside, setIsvisibleAside } = useContext(TasksContext);
  return (
    <StyledHeader>
      <button className={`asideButton ${isVisibleAside && "isNotVisible"}`} onClick={() => setIsvisibleAside(true)}>
        {" "}
        <GiHamburgerMenu />
      </button>
      <DateComponent />
      <UserCard />
    </StyledHeader>
  );
};

export default Header;
