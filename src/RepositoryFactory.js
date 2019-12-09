import UsersRepository from "./users/usersRepository";

export const repositories = {
  users: UsersRepository
};

export const repositoryFactory = {
  get: name => repositories[name]
};
