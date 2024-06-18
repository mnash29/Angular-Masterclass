import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics'
  name = 'matthew'
  imgURL = 'https://picsum.photos/id/237/250/250'
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ["pepperoni", "pineapple", "jalopeno"],
    size: "large"
  }
  blueClass = false

  getName() {
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    // Type assertion
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImage(e: string) {
    console.log(e)
  }
}
