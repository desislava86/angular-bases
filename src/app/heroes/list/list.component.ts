import { Component } from '@angular/core';

@Component({
  selector: 'app-hereo-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string [] = ['SpiderMan', 'IronMan', 'Thor', 'Hulck'];
  public deleteHero: string = '' ;

  removelastHero(): void {
    this.deleteHero = this.heroNames.pop() || '';
  }

}
