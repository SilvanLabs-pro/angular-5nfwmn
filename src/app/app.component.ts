import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  myVal = "";
  color = "";
  constructor(public element: ElementRef, public renderer: Renderer2) {}

  @ViewChild("refVal", { static: true }) input: ElementRef;
  ngAfterviewInit() {
    console.log(this.input.nativeElement.value);
  }

  // if(this.input > 5000){
  //   this.element.
  // }

  getColor(val) {
    console.log(this.input.nativeElement.value);
    if (val < 3000) {
      this.color = 'green';
    } else if (val < 5000) {
      this.color = 'yellow';
    } else {
      this.color = "red";
    }
    return this.color
  }
}
