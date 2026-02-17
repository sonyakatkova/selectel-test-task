import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../services/menu';
import { MenuItem } from '../models/menu-item';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SidebarComponent],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {
  allMenuItems: MenuItem[] = [];
  displayedItems: MenuItem[] = [];
  selectedCount: number = 0;
  totalValue: number = 0;
  currentCategory: string = 'Итальянская';


  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.allMenuItems = this.menuService.getMenuItems();
    this.filterByCategory(this.currentCategory);
    this.updateStats();
  }

   filterByCategory(category: string): void {
    this.currentCategory = category;
    this.displayedItems = this.menuService.getMenuItemsByCategory(category);
  }


  onCheckboxChange(item: MenuItem): void {
    item.checked = !item.checked;
    this.menuService.updateMenuItem(item);
    this.updateStats();
  }

  onCategoryChange(category: string): void {
      this.filterByCategory(category);
    }

  private updateStats(): void {
    this.selectedCount = this.menuService.getSelectedCount();
    this.totalValue = this.menuService.getTotalValue();
  }
}