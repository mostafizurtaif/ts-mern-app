export class MongoValidationError extends Error {
  private static statusCode: number = 400;
  private static errorName: string = "ValidationError";

  public static getStatusCode(): number {
    return this.statusCode;
  }

  static [Symbol.hasInstance](instance: Error) {
    return instance.name === this.errorName;
  }
}
