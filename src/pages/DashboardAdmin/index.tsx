/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiPower, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Header, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOutAdmin, admin } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <div>
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong> {admin.name} </strong>
              </Link>
            </div>
          </Profile>

          <Link to="/signup">Criar conta para usuário</Link>

          <button type="button" onClick={signOutAdmin}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
