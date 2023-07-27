import { Location } from "./Location";

export class UserProfile {
  constructor(
    public idPetsitter: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public description: string | null,
    public picture: string | null,
    public price: number,
    public rating: number,
    public ratingQuantity: number,
    public isPetSitter: boolean,
    public location: Location | null
  ) {}
}

export type User = {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  password: string | null;
  isPetSitter: boolean | null;
  picture: string | null;
  location: Location | null;
  description: string | null;
};
