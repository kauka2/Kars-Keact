import * as S from "./styles";
export interface ICard {
  modelo: string
  mt: string
  mensagem: string
}
export const Card = ({ modelo, mt, mensagem }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Modelo: </strong> {modelo}
      </h3>
      <h4>Motor e Tração: {mt}</h4>
      <p>Mensagem: {mensagem}</p>
    </S.Aside>
  );
};
