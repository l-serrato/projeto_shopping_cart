export const getAddress = () => {
  const CEP = document.querySelector('.cep-input').value;
  const promises = [fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`), fetch(`https://cep.awesomeapi.com.br/json/${CEP}`)];
  return Promise.any(promises).then((endereco) => endereco.json()).then((zip) => zip);
};

export const searchCep = () => {
  const ad = getAddress();
  console.log(ad);
  const campo = document.querySelector('.cart__address');
  campo.innerHTML = `${address} - ${distrct} - ${city} - ${state}`;
};
