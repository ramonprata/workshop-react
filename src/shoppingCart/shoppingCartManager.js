class ShoppingCartManager {
  async efetuarCompra() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 4000);
    });
    return promise;
  }
}


export default new ShoppingCartManager();