export interface UserInterface {
  id: number;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  updatedAt: string;
}

export interface AxiosBaseResponse<T> {
  data: T;
  message: {
    success?: string[];
    error?: string[];
  };
}
