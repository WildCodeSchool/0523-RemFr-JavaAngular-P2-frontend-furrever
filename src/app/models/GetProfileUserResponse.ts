import { Animal } from "./Animal";
import { Service } from "./Service";
import { UserProfile } from "./UserProfile";

export type Transaction = {
  id: string;
  dateStart: string;
  dateEnd: string;
  status: boolean | null;
  content: string;
  typeService: string;
  price: number;
  ownerFirstName: string;
  ownerLastName: string;
  ownerEmail: string;
  petSitterFirstName: string;
  petSitterLastName: string;
  statusFlag: string | null;
};

export type GetProfileUserResponse = {
  animalTemplateList: Animal[];
  serviceTemplateList: Service[];
  transactionUserTemplateList: Transaction[];
  userProfile: UserProfile;
};
