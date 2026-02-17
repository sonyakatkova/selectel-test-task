import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  categories: string[] = [];
  activeCategory: string = 'Итальянская';
  
  @Output() categoryChanged = new EventEmitter<string>();

  constructor(private menuService: MenuService) {
    this.categories = this.menuService.getCategories();
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
    this.categoryChanged.emit(category);
  }
}