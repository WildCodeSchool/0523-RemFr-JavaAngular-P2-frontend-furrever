export class SearchRequest {
  constructor(public city: string | null, public typeService: string | null, public species: string[]) {}
}
