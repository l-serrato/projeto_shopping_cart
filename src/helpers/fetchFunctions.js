export const fetchProduct = async (ProductID) => {
  if (!ProductID) throw new Error('ID não informado');
  const res = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const info = await res.json();
  return info;
};

function loading() {
  const container = document.getElementById('list');
  const element = document.createElement('li');
  element.innerText = 'carregando...';
  element.className = 'loading';
  container.appendChild(element);
}

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) throw new Error('Termo de busca não informado');
  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const data = await resultado.json();
  const goods = Object.values(data.results);
  console.log(goods);
  if (document.getElementById('list'.length === 0)){
    loading();
  };
  const merchandise = document.getElementById('list');
  goods.forEach((article) => {
    const item = document.createElement('li');
    item.innerHTML = `Descrição:${article.title} - Preço:${article.price}`;
    merchandise.appendChild(item);
  });
};
