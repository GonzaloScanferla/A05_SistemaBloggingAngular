import { Component, Input, OnInit } from '@angular/core';
import { IEntry } from '../interfaces/ientry.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent{
  @Input () entries : IEntry [] = []
}