import { useAuth } from 'providers/Auth';
import { useState } from 'react';

export function useLoginForm() {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();

  const onLoginFormChange = (evt) => {
    const {
      target: { name, value },
    } = evt;
    setUserCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onLoginFormSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    const userCredentialsFormData = Object.fromEntries(data);
    login(userCredentialsFormData);
  };

  return { userCredentials, onLoginFormChange, onLoginFormSubmit };
}
