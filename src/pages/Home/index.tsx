import * as S from './styles'
import Ford from "../../assets/ford-mustang-foxbody.png"
import Renault from "../../assets/Renault-turbo-3.png"

export function Home() {
  return (
    <S.Section>
      <img src={Ford} alt="Ford na esquerda" />
      <img src={Renault} alt="Renault na direita" />
    </S.Section>
  )
}
