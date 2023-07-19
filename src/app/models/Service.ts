export class Service {
  constructor(
    public description: string,
    public price: number,
    public species: string,
    public typeService: string,
    public weightMin: number | null,
    public weightMax: number | null,
    public healer: boolean
  ) {}
}
