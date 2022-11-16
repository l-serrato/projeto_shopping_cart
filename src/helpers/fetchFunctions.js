export const fetchProduct = (QUERY) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');
  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const data = await resultado.json();
  return data.results;
};
// console.log(fetchProductsList('computador'));
