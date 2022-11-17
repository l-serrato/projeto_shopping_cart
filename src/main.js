import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

function loading() {
  const container = document.querySelector('.products');
  const element = document.createElement('p');
  element.innerText = 'carregando...';
  element.className = 'loading';
  container.appendChild(element);
}

function error() {
  const container = document.querySelector('.products');
  const element = document.createElement('p');
  element.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  element.className = 'error';
  container.appendChild(element);
  console.log('deu ruim');
}

function removeLoading() {
  const remove = document.querySelector('.loading');
  remove.remove();
}

const productList = async () => {
  try {
    loading();
    const goods = await fetchProductsList('computador');
    console.log(goods);
    const merchandise = document.querySelector('.products');
    goods.forEach((article) => {
      const thing = createProductElement(article);
      merchandise.appendChild(thing);
    });
    removeLoading();
  } catch { error(); }
};
productList();
