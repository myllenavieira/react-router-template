import {StyledHeader, StyledButton} from "../style";
import {goToHome, goToLogin, goToProfile} from "../routes/coordinator";
import {useNavigate} from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate,"bananinha")} >
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={()=> goToLogin(navigate)}>Login</StyledButton>
      </StyledHeader>
  );
}

export default Header;
