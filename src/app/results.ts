import { ArrayType } from '@angular/compiler';

export class results {
    Arrayid : Array<id>
}
export class id {
    creature : creature;
}
export class creature {
    name: string;
    species: string;
    vehicles: string;
}