import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  mail: string = "bihanmargot@gmail.com"

  hideMail : boolean = true

  toogleDisplay()
  {
    this.hideMail = !this.hideMail
  }
}
