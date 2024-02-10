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

  ngOnInit() : void {
    this.cargarDatos()
  }

  // inicialización del blog con la carga de las noticias de arrBlogEntries
  cargarDatos(): string {
    let html = ""
    this.entries.forEach (entry => {
      html += `
      <article class="article-wrap">
        <h3>${entry.title}</h3>
        <img src=${entry.url} alt="">
        <p>${entry.body}</p>
        <p class="article-wrap_date">Publicado el ${entry.date}</p>
      </article>`
    })
    return html
  }

}