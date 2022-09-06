import { Api } from 'providers';

const getAll = () => Api.get('/loss-events');
const getById = (id: string) => Api.get(`/loss-events/${id}`);

export const EventsServices = {
  getAll,
  getById,
};
