import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function'); 
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('retorno da função fetchProductsList com argumento é uma estrutura de dados igual ao objeto', async() => {
    const results = await fetchProductsList('computador');
    expect(results).toEqual(computadorSearch);
  });

  it('ao chamar a função sem argumento, retorna um erro com a mensagem', async() => {
    const answer = await fetchProductsList();
    expect(answer).toEqual(new Error('Termo de busca não informado'));
  });
});
