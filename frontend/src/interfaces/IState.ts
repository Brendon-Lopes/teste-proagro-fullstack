interface State {
  cpf: string;
  dataColheita: string;
  email: string;
  evento: string;
  localizacao: {
    LAT: number;
    LONG: number;
  };
  nome: string;
  tipoLavoura: string;
  _id: {
    $oid: string;
  };
}

export interface IState {
  state: State;
}
