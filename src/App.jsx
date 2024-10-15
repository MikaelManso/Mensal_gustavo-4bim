
import './App.css'

  function App() {
  
    return (
      <><div className="cadastra-container">
        <h2>Cadastra</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Coloque o nome de usuário" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="usuario" placeholder="Coloque o nome de usuário" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="Senha" placeholder="Coloque sua senha" required />
          </div>
  
          <div className='bnt-cas'>
            <button type="submit">Cadastra</button>
          </div>
        </form>
  
      </div>
    <div className='tabela'>
    <table className="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Usuário</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>exemplo@email.com</td>
          <td>UsuárioExemplo</td>
          <td className="action-buttons">
            <button className="edit-btn">Editar</button>
            <button className="delete-btn">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  
        </div></>
  
    );
  }
  
  export default App;
