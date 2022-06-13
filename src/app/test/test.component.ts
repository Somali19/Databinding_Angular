import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  //String interpolation
  appName = "Data Binding"; 

  constructor() { }

  ngOnInit(): void {
  }

  //Event binding
  showData($event: any){ 
    console.log("button is clicked!"); if($event) { 
       console.log($event.target); 
       console.log($event.target.value); 
    } 
  }

  //Property binding
  propertyBind:string = "Property Binding";

  //Attribute binding
  attributeBind:string = "Attribute Binding";

  //Class binding
  myCSSClass = "red";
  applyCSSClass = false;

  //Style binding
  myColor = 'brown';

  //two way binding
  userName:string = "Somali";
}
