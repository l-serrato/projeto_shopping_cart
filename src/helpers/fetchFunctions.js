export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (item) => {
  const source = () => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  return fetch(source())
  .then((response) => response.json())
  .then((data) => data).catch((error) => 'Termo de busca não informado');
};
