export interface userResponse {
  idUser: number;
  idNumberPerson: string;
  email: string;
  person:{
    idNumber: string;
    firstName: string;
    lastName: string;
  }
}