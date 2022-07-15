import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CountryDetail } from "../components/Country/CountryDetail";
import { Button } from "../shared/Button";
import { Loading } from "../shared/Loading";
import { styled } from "../utils/breakpoints";

const Div = styled("div", {
  display: "flex",
  maxWidth: "1280px",
  maxHeight: "80%",
  marginInline: "auto",
  flexDirection: "column",
  gap: "2.75rem",
});

const ButtonStyled = styled(Button, {
  alignSelf: "start",
});

export default function CountryPage() {
  let navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }
  return (
    <Suspense fallback={<Loading />}>
      <Div>
        <ButtonStyled onClick={goToHome}>
          <FaArrowLeft />
          Back
        </ButtonStyled>
        <CountryDetail />
      </Div>
    </Suspense>
  );
}
