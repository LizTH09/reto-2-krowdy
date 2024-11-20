/* eslint-disable no-unused-labels */

import { groupBy } from 'es-toolkit';

const templates = [
  {
    value: "invitacion",
    type: 'Invitacion Correo',
    chanel: 'Correo',
    subject: 'Invitacion a proceso',
    message: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra más información aquí: [Link]'
  },
  {
    value: "invitacion",
    type: 'Invitacion SMS o Whatsapp',
    chanel: 'SMS o Whatsapp',
    message: 'Hola, [userName] hemos visto tu perfil y nos parece interesante. Encuentra más información aquí: [Link]'
  },
  {
    value: "recordatorio",
    type: 'Recordatorio Correo',
    chanel: 'Correo',
    subject: 'Recordatorio de proceso',
    message: 'Hola, [userName] nos gustaría recordarte que tienes pendiente un proceso. Entra aquí para continuar [Link]'
  },
  {
    value: "recordatorio",
    type: 'Recordatorio SMS o Whatsapp',
    chanel: 'SMS o Whatsapp',
    message: 'Hola, [userName] nos gustaría recordarte que tienes pendiente un proceso. Entra aquí para continuar [Link]'
  },
  {
    value: "personalizado",
    type: 'Personalizado Correo',
    chanel: 'Correo',
    subject: 'Vacio',
    message: 'Vacio'
  },
  {
    value: "personalizado",
    type: 'Personalizado SMS o Whatsapp',
    chanel: 'SMS o Whatsapp',
    message: 'Vacio'
  }
];


export const messageTemplates = groupBy(templates, 'chanel');
