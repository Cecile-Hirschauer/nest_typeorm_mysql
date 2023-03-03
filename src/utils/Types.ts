export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dateOfBirth: Date;
};

export type UpdateProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dateOfBirth: Date;
}
