import {ImageSourcePropType} from "react-native"
export interface CardSocialProps {
  children: JSX.Element
}
export interface CardProps {
  data: {
    id: number,
    nome: string,
    data: Date,
    titulo: string,
    imagem: ImageSourcePropType,
    comentario: string
    }
  }
