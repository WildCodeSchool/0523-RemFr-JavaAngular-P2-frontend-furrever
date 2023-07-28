export class Comment {
  constructor(
    public firstname: string | null,
    public initialLastName: string | null,
    public date: string | null,
    public note: number,
    public content: string | null
  ) {}
}
