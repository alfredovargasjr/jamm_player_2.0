import querystring from 'querystring';

interface Auth {
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
