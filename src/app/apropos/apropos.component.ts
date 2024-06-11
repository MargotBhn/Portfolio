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

  text1: string = "Motivée par le plaisir que je retrouve à résoudre des problèmes logiques, j’ai décidé de me reconvertir dans la programmation. C’est ainsi que j’ai intégré 42, une école reconnue pour son modèle pédagogique innovant, basé sur l'apprentissage par projet, l'autonomie et la collaboration entre pairs, une approche que j'apprécie énormément et qui correspond parfaitement à ma manière d'apprendre."
  text2: string = "Désirant poursuivre mon cursus dans le Web et Mobile, je suis à la recherche d’une alternance de 2 ans, ou d’un stage de 4 à 6 mois suivi idéalement d’une alternance de 1 an. Mon objectif est de mettre en pratique les compétences acquises et de continuer à me développer dans un environnement professionnel enrichissant.";
  text3: string = "J’ai une préférence marquée pour le backend / fullstack, motivée par mon désir de contribuer au développement d'applications fonctionnelles et performantes. En tant que membre d'une équipe, je suis déterminée à apporter bien plus que mes compétences techniques. Mon esprit d'équipe et ma capacité à collaborer efficacement sont des atouts que je cultive humblement et que je souhaite mettre à profit dans un cadre professionnel stimulant.";

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
