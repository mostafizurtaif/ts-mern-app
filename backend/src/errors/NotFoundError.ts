export class NotFoundError extends Error {
  private statusCode: number = 404;

  constructor(message: string) {
    super(message);
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public toString(): string {
    return `NotFoundError: ${this.message}`;
  }
}
