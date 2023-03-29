import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent {

  stars: number = 5
  body: string = ""
  author: string = "who1@mail.com"

  @Output()
  submit: EventEmitter<any> = new EventEmitter();

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit({ stars: this.stars, body: this.body, author: this.author })
  }

}
