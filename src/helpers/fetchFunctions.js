export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query.value) { throw Error('Termo de busca não informado'); }
  const source = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const outcome = await fetch(source);
  const info = await outcome.json();
  return info;
  /* .then((response) => response.json())
  .then((data) => data.results); */
};
