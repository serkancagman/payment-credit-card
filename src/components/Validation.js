import { object, string, number, } from 'yup';
import react from 'react';

const CardSchema = object({
    name: string("Can not inside a number.")
      .min(2, 'This is not a name.')
      .required('Required field'),
    surname: string()
      .min(2, 'This is not a surname.')
      .required('Required field'),
    cardNumber: string().required('Required field.').max(19,"This is not a card number")
    .min(19,"This is not a card number"),
    cvv: string().required("CVV is a Required field.").max(3).min(3,"This is not a CVV number.")
  });

  export default CardSchema;
