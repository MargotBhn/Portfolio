import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AProposComponent {

  text1: string = "En formation à l’école 42, souhaitant poursuivre mon cursus en me spécialisant dans le Web, je suis à la recherche d’une alternance de 2 ans, ou d’un stage suivi d’une alternance de 1 an."
  text2: string = "Ma reconversion professionnelle est motivée par le plaisir que je trouve à coder et ma capacité à résoudre des problèmes logiques."
}
