import axios from 'axios';
//   'https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/item.json';
// https://ddragon.leagueoflegends.com/realms/na.json
// 'https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json'

const ddragonBase = 'https://ddragon.leagueoflegends.com';

export const getItems = async (version) => {
  const { data } = await axios.get(`${ddragonBase}/cdn/${version}/data/en_US/item.json`);

  return data;
}

export const getChampions = async (version) => {
  const { data } = await axios.get(
    `${ddragonBase}/cdn/${version}/data/en_US/item.json`
  );

  return data;
};
