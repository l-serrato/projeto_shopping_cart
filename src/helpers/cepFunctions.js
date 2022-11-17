export const getAddress = () => {
  const CEP = document.querySelector('.cep-input').value;
  const promises = [fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`), fetch(`https://cep.awesomeapi.com.br/json/${CEP}`)];
  return Promise.any(promises).then((endereco) => endereco.json()).then((zip) => zip);
};

export const searchCep = async () => {
  const campo = document.querySelector('.cart__address');
  try {
    const ad = await getAddress();
    const er1 = 400;
    const er2 = 404;
    if (ad.status === er1 || ad.status === er2) {
      campo.innerHTML = 'CEP não encontrado';
    } else {
      const cdp1 = ad.address;
      const cdp2 = ad.neighborhood;
      const codp3 = ad.street;
      const codp4 = ad.district;
      campo.innerHTML = `${cdp1 || codp3} - ${codp4 || cdp2} - ${ad.city} - ${ad.state}`;
    }
  } catch (error) {
    campo.innerHTML = 'CEP não encontrado';
  }
};
