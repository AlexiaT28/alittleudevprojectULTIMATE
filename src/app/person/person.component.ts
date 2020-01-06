import { Component, OnInit } from '@angular/core';
import { creature } from '../creature';
import { CometogetherService } from '../cometogether.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [ CometogetherService]
})
export class PersonComponent implements OnInit {
  person : creature;
  constructor(private comeservice:CometogetherService) {
   }

  ngOnInit() {
  }
  getPerson(id:number) : creature {
    this.comeservice.getPerson(id).subscribe(person => this.person)
    return this.person
  }
}
