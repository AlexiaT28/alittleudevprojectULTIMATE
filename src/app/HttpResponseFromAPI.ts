import { ArrayType } from '@angular/compiler';

export class HttpResponseFromAPI {
    body : body 
}
export class body {
    results : Array<creature>
}
//export class id {
    //creature : creature;
//}
export class creature {
    name: string;
    species: string;
    vehicles: string;
}
