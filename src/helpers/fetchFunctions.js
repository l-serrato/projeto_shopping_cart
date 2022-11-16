export const fetchProduct = (QUERY) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) { throw new Error('Termo de busca não informado'); }
  await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
