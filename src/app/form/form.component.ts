import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IEntry } from '../interfaces/ientry.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newEntry : IEntry = {
    title : "",
    url: "",
    body:"",
    date: ""
  }

  // output para el envio del evento publish que envía los datos del form al array de noticias
  @Output() sendNewEntry : EventEmitter<IEntry> = new EventEmitter ()

  publish () : void {
    if (this.verifyNewEntry() == false) {
      alert ("¡Todos los campos son obligatorios!")
    } else {
      this.sendNewEntry.emit(this.newEntry)
    }
  }

  // Función para comprobar que todos los campos del formulario se han rellenado correctamente
  verifyNewEntry() : boolean {
    const {title, url, body, date} = this.newEntry
    return (title.length > 0 && url.length > 0 && body.length > 0 && date.length > 0)
  }
}
