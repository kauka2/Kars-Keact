import * as S from "./styles"
import Logo from "../../assets/car.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Carros em Estoque</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}