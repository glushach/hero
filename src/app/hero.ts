export interface Hero {
  id: number;
  name: string;
}

export class Hero1 {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
