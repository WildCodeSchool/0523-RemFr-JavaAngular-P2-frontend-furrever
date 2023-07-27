import { Species } from "./Species";

export class Animal {
  constructor(
    public firstname: string | null,
    public weight: string | null,
    public birthday: string | null,
    public species: Species | null,
    public description: string | null
  ) {}
}
