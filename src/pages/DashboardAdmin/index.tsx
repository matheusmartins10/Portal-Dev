/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import { FiPower, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  SectionCard,
  Table,
  Content,
  AddUser,
} from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Users {
  id: string;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const { signOutAdmin, admin } = useAuth();

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/admin/users');
      setUsers(response.data);
    };

    fetchData();
  }, []);

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
          <button type="button" onClick={signOutAdmin}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <AddUser>
        <Link to="/signup">
          {' '}
          <FiPlus /> Adicionar usuário
        </Link>
        <Link to="/new/admin">
          {' '}
          <FiPlus /> Adicionar admin
        </Link>
      </AddUser>
      <Content>
        <Table>
          <span>Nome</span>
          <span>E-mail</span>
        </Table>
        {users.map((user) => (
          <SectionCard key={user.id}>
            <span> {user.name} </span>
            <strong> {user.email} </strong>
          </SectionCard>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
