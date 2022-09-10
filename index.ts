// Definindo um "tipo"
// Para um sentido mais semântico, utilizamos o type ao invés de interface.
type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string // O ponto de interrogação define que o state não é obrigatório.
  }
}

function showWelcomeMessage(user: User) { // Passando o tipo User para o parâmetro "user".
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}.`;
}

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  address: {
    city: 'New York',
    state: 'NY',
  }
};

const message = showWelcomeMessage(user)