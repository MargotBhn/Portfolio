import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AProposComponent implements OnInit{

  text1: string = "En formation à l’école 42, souhaitant poursuivre mon cursus en me spécialisant dans le Web, je suis à la recherche d’une alternance de 2 ans, ou d’un stage suivi d’une alternance de 1 an."
  text2: string = "Ma reconversion professionnelle est motivée par le plaisir que je trouve à coder et ma capacité à résoudre des problèmes logiques."

  hitList = [
    "Réussir à faire comprendre les équations du premier degré à des collégiens !",
    "Servir des bières dans des gobelets en plastique, en évitant l'excès de mousse !",
    "Installer des kilomètres de barrières sur des festivals de musique !",
    "Survivre à la piscine de l'école 42 sans couler !",
    "Gravir le mont Celeste et récolter des fraises !",
    "Réussir à vous convaincre de m'engager ?",
  ];


  currentIndex: number = 0;
  currentText : string = '';
  currentCharacter : number = 0; 

  ngOnInit () : void{
    this.typeWriter();
  }


  typeWriter() : void{
    if (this.currentIndex < this.hitList.length)
      {
        if (this.currentCharacter < this.hitList[this.currentIndex].length)
          {
            this.currentText += this.hitList[this.currentIndex].charAt(this.currentCharacter);
            this.currentCharacter++;
            setTimeout(() => this.typeWriter(), 20);
          }
          else
            setTimeout(() => this.removeText(), 2000)
        
      }
      else{
        this.currentIndex = 0;
        this.currentText = '';
        this.currentCharacter = 0;
        this.typeWriter();
      }
  }

  removeText() : void{
      this.currentIndex++;
      this.currentText = '';
      this.currentCharacter = 0;
      this.typeWriter();
  }


}
