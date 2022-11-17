export const getAddress = () => {
  const CEP = document.getElementsByClassName('cep-input').value;
  const promise1 = async () => {
    const cep1 = await fetch(`https://cep.awesomeapi.com.br/json/${CEP}`);
    const address1 = await cep1.json();
    return address1;
  };

  const promise2 = async () => {
    const cep2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`);
    const address2 = await cep2.json();
  return address2;
  };

  const promises = [promise1, promise2];
  Promise.any(promises).then((endereco) => console.log(endereco));
  console.log(endereco);
};

export const searchCep = () => {
const campo = document.getElementsByClassName('cart__address');
campo.innerHTML = `${endereco}`
};
