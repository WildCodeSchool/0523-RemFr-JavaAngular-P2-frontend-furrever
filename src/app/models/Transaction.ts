export type Transaction = {
  idTransaction: string;
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
  commentedTransaction: boolean;
};

export type GetTransaction = {
  transactionForPetsitter: Transaction[];
  transactionFromUser: Transaction[];
  petsitter: boolean;
};

export type CreateTransactionResponse = {
  comment: null;
  content: string;
  dateEnd: string;
  dateStart: string;
  id: string;
};
