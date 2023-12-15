import { Props } from '../../interfaces/input';

export const firstSection: Props[] = [
  {
    title: 'Nombre*',
    inputName: 'name',
    inputType: 'text',
    value: '',
  },
  {
    title: 'Primer apellido*',
    inputName: 'firstSurname',
    inputType: 'text',
    value: '',
  },
  {
    title: 'Segundo apellido',
    inputName: 'secondSurname',
    inputType: 'text',
    value: '',
  },
];

export const secondSection: Props[] = [
  {
    title: 'CURP*',
    inputName: 'curp',
    inputType: 'text',
    value: '',
  },
  {
    title: 'RFC (con homoclave)*',
    inputName: 'rfc',
    inputType: 'text',
    value: '',
  },
];

export const thirdSection: Props[] = [
  {
    title: 'Codigo postal*',
    inputName: 'postalCode',
    value: '',
    inputType: 'number',
  },
  {
    title: 'Calle*',
    inputName: 'street',
    value: '',
    inputType: 'text',
  },
];

export const fourthSection: Props[] = [
  {
    title: 'Numero exterior*',
    inputName: 'exteriorNumber',
    value: '',
    inputType: 'number',
  },
  {
    title: 'Numero interior',
    inputName: 'interiorNumber',
    value: '',
    inputType: 'text',
  },
  {
    title: 'Estado*',
    inputName: 'state',
    value: '',
    inputType: 'text',
  },
];

export const fivethSection: Props[] = [
  {
    title: 'Delegacion / Municipio*',
    inputName: 'region',
    value: '',
    inputType: 'text',
  },
  {
    title: 'Colonia*',
    inputName: 'neighborhood',
    value: '',
    inputType: 'text',
  },
];
