export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = () => {
  if (!query.value) { throw Error('Termo de busca não informado'); }
  const data = fetch('https://api.mercadolibre.com/sites/MLB/search?q=query')
    .then((response) => response.json())
    .then((data) => data.results);
    return data;
};
