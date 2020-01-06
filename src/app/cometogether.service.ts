import { Injectable } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { creature } from './creature';
import { PersonComponent } from './person/person.component';

@Injectable({
  providedIn: 'root'
})
export class CometogetherService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<creature[]> {
    const url = 'https://swapi.co/api/people/';
    console.log("je suis dans getPeople de cometogetherseervice")
    return this.http.get<PeopleComponent["people"]>(url);
  }
  //getPeople(): Observable<creature[]> {
    //return of();
  //}
  getPerson(id: number): Observable<creature> {
    const url = 'https://swapi.co/api/people/';
    console.log("je suis dans getPERSON de cometogetherseervice")
    return this.http.get<PersonComponent["person"]>(url+id);
    //return of(PeopleComponent.find(creature => this.getPeople.Response.body.results[id] === creature))
  }
}
