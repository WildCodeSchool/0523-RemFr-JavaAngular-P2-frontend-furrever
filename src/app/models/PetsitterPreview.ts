import { Comment } from "./Comment";
import { Service } from "./Service";

export class PetsitterPreview {
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

export type ResponsePetSitter = {
  commentTemplateList: Comment[];
  petSitterProfile: PetsitterResponse;
  serviceTemplateList: Service[];
};

export type PetsitterResponse = {
  idPetsitter: string;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  password: string | null;
  description: string;
  isPetSitter: boolean | null;
  picture: string | null;
  street: string;
  city: string;
  rating: number;
  ratingQuantity: number;
  zipCode: string;
};
