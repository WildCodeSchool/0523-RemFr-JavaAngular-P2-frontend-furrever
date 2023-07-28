import { Animal } from "./Animal";
import { Service } from "./Service";
import { UserProfile } from "./UserProfile";
import { Comment } from "./Comment";

export type GetProfileUserResponse = {
  animalTemplateList: Animal[];
  serviceTemplateList: Service[];
  commentTemplateList: Comment[];
  // commentTemplateListIfIAmUser: Comment[];
  nbPendingTransactions: number;
  userProfile: UserProfile;
};
