import * as S from "./styles"
import Face from "../../assets/face.svg"
import Insta from "../../assets/insta.svg"
import Linkedin from "../../assets/linkedin.svg"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img src={Linkedin} alt="Linkedin" />
      </a>
    </S.Footer>
  )
}