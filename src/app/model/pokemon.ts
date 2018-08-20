export class Pokemon {
  private _name: string;
  private _nummer: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nummer(): string {
    return this._nummer;
  }

  set nummer(value: string) {
    this._nummer = value;
  }
}
