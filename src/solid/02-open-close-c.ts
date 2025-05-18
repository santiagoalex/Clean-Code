import axios from 'axios';

export class HttpClient {
  // private url

  // constructor(url:string){
  //   this.url= url
  // }

  async get(url: string) {

    const { data } =await  axios.get(url)
    return { data }

  }

}