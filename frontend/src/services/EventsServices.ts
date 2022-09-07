import { ISendEvent } from 'interfaces';
import { Api } from 'providers';

const getAll = () => Api.get('/loss-events');

const getById = (id: string) => Api.get(`/loss-events/${id}`);

const create = async (data: ISendEvent) => {
  const formattedData = {
    nome: data.nome,
    email: data.email,
    cpf: data.cpf,
    tipoLavoura: data.lavoura,
    dataColheita: new Date(data.data).toISOString(),
    evento: data.evento,
    localizacao: {
      LAT: +data.latitude,
      LONG: +data.longitude,
    },
  };

  try {
    await Api.post('/loss-events', formattedData);
  } catch (error: any) {
    return error?.response;
  }
};

export const EventsServices = {
  getAll,
  getById,
  create,
};
