import { Prisma } from '@prisma/client';


export const GENERATE_PRODUCT_DATA = (sellerId: number, unitOfMesures: Prisma.unit_of_measureGetPayload<{ select: { abreviature: true, id: true } }>[]): Prisma.predefined_productCreateInput[] => {
  const kgId = unitOfMesures.find(unit => unit.abreviature === 'kg')?.id;
  const tId = unitOfMesures.find(unit => unit.abreviature === 't')?.id;
  const lbId = unitOfMesures.find(unit => unit.abreviature === 'lb')?.id;
  const arrobaId = unitOfMesures.find(unit => unit.abreviature === 'arroba')?.id;
  const litroId = unitOfMesures.find(unit => unit.abreviature === 'L')?.id;
  const m3Id = unitOfMesures.find(unit => unit.abreviature === 'm³')?.id;
  const galonId = unitOfMesures.find(unit => unit.abreviature === 'gal')?.id;
  const docenaId = unitOfMesures.find(unit => unit.abreviature === 'docena')?.id;
  const cientoId = unitOfMesures.find(unit => unit.abreviature === 'ciento')?.id;
  const haId = unitOfMesures.find(unit => unit.abreviature === 'ha')?.id;

  const camaroneraId = 28;
  const favoritaId = 23;

  return [
    {
      name: 'Camarón entero',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Mariscos',
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 12.5,
              stock: 100,
              description: 'Camarón entero fresco con cabeza y cola.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 50,
              stock: 40,
              description: 'Camarón congelado sin cáscara en bloques.',
              seller_id: camaroneraId,
              unitOfMeasureId: arrobaId,
            },
            {
              price: 1300,
              stock: 10,
              description: 'Camarón premium para exportación.',
              seller_id: camaroneraId,
              unitOfMeasureId: tId,
            },
            {
              price: 25.5,
              stock: 80,
              description: 'Camarón congelado sin cabeza, ideal para exportación.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 10,
              stock: 150,
              description: 'Camarón pequeño con cáscara.',
              seller_id: camaroneraId,
              unitOfMeasureId: lbId,
            },
            {
              price: 1100,
              stock: 8,
              description: 'Camarón gigante para mercados internacionales.',
              seller_id: camaroneraId,
              unitOfMeasureId: tId,
            },
            {
              price: 75,
              stock: 25,
              description: 'Camarón premium pelado y desvenado.',
              seller_id: camaroneraId,
              unitOfMeasureId: arrobaId,
            },
          ],
          skipDuplicates: true
        }
      }
    },
    {
      name: 'Arroz orgánico',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Granos',
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 1.2,
              stock: 500,
              description: 'Arroz blanco premium de grano largo.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 48,
              stock: 20,
              description: 'Sacos de arroz integral de 40 kilogramos.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 1000,
              stock: 5,
              description: 'Arroz empaquetado a granel para exportación.',
              seller_id: camaroneraId,
              unitOfMeasureId: tId,
            },
            {
              price: 1.8,
              stock: 400,
              description: 'Arroz orgánico tipo extra.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 52,
              stock: 30,
              description: 'Sacos de arroz parbolizado.',
              seller_id: camaroneraId,
              unitOfMeasureId: kgId,
            },
            {
              price: 1100,
              stock: 3,
              description: 'Arroz de exportación empaquetado.',
              seller_id: camaroneraId,
              unitOfMeasureId: tId,
            },
            {
              price: 45,
              stock: 20,
              description: 'Arroz blanco para mercados locales.',
              seller_id: camaroneraId,
              unitOfMeasureId: arrobaId,
            },
          ],
          skipDuplicates: true
        }
      }
    },
    {
      name: 'Aceite de palma',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Aceites',
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 2.5,
              stock: 300,
              description: 'Botella de aceite de palma refinado de un litro.',
              seller_id: favoritaId,
              unitOfMeasureId: litroId,
            },
            {
              price: 20,
              stock: 50,
              description: 'Bidón de 10 litros de aceite de palma.',
              seller_id: favoritaId,
              unitOfMeasureId: galonId,
            },
            {
              price: 150,
              stock: 20,
              description: 'Tambores industriales de aceite de palma de 200 litros.',
              seller_id: favoritaId,
              unitOfMeasureId: m3Id,
            },
            {
              price: 3,
              stock: 200,
              description: 'Botella de aceite de palma crudo.',
              seller_id: favoritaId,
              unitOfMeasureId: litroId,
            },
            {
              price: 22,
              stock: 40,
              description: 'Bidón de 20 litros de aceite vegetal.',
              seller_id: favoritaId,
              unitOfMeasureId: galonId,
            },
            {
              price: 170,
              stock: 15,
              description: 'Barril de aceite de palma refinado.',
              seller_id: favoritaId,
              unitOfMeasureId: m3Id,
            },
            {
              price: 65,
              stock: 60,
              description: 'Aceite de palma en tambores pequeños.',
              seller_id: favoritaId,
              unitOfMeasureId: kgId,
            },
          ],
          skipDuplicates: true
        }
      }
    },
    {
      name: 'Limón fresco',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Frutas',
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 0.5,
              stock: 1000,
              description: 'Lima ácida por unidad.',
              seller_id: sellerId,
              unitOfMeasureId: docenaId,
            },
            {
              price: 5,
              stock: 150,
              description: 'Caja de 10 kilogramos de limones frescos.',
              seller_id: sellerId,
              unitOfMeasureId: kgId,
            },
            {
              price: 200,
              stock: 10,
              description: 'Limones empaquetados para exportación.',
              seller_id: sellerId,
              unitOfMeasureId: tId,
            },
            {
              price: 0.6,
              stock: 900,
              description: 'Limón verde fresco por unidad.',
              seller_id: sellerId,
              unitOfMeasureId: docenaId,
            },
            {
              price: 8,
              stock: 120,
              description: 'Caja de limones de alta calidad.',
              seller_id: sellerId,
              unitOfMeasureId: kgId,
            },
            {
              price: 180,
              stock: 5,
              description: 'Limones empacados en grandes volúmenes.',
              seller_id: sellerId,
              unitOfMeasureId: tId,
            },
            {
              price: 4,
              stock: 180,
              description: 'Limones frescos para uso doméstico.',
              seller_id: sellerId,
              unitOfMeasureId: kgId,
            },
          ],
          skipDuplicates: true
        }
      },
    },
    {
      name: 'Banano de exportación',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Frutas'
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 6.5,
              stock: 200,
              description: 'Banano tipo Cavendish, calidad de exportación.',
              seller_id: sellerId,
              unitOfMeasureId: kgId
            },
            {
              price: 25,
              stock: 50,
              description: 'Caja de 20 kg de banano para exportación.',
              seller_id: sellerId,
              unitOfMeasureId: tId
            }
          ],
          skipDuplicates: true
        }
      }
    },
    {
      name: 'Tilapia fresca',
      creation_date: new Date(),
      creation_user: 'system',
      category: {
        create: {
          name: 'Pescados'
        }
      },
      product: {
        createMany: {
          data: [
            {
              price: 4,
              stock: 100,
              description: 'Tilapia entera, fresca y limpia.',
              seller_id: sellerId,
              unitOfMeasureId: kgId
            },
            {
              price: 80,
              stock: 15,
              description: 'Caja de 20 kg de tilapia congelada.',
              seller_id: sellerId,
              unitOfMeasureId: tId
            }
          ],
          skipDuplicates: true
        }
      }
    }
  ];
};
