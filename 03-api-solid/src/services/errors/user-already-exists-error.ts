export class UserAlreadyExistisError extends Error {
  constructor() {
    super('Email already existis.')
  }
}
