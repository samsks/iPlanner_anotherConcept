import React, { useContext } from "react";
import { StyledUserCard } from "./style";
import { Text } from "../../../styles/typography";
import { AuthContext } from "../../../contexts/AuthContext";
const UserCard = () => {
  const { userData } = useContext(AuthContext);

  return (
    <StyledUserCard>
      <img src={userData.profileImg} alt="user image" />

      <Text className="textUser" tag="p">
        {userData.name}
      </Text>
    </StyledUserCard>
  );
};

export default UserCard;
