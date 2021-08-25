const mockUser = {
  id: 'xyz123',
  name: 'wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favoriteVideos: [],
};

const authData = { token: null };
const AUTH_KEY = 'AUTH_TOKEN';

/**
 *
 * @param {Storage} storage where things are gonna be store locally
 * @returns Proxy object to access Auth Data
 */
const credentialStorage = (storage = window.localStorage) => {
  return new Proxy(authData, {
    get(_, prop) {
      const storedToken = storage.getItem(`${AUTH_KEY}.${prop}`);
      return storedToken;
    },
    set(_, prop, value) {
      storage.setItem(`${AUTH_KEY}.${prop}`, btoa(JSON.stringify(value)));
      return true;
    },
  });
};

export const userStorage = credentialStorage();

export const authenticationService = (() => {
  const login = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === '123pormi') {
          userStorage.token = mockUser;
          return resolve(mockUser);
        }
        return reject(new Error('Username or password invalid!'));
      }, 500);
    });
  };

  return {
    login,
  };
})();
