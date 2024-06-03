import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './apropos/apropos.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent},
    { path: 'apropos', component: AProposComponent},
    { path: 'project', component: ProjetsComponent},
    { path: 'contact', component: ContactsComponent},
];
