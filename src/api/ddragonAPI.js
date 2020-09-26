import axios from 'axios';
//   'https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/item.json';
// https://ddragon.leagueoflegends.com/realms/na.json
// 'https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json'
import { mapID } from '../vars/mapID';

const ddragonBase = 'https://ddragon.leagueoflegends.com';

export const getItems = async version => {
  const { data } = await axios.get(
    `${ddragonBase}/cdn/${version}/data/en_US/item.json`,
  );

  const onlyAramAndSummonersRift = Object.keys(data.data).reduce((acc, key) => {
    if (
      !acc[key] &&
      (data.data[key].maps[mapID.SUMMONERS_RIFT] === true ||
        data.data[key].maps[mapID.HOWLING_ABYSS] === true)
    ) {
      acc[key] = data.data[key];
    }
    return acc;
  }, {});

  return onlyAramAndSummonersRift;
};

export const getChampions = async version => {
  const { data } = await axios.get(
    `${ddragonBase}/cdn/${version}/data/en_US/champion.json`,
  );

  return data.data;
};

export const getVersion = async () => {
  const { data } = await axios.get(
    'https://ddragon.leagueoflegends.com/realms/na.json',
  );

  return data.v;
};
