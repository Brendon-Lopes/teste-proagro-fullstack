import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterNewCommunicationSchema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('O e-mail não é válido')
    .required('E-mail é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  lavoura: yup.string().required('O tipo de lavoura é obrigatório'),
  latitude: yup.string().required('Latitude é obrigatório'),
  longitude: yup.string().required('Longitude é obrigatório'),
  evento: yup.string().required('O tipo de evento é obrigatório'),
  data: yup.string().required('A data é obrigatória'),
});

export const RegisterNewCommunicationResolver = yupResolver(
  RegisterNewCommunicationSchema
);
