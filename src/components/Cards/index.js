import React from "react";
import { CardContainer, Avatar, CardInfo, RepoName } from "./styles";

const Card = ({ item }) => {
  return (
    <CardContainer onClick={() => window.open(item.html_url, "_blank")}>
      <Avatar alt="avatar" src={item.owner.avatar_url} />
      <CardInfo>
        <RepoName>{item.name}</RepoName>
        <p>{item.description}</p>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
