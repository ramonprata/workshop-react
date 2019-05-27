class DemoService {
  getUsuario() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          nome: 'Ramon',
          sobreNome: 'Prata'
        });
      }, 2000);
    });
  }
  salvar(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}
export default new DemoService();
