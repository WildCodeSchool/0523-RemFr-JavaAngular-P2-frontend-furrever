import { Species } from "./Species";

export class Service {
  constructor(
    public id: string,
    public description: string,
    public price: number,
    public typeService: string,
    public weightMin: number | null,
    public weightMax: number | null,
    public speciesList: Species[],
    public healer: boolean
  ) {}
}
