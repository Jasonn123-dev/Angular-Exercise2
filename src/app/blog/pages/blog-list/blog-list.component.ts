import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = []
  constructor(private blogService: BlogServiceService){
    this.blogs = blogService.getBlog();
  }

  ngOnInit(): void {
  }
  executeAction(blog:Blog) {
    console.log(blog.id)


}
}
