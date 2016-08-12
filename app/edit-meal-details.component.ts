import { Component } from 'angular2/core'
import { Meal } from './meal.model'

@Component ({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit this entry:</h3>
    <input id="name" [(ngModel)]="meal.name" class="input-lg meal-form"/>
    <input [(ngModel)]="meal.details" class="input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="input-lg meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent{
  public meal: Meal;
}
