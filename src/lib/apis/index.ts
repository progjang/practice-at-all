import { BASE_URL } from '../constants/inedx';

export async function getBestSellersLists() {
  const response = await fetch(BASE_URL + '/lists');
  const result = await response.json();
  return result;
}

export async function getBooks(listName: string) {
  const response = await fetch(`${BASE_URL}/list?name=${listName}`);
  const result = await response.json();
  return result;
}
