export class User {
  static isAdmin(isAdmin: any) {
    throw new Error('Method not implemented.');
  }
  id?: string;
  Name: string;
  Email: string;
  Password: string;
  CPF: string;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
