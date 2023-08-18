import * as S from "./styles";
export interface ICard {
  modelo: string
  mt: string
  pt: string
}
export const Card = ({ modelo, mt, pt }: ICard) => {
  return (
    <S.Aside>
      <h3><strong>Modelo: </strong> {modelo}</h3>
      <h4>Motor e Tração: {mt}</h4>
      <h4>Potência e Torque: {pt}</h4>
    </S.Aside>
  );
};
