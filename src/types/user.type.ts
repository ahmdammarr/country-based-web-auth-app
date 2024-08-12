export interface User {
  name: string;
  email: string;
}

export interface ILogin {
  username: string;
  password: string;
}
export interface AuthResponse {
  accessToken: string;
}
export interface UserDetails {
  details: {
    accountNumber: string;
    balance: number;
  };
}
