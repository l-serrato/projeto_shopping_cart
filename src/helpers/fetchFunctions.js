export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = () => {
  if (!query.value) { throw Error('Termo de busca não informado'); }
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY')
    .then((response) => response.json())
    .then((data) => data.results);
};
