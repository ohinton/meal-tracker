import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add an entry:</h3>
    <label class="sr-only" for="new-name">Add meal name</label>
    <input id="new-name" placeholder="What did you eat?" class="input-lg" #newName>

    <label class="sr-only" for="new-details">Add meal details</label>
    <input id="new-details" placeholder="Meal details" class="input-lg" #newDetails>

    <label class="sr-only" for="new-calories">Add meal calories</label>
    <input id="new-calories" placeholder="Calories" class="input-lg" #newCalories>

    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-success btn-lg">Add</button>
  </div>
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
