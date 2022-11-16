import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function'); 
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    const outcome = 'https://api.mercadolibre.com/items/MLB1405519561';
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(outcome);
  });

  it('retorno da função fetchProduct com argumento é uma estrutura de dados igual ao objeto', async() => {
    const result = await fetchProduct('MLB1405519561');
    expect(result).toEqual(produto);
  });

  it('ao chamar a função sem argumento, retorna um erro com a mensagem', async() => {
    const resposta = await fetchProduct();
    expect(resposta).toEqual(new Error('ID não informado'));
  });
});
