import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { IEntry } from './interfaces/ientry.interface';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // se crea un array para inicializar las noticias del blog
  arrBlogEntries : IEntry[] = [
    {
      title : "Título 1",
      url : "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      body : "Morbi mollis orci quis mauris pulvinar, quis tristique leo hendrerit. Duis imperdiet dolor et lacinia lacinia. Etiam fringilla odio urna, nec tristique orci dapibus vel. Vestibulum malesuada facilisis quam, iaculis volutpat dui cursus sed. Morbi cursus lacinia accumsan. Aliquam volutpat ullamcorper metus sed consequat. Sed sodales sapien tellus, quis venenatis risus aliquam nec. Nullam ac elit id dolor sagittis consequat.",
      date : "01/01/2021"
    },
    {
      title : 'Título 2',
      url : 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum, dui id rhoncus efficitur, ligula sem fringilla ex, id dictum diam tellus non lorem. Curabitur fringilla, leo in sodales lobortis, arcu mauris finibus sapien, ac congue tortor sapien id urna. Phasellus id sem augue. Aliquam tellus nibh, aliquet sit amet pharetra at, tempus in quam. Aliquam pretium tellus sit amet tempor ultricies. Proin eu tempus neque. Morbi nec porta eros.',
      date : '02/02/2022'
    },
  ]

  // Función que añade al array de noticias las nuevas publicaciones añadidas mediante el formulario
  publishNewEntry($event:any) : void {
    this.arrBlogEntries.push ($event)
  }
}
