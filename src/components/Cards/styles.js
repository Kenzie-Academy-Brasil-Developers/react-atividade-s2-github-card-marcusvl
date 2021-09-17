import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin: 50px;
  background-color: #ececec;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px 0px 0px 10px;
`;

export const CardInfo = styled.div`
  margin-left: 20px;
`;

export const RepoName = styled.h3`
  text-align: start;
`;
