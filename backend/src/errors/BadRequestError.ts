export class BadRequestError extends Error {
  private statusCode: number = 400;

  constructor(message: string) {
    super(message);
  }

  public getStatusCode(): number {
    return this.statusCode;
  }
}
