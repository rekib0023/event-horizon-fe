import { apiClient } from "@services/apiClient";

interface UserLoginProps {
  email: string;
  password: string;
}

interface UserSignupProps {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthResponseProps {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export const login = async (
  body: UserLoginProps
): Promise<AuthResponseProps | null> => {
  try {
    const response = await apiClient.post<AuthResponseProps>(
      "/auth/login",
      body
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    return null;
  }
};

export const signup = async (
  body: UserSignupProps
): Promise<AuthResponseProps | null> => {
  try {
    const response = await apiClient.post<AuthResponseProps>(
      "/auth/signup",
      body
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    return null;
  }
};
