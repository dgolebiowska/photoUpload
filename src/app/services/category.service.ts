import { Injectable } from '@angular/core';
const initialCategories = [
  { name: "Landscapes", id: "46004df1-876a-443c-9126-4bee714bed9e", },
  { name: "Wishlist", id: "4cc5e97c-7572-481a-969d-e92b131a2e8d", },
  { name: "Others", id: "b22a7c97-d7da-4fa7-af75-170055a9f825", },
];
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  newCategory$: any;

  constructor() { }


}
