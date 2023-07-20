import { Location } from "./Location";
import { Comment } from "./Comment";

export class PetsitterViewByOwner{
  constructor(
    public idPetsitter: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public description: string | null,
    public picture: string | null,
    public price: number,
    public rating: number,
    public ratingQuantity: number
  ) {}
}
