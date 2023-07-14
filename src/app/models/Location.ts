export class Location {
  constructor(
    public id: string,
    public street: string,
    public streetNumber: string | null,
    public additionalAddress: string | null,
    public city: string,
    public zipCode: string
  ) {}
}
