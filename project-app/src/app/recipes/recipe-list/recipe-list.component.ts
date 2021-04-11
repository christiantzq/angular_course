import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chilaquiles', 'Unos chilaquiles bien ricos', 'https://www.curiouscuisiniere.com/wp-content/uploads/2019/12/Mexican-Chilaquiles-8724-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
