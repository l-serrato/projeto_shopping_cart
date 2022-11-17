export const getAddress = () => {
  const CEP = document.querySelector('.cep-input').value;
  const promises = [fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`), fetch(`https://cep.awesomeapi.com.br/json/${CEP}`)];
  return Promise.any(promises).then((endereco) => endereco.json()).then((zip) => zip);
};

export const searchCep = () => {
  getAddress();
  // const campo = document.getElementsByClassName('cart__address');
// campo.innerHTML = `${endereco}`
};
