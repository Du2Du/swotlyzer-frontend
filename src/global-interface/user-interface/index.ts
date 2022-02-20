export interface UserInterface {
  _id: string;
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
