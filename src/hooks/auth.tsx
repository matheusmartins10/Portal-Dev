import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface Admin {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthStateAdmin {
  token: string;
  admin: Admin;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInCredentialsAdmin {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  admin: Admin;
  signIn(credentials: SignInCredentials): Promise<void>;
  signInAdmin(credentials: SignInCredentialsAdmin): Promise<void>;
  signOut(): void;
  signOutAdmin(): void;
  updateUser(user: User): void;
  updateAdmin(admin: Admin): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber: token');
    const user = localStorage.getItem('@Gobarber: user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Gobarber: token', token);
    localStorage.setItem('@Gobarber: user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Gobarber: token');
    localStorage.removeItem('@Gobarber: user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      });
      localStorage.setItem('@Gobarber: user', JSON.stringify(user));
    },
    [setData, data.token],
  );

  const [dataAdmin, setDataAdmin] = useState<AuthStateAdmin>(() => {
    const token = localStorage.getItem('@Portal: token');
    const admin = localStorage.getItem('@Portal: admin');

    if (token && admin) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, admin: JSON.parse(admin) };
    }

    return {} as AuthStateAdmin;
  });

  const signInAdmin = useCallback(async ({ email, password }) => {
    const response = await api.post('/signin', {
      email,
      password,
    });

    const { token, admin } = response.data;

    localStorage.setItem('@Portal: token', token);
    localStorage.setItem('@Portal: admin', JSON.stringify(admin));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setDataAdmin({ token, admin });
  }, []);

  const signOutAdmin = useCallback(() => {
    localStorage.removeItem('@Portal: token');
    localStorage.removeItem('@Portal: admin');

    setDataAdmin({} as AuthStateAdmin);
  }, []);

  const updateAdmin = useCallback(
    (admin: Admin) => {
      setDataAdmin({
        token: data.token,
        admin,
      });
      localStorage.setItem('@Portal: admin', JSON.stringify(admin));
    },
    [setDataAdmin, data.token],
  );
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
        admin: dataAdmin.admin,
        signInAdmin,
        signOutAdmin,
        updateAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
