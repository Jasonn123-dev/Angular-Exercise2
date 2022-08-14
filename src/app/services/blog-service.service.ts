import { Injectable } from '@angular/core';
import { Blog } from '../blog/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }
  blog: Blog[] = [
    {
      id: 10000000000,
      title: "The Monkey King",
      description: "Personal Blog",
      author: "J.J Brothers",
      comments: [
        "Nice blog",
        "Very nice blog"
      ]
    },
    {
      id: 2000000000,
      title: "Between the Lines",
      description: "Personal Blog",
      author: "David Burn",
      comments: [
        "Good Blog",
        "Very good blog"
      ]
    }
  ]

  getBlog = () => {
    return this.blog;
  }


}
