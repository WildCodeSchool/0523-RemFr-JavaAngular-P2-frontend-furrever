export class Location {
  constructor(
    public id: string,
    public street: string | null,
    public streetNumber: string | null,
    public additionalAddress: string | null,
    public city: string | null,
    public zipCode: string | null
  ) {}
}
