import querystring from 'querystring';

export const generateRandomString = (length: number) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export interface Auth {
  access_token: string;
  expires_in: string;
  state: string;
  token_type: string;
}

export const getAuthObj = () => {
  const queryObject = (querystring.parse(
    location.hash.slice(1)
  ) as unknown) as Auth;
  if (Object.keys(queryObject).length === 0) {
    return undefined;
  }
  return queryObject;
};
