import { Component, OnInit } from '@angular/core';
import { creature } from '../creature';
//import { CometogetherService } from '../cometogether.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
//import { results, id } from '../results';
import { HttpResponseFromAPI } from '../HttpResponseFromAPI';
import { PersonComponent } from '../person/person.component';
import { CometogetherService } from '../cometogether.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [ CometogetherService]
})

export class PeopleComponent implements OnInit {
  person : creature
  people : Array<person>;
  globalpeoplearray : Array<creature>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.globalpeoplearray = CometogetherService.getPeople();
  }
  //returnPeople(response: Array<creature>) {
    //return this.http.post<Array<creature>>(`https://swapi.co/api/people`, PeopleComponent)
  //}
  //getPeople(): void{
    //this.cometogether.getPeople().subscribe(people -> this.people = people);
    //this.http.get<Array<creature>>(`https://swapi.co/api/people/`).subscribe((response: Array<creature>) => {
      //console.log(response);
      // logs the array of people
      //this.returnPeople(response);
      //});
  //}
  getPeople(): void {
    this.http.get(`https://swapi.co/api/people`, { observe: 'response' }).subscribe((response:HttpResponse<HttpResponseFromAPI>) => {
        //console.log(response.status); // logs 200
        console.log(response); // logs []
        //console.log(response.type); // logs []
        //console.log(response.body.count);
        //console.log(response.body.results[1]);
        //console.log(response.body.results.length);
        console.log(response.body.results);
        console.log(response.body.results[1].name);
        //this.http.post<HttpResponse<creature>>(`./people.component.html`, this.people)
        let globalpeoplearray = []
        for (var x=0; x<response.body.results.length; x++){
          globalpeoplearray.push(response.body.results[x].name)
          console.log(response.body.results[x].name)
          //console.log(response.body.results[x].species = this.people.species);
          //console.log(response.body.results[x].vehicles = this.people.vehicles);
        }
        console.log(globalpeoplearray);
        return globalpeoplearray;
      })
    //this.http.get(`https://swapi.co/api/people`, { observe: 'response' }).subscribe(people => people = people);
  }
  //getPeople() {
    //CometogetherService.getPeople().subscribe(people => this.people = people)
  //}
}
