import axios from 'axios';
import Config from 'constants/config';

const client = axios.create({
  baseURL: Config.API,
});

export const contentAddApi = params => client.post('content/newcontent', params);
export const contentGetApi = params => client.post('content/getcontent', params);
