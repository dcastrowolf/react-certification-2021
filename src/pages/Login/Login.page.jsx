import React from 'react';
import Logo from 'assets/img/YoutubeIcon.svg';
import { NavLogo } from 'components/NavBar/NavBarElements.styled';
import { useAuth } from 'providers/Auth';
import { useHistory } from 'react-router';
import { useLoginForm } from './hooks/useLoginForm';
import {
  CancelButton,
  Error,
  FormGroup,
  InlineGroup,
  LoginButton,
  LoginContainer,
  LoginForm,
} from './LoginElements.styled';

function LoginPage() {
  const {
    userCredentials: { username, password },
    onLoginFormChange,
    onLoginFormSubmit,
  } = useLoginForm();

  const {
    auth: { error, loading },
  } = useAuth();

  const history = useHistory();
  const handleCancel = () => {
    history.push({ pathname: '/' });
  };

  return (
    <LoginContainer>
      {error && <Error aria-label="Login error">{error}</Error>}
      {loading && <h2>Loading...</h2>}
      <LoginForm onSubmit={onLoginFormSubmit}>
        <NavLogo to="/">
          <img width={40} height={30} src={Logo} alt="WizelineTube logo" />
          <p>WizelineTube</p>
        </NavLogo>
        <FormGroup>
          <label htmlFor="username">
            <strong>username </strong>
            <input
              onChange={onLoginFormChange}
              value={username}
              required
              type="text"
              id="username"
              name="username"
            />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">
            <strong>password </strong>
            <input
              onChange={onLoginFormChange}
              value={password}
              required
              type="password"
              id="password"
              name="password"
            />
          </label>
        </FormGroup>
        <InlineGroup>
          <LoginButton type="submit">login</LoginButton>
          <CancelButton onClick={handleCancel}>cancel</CancelButton>
        </InlineGroup>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
