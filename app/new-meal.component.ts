import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Add new meal:</h3>
  <input placeholder="meal name" class="input-lg" #newName>
  <input placeholder="meal description" class="input-lg" #newDescription>
  <input placeholder="meal calories" class="input-lg" #newCalories>
  <button (click)="addMeal(newName, newDescription, newCalories)">Add</button>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userMealDescription: HTMLInputElement, userMealCalories: HTMLInputElement){
    var newMeal: String[] = [userMealName.value, userMealDescription.value, userMealCalories.value];
    this.onSubmitNewMeal.emit(newMeal);
    userMealName.value = "";
    userMealDescription.value = "";
    userMealCalories.value = "";
  }
}
