export class PetsitterPreview {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public description: string | null,
    public picture: string | null,
    public price: number,
    public rating: number,
    public noteNumber: number
  ) {}
}
