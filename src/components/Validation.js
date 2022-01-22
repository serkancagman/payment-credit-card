import { object, string} from 'yup';

const CardSchema = object({
    name: string("Can not inside a number.")
      .min(2, 'This is not a name.')
      .required('name is a required field'),
    surname: string()
      .min(2, 'This is not a surname.')
      .required('Surname is a required field'),
    cardNumber: string().required('Card number is a required field.').max(19,"This is not a card number")
    .min(19,"This is not a card number"),
    cvv: string().required("CVV is a required field.").max(3).min(3,"This is not a CVV number.")
  });

  export default CardSchema;
