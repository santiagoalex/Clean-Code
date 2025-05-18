// import axios from 'axios';

export class HttpClient {
  // private url

  // constructor(url:string){
  //   this.url= url
  // }

  async get(url: string) {

    // const { data } =await  axios.get(url)
    const resp = await fetch(url) 
    const data = await resp.json()

    return { data,status:resp.status }

  }

}