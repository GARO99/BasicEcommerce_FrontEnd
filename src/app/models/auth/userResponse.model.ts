export interface UserResponse {
  idUser: number;
  idNumberPerson: string;
  email: string;
  person:{
    idNumber: string;
    firstName: string;
    lastName: string;
  }
}