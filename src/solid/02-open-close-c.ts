//import axios from "axios";

export class HttpClient {
  //get = async (url: string) => {
  //const { data ,status} = await axios.get(url);
  //console.log({status});
  //return {data,status}
  //};

  get = async (url: string) => { 
    const res = await fetch(url);
    const data = await res.json();

    return { data, status: res.status };
  };
}
