import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CalorieCountPipe } from './calorie-count.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs:['onMealSelect'],
  directives:[MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [CalorieCountPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Meals</option>
    <option value="high-calorie">Show High Calorie Meals</option>
    <option value="low-calorie">Show Low Calorie Meals</option>
  </select>

  <meal-display *ngFor="#currentMeal of mealList | calorieCount:selectedCalorieCount" (click)="mealClicked(currentMeal)"
  [meal] = "currentMeal"
  [class.high-calorie]="currentMeal.calories <= 500">
  </meal-display>

  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>

  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalorieCount: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: string[]): void {
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseFloat(newMeal[2]))
    );
  }
  onChange(optionFromMenu){
    this.selectedCalorieCount = optionFromMenu;
  }
}
