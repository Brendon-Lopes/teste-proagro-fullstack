export interface IObjectId {
  $oid: string;
}

export interface ILocation {
  LAT: number;
  LONG: number;
}

export interface IEvent {
  _id: IObjectId;
  nome: string;
  email: string;
  cpf: string;
  localizacao: ILocation;
  tipoLavoura: string;
  dataColheita: string;
  evento: string;
}
