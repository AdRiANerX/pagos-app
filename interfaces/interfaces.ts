export interface ICollector {
  _id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IPerson {
  _id?: string;
  name: string;
  manzana: string;
  birthdate: string;
  street: string;
  movilPhone: string;
  civilState: string;
  abonos: Abono[];
  __v?: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface Abono {
  _id?: string;
  date: string;
  quantity: number;
  idCollector: string;
  nameOfCollector: string;
  createdAt?: string;
  updatedAt?: string;
}
