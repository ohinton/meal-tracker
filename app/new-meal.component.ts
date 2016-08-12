import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Add new meal!</h3>
  <input placeholder="what did you eat?" class="input-lg" #newName>
  <input placeholder="details" class="input-lg" #newDetails>
  <input placeholder="calories" class="input-lg" #newCalories>
  <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-success btn-lg">Add</button>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userMealDetails: HTMLInputElement, userMealCalories: HTMLInputElement){
    var newMeal: String[] = [userMealName.value, userMealDetails.value, userMealCalories.value];
    this.onSubmitNewMeal.emit(newMeal);
    userMealName.value = "";
    userMealDetails.value = "";
    userMealCalories.value = "";
  }
}
