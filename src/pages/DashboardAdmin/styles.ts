import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 425px) {
    > img {
      display: none;
    }

    button {
      margin-left: auto;
      margin-right: 30px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: red;
      text-transform: capitalize;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
`;

export const SectionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 460px;
  background: #28262e;
  padding: 30px;
  margin: 10px 0;
  border-radius: 10px;

  a {
    font-size: 18px;
    color: #f2f2f2;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0 5px;
  }

  a:hover {
    color: ${shade(0.2, '#F2F2F2')};
  }

  @media (max-width: 425px) {
    max-width: 260px;
    margin: 30px 0;
  }
`;

export const AddUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1120px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #f2f2f2;
    margin: 20px 10px;
  }
`;
