import axios from 'axios';
import { HttpClient } from './02-open-close-c';

export class TodoService {

  // private httpClient
  // constructor() {
  //   this.httpClient = new HttpClient()
  // }

  constructor( private httpClient : HttpClient){}

  async getTodoItems() {
    const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
  }
}


export class PostService {

  // private httpClient
  // constructor() {
  //   this.httpClient = new HttpClient()
  // }

  constructor(private httpClient: HttpClient){}

  async getPosts() {
    const { data } = await  this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}


export class PhotosService {

  // private httpClient
  // constructor() {
  //   this.httpClient = new HttpClient()
  // }

  constructor(private httpClient : HttpClient){}

  async getPhotos() {
    const { data } = await  this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }

}