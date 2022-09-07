import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validateCPF = (cpf: string): any => {
  if (cpf) {
    if (cpf.length !== 11) return false;
    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    )
      return false;
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;
    return true;
  }
};

const validateCPFNumbers = (cpf: string) => {
  const regex = new RegExp('^[0-9]+$');
  return regex.test(cpf);
};

const verifyIfDateIsInThePast = (date: string): boolean => {
  const today = new Date();
  const dateToVerify = new Date(date);
  if (dateToVerify > today) return false;
  return true;
};

const validateLat = (value: string) => {
  const lat = parseFloat(value);
  if (lat > 90 || lat < -90) return false;
  return true;
};

const validaLong = (value: string) => {
  const long = parseFloat(value);
  if (long > 180 || long < -180) return false;
  return true;
};

const RegisterNewCommunicationSchema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('O e-mail não é válido')
    .required('E-mail é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .test('cpf', 'CPF deve conter apenas números', (value) =>
      validateCPFNumbers(value as string)
    )
    .test('cpf', 'CPF inválido', (value) => validateCPF(value as string)),
  lavoura: yup.string().required('O tipo de lavoura é obrigatório'),
  latitude: yup
    .string()
    .required('Latitude é obrigatório')
    .test('latitude', 'Latitude inválida', (value) =>
      validateLat(value as string)
    ),
  longitude: yup
    .string()
    .required('Longitude é obrigatório')
    .test('longitude', 'Longitude inválida', (value) =>
      validaLong(value as string)
    ),
  evento: yup.string().required('O tipo de evento é obrigatório'),
  data: yup
    .string()
    .required('A data é obrigatória')
    .test('data', 'Não pode ser uma data futura', (value) =>
      verifyIfDateIsInThePast(value as string)
    ),
});

export const RegisterNewCommunicationResolver = yupResolver(
  RegisterNewCommunicationSchema
);
