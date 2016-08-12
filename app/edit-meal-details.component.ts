import { Component } from 'angular2/core'
import { Meal } from './meal.model'

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit this entry:</h3>
    <label class="sr-only" for="edit-name">Edit meal name</label>
    <input id="edit-name" [(ngModel)]="meal.name" class="input-lg meal-form"/>

    <label class="sr-only" for="edit-details">Edit meal details</label>
    <input id="edit-details" [(ngModel)]="meal.details" class="input-lg meal-form"/>

    <label class="sr-only" for="edit-calories">Edit meal calories</label>
    <input id="edit-calories "[(ngModel)]="meal.calories" class="input-lg meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent{
  public meal: Meal;
}
