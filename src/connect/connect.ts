import axios from 'axios';

export type URL = Array<string>;

const Connect = async (URL: URL) => {
  const resp = await axios.all(URL.map((url: string) => axios.get(url)));
  return resp;
} 

export default Connect;