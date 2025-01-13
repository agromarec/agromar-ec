import { Prisma } from '@prisma/client';

export const UNIT_MESURES_SEED: Prisma.unit_of_measureCreateInput[] = [
  {
    'name': 'Kilogramo',
    'abreviature': 'kg'
  },
  {
    'name': 'Tonelada métrica',
    'abreviature': 't'
  },
  {
    'name': 'Libra',
    'abreviature': 'lb'
  },
  {
    'name': 'Arroba',
    'abreviature': 'arroba'
  },
  {
    'name': 'Litro',
    'abreviature': 'L'
  },
  {
    'name': 'Metro cúbico',
    'abreviature': 'm³'
  },
  {
    'name': 'Galón',
    'abreviature': 'gal'
  },
  {
    'name': 'Docena',
    'abreviature': 'docena'
  },
  {
    'name': 'Ciento',
    'abreviature': 'ciento'
  },
  {
    'name': 'Hectárea',
    'abreviature': 'ha'
  }
];

