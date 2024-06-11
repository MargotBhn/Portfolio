import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  projects = [
    {
      title : "Pong",
      image : "ClipPong.gif",
      descriptions :["Projet réalisé en groupe dans le cadre du cursus de l’école 42, visant à permettre aux utilisateurs de jouer au jeu de Pong et d'interagir via un chat. J’ai principalement travaillé sur le développement du jeu et la gestion des utilisateurs, tant en backend qu'en frontend.",
        "Mes contributions au projet incluent :"
      ],
      skills: [
        "Implémentation de la base de données et mise en place de l'authentification JWT",
        "Création de profils utilisateurs personnalisables et gestion en temps réel de leur statut (en ligne, hors ligne)",
        "Développement d’un jeu jouable en local via websockets avec un système de matchmaking",
        "Organisation de tournois à 4 joueurs et suivi des scores des joueurs",
      ],
      langages :[
        {name: "NestJS", src:"nestjs-icon.svg"},
        {name: "Angular", src:"angular-icon.svg"},
        {name: "PostgreSQL", src:"postgresql-icon.svg"},
        ],
      links :[
        {image: "github-fill.svg", url: "https://github.com/MargotBhn/Transcendence"},
      ],
    },
    {
      title : "Portfolio",
      image : "portfolio.png",
      descriptions : [
        "L’objectif de ce projet personnel était de développer mes compétences en HTML et CSS, des langages que je n'avais pas eu l'occasion de beaucoup utiliser lors de mes précédentes expériences. En plus d'améliorer mes connaissances dans ces technologies, ce projet m'a permis de découvrir et d'utiliser Bootstrap, ainsi que d'explorer les animations CSS. Ce fut également une excellente opportunité pour m'initier au design d'interface utilisateur (UI).",
        "J’espère par ce biais vous donner envie de collaborer avec moi."],
      langages :[
        {name:"HTML", src: "html-icon.svg"},
        {name: "CCS", src:"css-icon.svg"},
        {name: "Bootstrap", src:"bootstrap-icon.svg"},
      ],
      links :[
        {image: "github-fill.svg", url: "https://github.com/MargotBhn/Portfolio"}
      ],

    },
  ]
  selectedProject = this.projects[0];
  selectedProjectIndex : number = 0;


  selectProject(index : number)
  {
    this.selectedProject = this.projects[index];
    this.selectedProjectIndex = index;
  }
}
