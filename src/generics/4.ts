type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  return {
    name: "John",
    surname: "Doe",
    email: "johndoe@mail.com",
    password: "0000",
  };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
