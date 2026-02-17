import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { id: 1, name: 'Пицца Маргарита', value: 450, checked: false, category: 'Итальянская' },
    { id: 2, name: 'Паста Карбонара', value: 380, checked: false, category: 'Итальянская' },
    { id: 3, name: 'Лазанья', value: 420, checked: false, category: 'Итальянская' },
    { id: 4, name: 'Ризотто', value: 350, checked: false, category: 'Итальянская' },
    { id: 5, name: 'Тирамису', value: 280, checked: false, category: 'Итальянская' },

    { id: 6, name: 'Роллы Филадельфия', value: 550, checked: false, category: 'Азиатская' },
    { id: 7, name: 'Вок с лапшой', value: 320, checked: false, category: 'Азиатская' },
    { id: 8, name: 'Том Ям', value: 390, checked: false, category: 'Азиатская' },
    { id: 9, name: 'Спринг-роллы', value: 250, checked: false, category: 'Азиатская' },
    { id: 10, name: 'Рис с овощами', value: 200, checked: false, category: 'Азиатская' }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getMenuItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }

  getCategories(): string[] {
    return ['Итальянская', 'Азиатская'];
  }

  updateMenuItem(updatedItem: MenuItem): void {
    const index = this.menuItems.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.menuItems[index] = updatedItem;
    }
  }

  getSelectedCount(): number {
    return this.menuItems.filter(item => item.checked).length;
  }

  getTotalValue(): number {
    return this.menuItems
      .filter(item => item.checked)
      .reduce((sum, item) => sum + item.value, 0);
  }

  getSelectedItems(): MenuItem[] {
    return this.menuItems.filter(item => item.checked);
  }

  getSelectedItemsNames(): string {
    const selected = this.getSelectedItems();
    if (selected.length === 0) {
      return 'Ничего не выбрано';
    }
    return selected.map(item => item.name).join(', ');
  }
}