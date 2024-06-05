import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AProposComponent } from './apropos/apropos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent, NavComponent, AProposComponent, ProjetsComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
