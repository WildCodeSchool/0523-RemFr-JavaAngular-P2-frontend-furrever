import { Species } from "./Species";

export class Animal {
  constructor(
    public firstName: string | null,
    public birthday: string | null,
    public species: Species | null,
    public description: string | null
  ) {}
}
