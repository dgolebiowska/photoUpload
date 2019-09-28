import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
  }
  onAddNewCategory(name: string) {
    this.categoriesService.newCategory$.next(name)
    this.newCategoryName = ""
}
}
