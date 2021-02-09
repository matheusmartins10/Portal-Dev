/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiPower, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  SectionCard,
} from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <div>
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <SectionCard>
          <div>
            <h2> Sky </h2>
          </div>
          <div>
            <a
              href="http://sistemas.casablancaonline.cloudns.pro/crossmedia/sky/2018a/site/login.php"
              target="_blank"
            >
              {' '}
              acessar <FiArrowRight />{' '}
            </a>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> Totvs </h2>
          </div>
          <div>
            <a href="https://totvs.casablancaonline.com.br/" target="_blank">
              {' '}
              acessar <FiArrowRight />{' '}
            </a>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> CheckSum </h2>
          </div>
          <div>
            <a href="/">
              {' '}
              acessar <FiArrowRight />{' '}
            </a>
          </div>
        </SectionCard>
        <SectionCard>
          <div>
            <h2> Office </h2>
          </div>
          <div>
            <a href="https://www.office.com/" target="_blank">
              {' '}
              acessar <FiArrowRight />{' '}
            </a>
          </div>
        </SectionCard>
      </Content>
    </Container>
  );
};

export default Dashboard;
