export const fetchProduct = async (ProductID) => {
  if (!ProductID) throw new Error('ID não informado');
  const res = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const info = await res.json();
  return info;
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');
  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const data = await resultado.json();
  return data.results;
};
// console.log(fetchProductsList('computador'));
