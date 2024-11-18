// describe('test example', () => {
//   it('visits the wikipedia webpage', () => {
//     cy.visit('https://isabellyschaffer.github.io/')

//     cy.get('btn01')
//       .click()


//   })
// })
describe('Teste de Login na Página Modificada', () => {
  beforeEach(() => {
      cy.visit('localhost:5500/teste/');
  });

  it('deve permitir o login com credenciais corretas', () => {
      cy.wait(1000); 
      cy.get('#username', { timeout: 10000 }).type('admin');
      cy.get('#password', { timeout: 10000 }).type('password');
      cy.get('button[type="submit"]').click();
      cy.contains('Login bem-sucedido!');
  });

  it('deve mostrar mensagem de erro com credenciais incorretas', () => {
      cy.wait(1000); 
      cy.get('#username', { timeout: 10000 }).type('usuario_incorreto');
      cy.get('#password', { timeout: 10000 }).type('senha_incorreta');
      cy.get('button[type="submit"]').click();
      cy.contains('Usuário ou senha incorretos.');
  });
});

  