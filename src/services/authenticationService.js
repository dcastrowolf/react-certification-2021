const mockUser = {
  id: 'xyz123',
  name: 'wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favoriteVideos: [],
};

const authData = { token: null, favoriteVideos: [] };
const AUTH_KEY = 'AUTH_TOKEN';

/**
 *
 * @param {Storage} storage where things are gonna be store locally
 * @returns Proxy object to access Auth Data
 */
const credentialStorage = (storage = window.localStorage) => {
  return new Proxy(authData, {
    get(_, prop) {
      const storeKey =
        prop === 'favoriteVideos' ? `${AUTH_KEY}.token` : `${AUTH_KEY}.${prop}`;
      const storeProperty = storage.getItem(storeKey);
      if (prop === 'favoriteVideos') {
        const data = storeProperty ? JSON.parse(atob(storeProperty)).favoriteVideos : [];
        return data;
      }
      return storeProperty;
    },
    set(_, prop, value) {
      if (prop === 'favoriteVideos') {
        return false;
      }
      if (!value) {
        storage.removeItem(`${AUTH_KEY}.${prop}`);
        return true;
      }
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
