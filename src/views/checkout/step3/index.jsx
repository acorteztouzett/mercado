import { CHECKOUT_STEP_1 } from 'constants/routes';
import { Form, Formik } from 'formik';
import { displayActionMessage } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';
import CreditPayment from './CreditPayment';
import PayPalPayment from './PayPalPayment';
import Total from './Total';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre debe ser de al menos 4 caracteres.')
    .required('El nombre es requerido.'),
  cardnumber: Yup.string()
    .min(13, 'El numero de tarjeta debe ser de al menos 13 caracteres.')
    .max(19, 'El numero de tarjeta debe ser de maximo 19 caracteres.')
    .required('El numero de tarjeta es requerido.'),
  expiry: Yup.date()
    .required('La fecha de expiracion es requerida.'),
  ccv: Yup.string()
    .min(3, 'El CCV debe ser de al menos 3 caracteres.')
    .max(4, 'El CCV debe ser de maximo 4 caracteres.')
    .required('El CCV es requerido.'),
  type: Yup.string().required('Por favor seleccione un metodo de pago.')
});

const Payment = ({ shipping, payment, subtotal }) => {
  useDocumentTitle('Procesar compra-Paso 3');
  useScrollTop();

  const initFormikValues = {
    name: payment.name || '',
    cardnumber: payment.cardnumber || '',
    expiry: payment.expiry || '',
    ccv: payment.ccv || '',
    type: payment.type || 'paypal'
  };

  const onConfirm = () => {
    displayActionMessage('Feature not ready yet :)', 'info');
  };

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  return (
    <div className="checkout">
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        validate={(form) => {
          if (form.type === 'paypal') {
            displayActionMessage('Feature not ready yet :)', 'info');
          }
        }}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className="checkout-step-3">
            <CreditPayment />
            <PayPalPayment />
            <Total
              isInternational={shipping.isInternational}
              subtotal={subtotal}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string
  }).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(Payment);
