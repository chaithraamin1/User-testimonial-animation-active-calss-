import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animated-user-testimonial';
  ngOnInit() {}
activeSelectedText(){
debugger
  var usertexts: any = document.getElementsByClassName("usertext");
  for (var text of usertexts) {
    text.classList.remove("active-text")
  }
  var userimages: any = document.getElementsByClassName("user-img");
  for (var img of userimages) {
    img.classList.remove("active-pic")
  }
  var i=Array.from(userimages).indexOf(event?.target);
  usertexts[i].classList.add("active-text");
  userimages[i].classList.add("active-pic");
}

}
