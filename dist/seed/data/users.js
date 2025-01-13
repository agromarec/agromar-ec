"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_SEED = void 0;
const client_1 = require("@prisma/client");
const roles_enum_1 = require("../../auth/enums/roles.enum");
exports.USERS_SEED = [
    {
        name: 'Admin',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: 'Admin',
        email: 'admin@admin.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: 'soy el admin',
        paypalEmail: 'admin@admin.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            create: {
                role_ce: {
                    connect: {
                        id_role: roles_enum_1.Role.Admin,
                    }
                }
            }
        }
    },
    {
        name: 'Ecuador',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'gobierno@gobierno.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.GOBIERNO,
        businessDescription: `  `,
        paypalEmail: 'gobierno@gobierno.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'Coorporación Favorita',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'lafavorita@lafavorita.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `Corporación Favorita y sus filiales comerciales, industriales e inmobiliarias tienen presencia en todo el país. Sus diferentes líneas de negocio y formatos adaptan el modelo de oferta de productos, servicios y experiencias, a las realidades locales, según sus necesidades. En el ámbito internacional, las filiales de la Corporación tienen actividades en cinco países de la región, además de en Ecuador.`,
        paypalEmail: 'lafavorita@lafavorita.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'El Rosado',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'elrosado@elrosado.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `En la actualidad, Corporación El Rosado es una de las empresas más importantes del Ecuador. Además de ser también un ejemplo de   innovación y desarrollo, genera miles de plazas de trabajo en sus   actividades de diversos tipos. La corporación posee cadenas de supermercados, jugueterías,   tiendas por departamentos,  home centers,  tiendas de música y   video, distribuidos en las   ciudades más importantes del país.`,
        paypalEmail: 'elrosado@elrosado.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'Cervecería Nacional',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'cerveceria@cerveceria.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `Corporación Nacional de Cervecería, S.A. es una empresa de Cervecería y de Producción Agrícola, con sede en Quito, Ecuador. La empresa nacional de cerveza, cervezas y vino, es la principal empresa de cerveza en Ecuador, con una presencia en todo el país. En la actualidad, la empresa nacional de cerveza, cervezas y vino, es una de las empresas más importantes del Ecuador. Además de ser también un ejemplo de innovación y desarrollo, genera miles de plazas de trabajo en sus actividades de diversos tipos. La corporación posee cadenas de supermercados, jugueterías, tiendas por departamentos, home centers, tiendas de música y video, distribuidos en las ciudades más importantes del país.`,
        paypalEmail: 'cerveceria@cerveceria.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'Banco del Pacífico',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'banco@banco.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `Banco del Pacífico es una de las principales instituciones financieras del Ecuador. La empresa nacional de banca, banco y cajero, es la principal institución financiera del Ecuador, con una presencia en todo el país. En la actualidad, la empresa nacional de banca, banco y cajero, es una de las empresas más importantes del Ecuador. Además de ser también un ejemplo de innovación y desarrollo, genera miles de plazas de trabajo en sus actividades de diversos tipos. La corporación posee cadenas de supermercados, jugueterías, tiendas por departamentos, home centers, tiendas de música y video, distribuidos en las ciudades más importantes del país.`,
        paypalEmail: 'banco@banco.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'ReyBanPac',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'reybanpac@reybanpac.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `Las exportaciones efectuadas por Reybanpac han sido de constante crecimiento, desde un millón de cajas exportadas inicialmente, a 27 millones en los últimos años. El banano exportado es de primera calidad de la variedad Cavendish, en cajas de cartón que contienen 18.14kg, 14kg o 13kg netos de fruta, conforme a las preferencias de los diferentes mercados de consumo.`,
        paypalEmail: 'reybanpac@reybanpac.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'Pronaca',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'pronaca@pronaca.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.EMPRESA,
        businessDescription: `Pronaca es una empresa de limones, frutas y pescados, con sede en Quito, Ecuador. La empresa nacional de cerveza, cervezas y vino, es la principal empresa de cerveza en Ecuador, con una presencia en todo el país. En la actualidad, la empresa nacional de cerveza, cervezas y vino, es una de las empresas más importantes del Ecuador. Además de ser también un ejemplo de innovación y desarrollo, genera miles de plazas de trabajo en sus actividades de diversos tipos. La corporación posee cadenas de supermercados, jugueterías, tiendas por departamentos, home centers, tiendas de música y video, distribuidos en las ciudades más importantes del país.`,
        paypalEmail: 'pronaca@pronaca.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'Cliente 1',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'cliente1@cliente1.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.CLIENTE,
        businessDescription: `Ofrezco de productos de alta calidad, con una amplia variedad de productos, desde alimentos, bebidas y bebidas alcohólicas hasta alimentos y bebidas de origen vegetal, alimentos de origen animal, alimentos vegetales, productos de limpieza y productos para el hogar. Ofrece una amplia gama de productos, desde alimentos, bebidas y bebidas alcohólicas hasta alimentos y bebidas de origen vegetal, alimentos de origen animal, alimentos vegetales, productos de limpieza y productos para el hogar.`,
        paypalEmail: 'cliente1@cliente1.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    },
    {
        name: 'cliente 2',
        password: '$2b$10$c32TRem6tNS4bgyUDGHFBeOZ.ErUzMbq2mR0imALDiGANkUybUfSy',
        lastName: '',
        email: 'cliente2@cliente2.com',
        phone: '123456789',
        address: 'Calle de la República, 123',
        creation_date: new Date(),
        creation_user: 'system',
        userType: client_1.UserType.CLIENTE,
        businessDescription: `Ofrezco de productos de alta calidad, con una amplia variedad de productos, desde alimentos, bebidas y bebidas alcohólicas hasta alimentos y bebidas de origen vegetal, alimentos de origen animal, alimentos vegetales, productos de limpieza y productos para el hogar. Ofrece una amplia gama de productos, desde alimentos, bebidas y bebidas alcohólicas hasta alimentos y bebidas de origen vegetal, alimentos de origen animal, alimentos vegetales, productos de limpieza y productos para el hogar.`,
        paypalEmail: 'cliente2@cliente2.com',
        pais_ce: {
            connect: {
                id_pais: 22,
            }
        },
        canton_ce: { connect: { id: 81 } },
        user_role: {
            createMany: {
                data: [
                    {
                        roleId: roles_enum_1.Role.Vendedor,
                    },
                    {
                        roleId: roles_enum_1.Role.Comprador,
                    }
                ]
            }
        }
    }
];
//# sourceMappingURL=users.js.map