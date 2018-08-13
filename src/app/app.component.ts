import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
  <h1 [class]="titleClass">Inline template test </h1>
  <h1 [class.red-title]="bindingValue">Binding class template</h1>
  <h1 [ngClass]="ngTitleClasses"> NG classes </h1>
  {{student.name}}<br>
  {{arry}}
  <ul>
    <li *ngFor="let item of arry"> {{item}} </li>
  </ul>
  <ul>
    <li *ngIf="arry"> arry Exist </li>
    <li *ngIf="!arry"> arry Exist </li>
    <li *ngIf="existTest == 'something'"> existTest Exist 1</li>
    <li *ngIf="existTest != 'something'"> existTest Exist 1</li>
    <li *ngIf="existTest; else otherTemplate"> ExistTest Passed on if</li>
  </ul>
  <ng-template #otherTemplate>ExistTest Passed on else</ng-template>
  <div *ngIf="existTest; Then template1 else template2"></div>
  <ng-template #template1>I'm in template1</ng-template>
  <ng-template #template2>I'm in template2</ng-template>
  <img src = "{{ img }}"/>
  <img [src] = "img1"/>
  <img bind-src="img2"/>
  <button [disabled]="btnEnabled == true"> Click Here!!! </button>
  <button (click)="myEvent($event)">Click Event</button>
  <button (mouseenter)="myEvent($event)">Mouse Enter Event</button>
  <h1 [style.color]="styleBinding">Hello!!</h1>\
  <h1 [style.color]="styleBindingbool ? 'brown' : 'blue'">Hello!!</h1>
  <h1 [ngStyle]="styleBindings">Hello!!</h1>
  <p> {{someProperty}} </p>
   `,
  styles: [`
  h1 {
    text-decoration:underline;
  }
  .red-title {
    color:red;
  }
  .large-title {
    font-size:80px;
  }
  `]
})
export class AppComponent {

  constructor(private dataService:DataService) {

  }
  student = {
    name: 'Rajesh',
    age: '27'
  };
  arry = ['Apple', 'bannana', 'carrot'];
  existTest = "something";
  img = "https://vignette.wikia.nocookie.net/zelda/images/a/aa/Link_Artwork_3_%28Twilight_Princess%29.png/revision/latest?cb=20160110212412";
  img1 = "https://vignette.wikia.nocookie.net/dbxfanon/images/f/fd/Link.png/revision/latest?cb=20160424022916";
  img2 = "https://vignette.wikia.nocookie.net/zelda/images/3/38/Link_Tunique_Rouge_HW.png/revision/latest?cb=20150201145320&path-prefix=fr";
  btnEnabled = false;

  myEvent(event) {
    console.log(event);
  }
  titleClass = 'red-title';
  bindingValue = false;
  ngTitleClasses = {
    'red-title' : true,
    'large-title' :  true
  };
  styleBinding = 'green';
  styleBindingbool = false;

  styleBindings = {
    'color' : 'red',
    'font-size' : '1em'
  }

  someProperty: string = '';

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.getMyData();
  }

 
  
}
