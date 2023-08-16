import * as S from "./styles";
export interface ICard {
  modelo: string
  mt: string
  pt: string
}
export const Card = ({ modelo, mt, pt }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Modelo: </strong> {modelo}
      </h3>
      <h4>Motor e Tração: {mt}</h4>
      <p>Potência e Torque: {pt}</p>
    </S.Aside>
  );
};
