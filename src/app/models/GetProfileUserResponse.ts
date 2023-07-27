import { Animal } from "./Animal";
import { Service } from "./Service";
import { UserProfile } from "./UserProfile";

export type GetProfileUserResponse = {
  animalTemplateList: Animal[];
  serviceTemplateList: Service[];
  nbPendingTransactions: number;
  userProfile: UserProfile;
};
