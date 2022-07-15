import { styled } from "../utils/breakpoints";

const LoadingContainer = styled("div", {
  position: "fixed",
  inset: "0",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#EFEFEF77",
});
const LoadingDiv = styled("div", {
  width: "2rem",
  height: "2rem",
  margin: "2rem",
  borderRadius: "50%",
  border: "0.3rem solid #d7d7d7",
  borderTopColor: "#979fd0",
  animation: "1.5s spin infinite linear",
});

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingDiv></LoadingDiv>
    </LoadingContainer>
  );
};
