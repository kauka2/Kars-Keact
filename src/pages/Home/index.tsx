import * as S from './styles'
import Ford from "../../assets/ford-mustang-foxbody.png"
import Renault from "../../assets/renault-5-turbo-2-.png"
import { ComponentCard } from '../../components'

export function Home() {
  const capa = [{
    id: 1,
    modelo: "Ford Mustang FoxBody",
    mt: "V8 5.0 - Traseira",
    pt: "228 CV - 41 KGFM"
  },
  {
    id: 2,
    modelo: "Renault 5 Turbo 2",
    mt: "4I 1.4 - Traseira",
    pt: "160 CV - 22 KGFM"
  }]
  return (
  <>
    <S.Section>
      <img src={Ford} alt="Ford na esquerda" />
      <img src={Renault} alt="Renault na direita" />
    </S.Section>
    <S.karro>
    {capa.map(item => (
        <ComponentCard
          key={item.id}
          modelo={item.modelo}
          pt={item.pt}
          mt={item.mt}
        />
      ))}
    </S.karro>
    </>
    )
}
