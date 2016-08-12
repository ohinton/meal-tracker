import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector:'meal-display',
    inputs: ['meal'],
    template:`
    <h1>{{ meal.name }}</h1>
    <h2>{{ meal.description }}</h2>
    <h2>{{ meal.calories }}</h2>
    `
})
export class MealComponent{
  public meal: Meal;
}
