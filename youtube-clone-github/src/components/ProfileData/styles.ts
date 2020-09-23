import styled, { css } from "styled-components";
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from "react-icons/ri";

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300; /*Dá um efeito mais leve a fonte*/
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

//Se o elemento possui uma src ele tem que ser um img, e não uma div.
export const Avatar = styled.img`
  width: 16%; /* No celular fica melhor se estilizarmos com apenas 16% de largura*/
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: -34px;
  }
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /*Ele "Quebra" a linha dos followers em 2 quando o site fica em um dispositivo menor*/
  margin: 20px 0px;

  > li {
    display: flex;
    align-items: center;

    > b {
      font-weight: 500;
    }

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    /*Aplica para todos os elementos*/
    > * {
      margin-right: 5px;
    }
  }
`;

/*css customizado para eu passar para todos os ícones*/
const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconsCSS}
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  /* A partir do primeiro li*/
  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;

    /* essas opções não deixa o texto "sair para fora" na parte responsiva do site*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconsCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconsCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconsCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconsCSS}
`;
