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
      descriptions :["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
      langages :["Angular", "NestJS", "TypeORM"],
      skills: [""],
      links :[
        {image: "github-fill.svg", url: "https://github.com/MargotBhn/Transcendence"},
        {image: "youtube-fill.svg", url: "https://youtu.be/qQSJd5c-IV8?si=CtI7CthxGXgotSFf"}
      ],
    },
    {
      title : "Portfolio",
      image : "Portfolio.png",
      descriptions : [
        "Ce projet a été conçu pour améliorer mes compétences en HTML et CSS, avec une base sur Angular.",
        "J'espère que cela vous inspirera à collaborer avec moi sur des futurs projets."],
      langages :["Angular", "HTML", "CSS"],
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
