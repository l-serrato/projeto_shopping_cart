import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

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

const merchandise = document.querySelector('.products');
const productList = async () => {
  try {
    loading();
    const goods = await fetchProductsList('computador');
    // console.log(goods);
    goods.forEach((article) => {
      const thing = createProductElement(article);
      merchandise.appendChild(thing);
    });
    removeLoading();
  } catch { error(); }
};
productList();

const shopCart = document.querySelector('.cart__products');
merchandise.addEventListener('click', async (event) => {
  const merchId = event.target.parentNode.firstChild.innerText;
  saveCartID(merchId);
  const result = await fetchProduct(merchId);
  shopCart.appendChild(createCartProductElement(result));
});

window.onload = async () => {
  getSavedCartIDs().map(async (elemento) => {
    const merch = await fetchProduct(elemento);
    Promise.all(shopCart.appendChild(createCartProductElement(merch)));
  });
};
