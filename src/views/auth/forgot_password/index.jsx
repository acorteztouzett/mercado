import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDidMount, useDocumentTitle, useScrollTop } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from 'redux/actions/authActions';

const ForgotPassword = () => {
  const { authStatus, isAuthenticating } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    authStatus: state.app.authStatus
  }));
  const dispatch = useDispatch();
  const didMount = useDidMount();
  const [forgotPWStatus, setForgotPWStatus] = useState({});
  const [isSendingForgotPWRequest, setIsSending] = useState(false);
  const [field, setField] = useState({});

  useScrollTop();
  useDocumentTitle('Recuperar contraseña');
  useEffect(() => {
    if (didMount) {
      setForgotPWStatus(authStatus);
      setIsSending(isAuthenticating);
    }
  }, [authStatus, isAuthenticating]);

  const onEmailChange = (value, error) => {
    setField({ email: value, error });
  };

  const onSubmitEmail = () => {
    if (!!field.email && !field.error) {
      dispatch(resetPassword(field.email));
    }
  };

  return (
    <div className="forgot_password">
      {forgotPWStatus.message && (
        <h5 className={`text-center ${authStatus?.success ? 'toast-success' : 'toast-error'}`}>
          {authStatus.message}
        </h5>
      )}
      <h3>Olvidaste tu contraseña?</h3>
      <p>Ingresa tu email y te enviaremos un correo con los pasos a seguir</p>
      <br />
      <input
        field="email"
        required
        className="input-form"
        label="* Email"
        maxLength={40}
        onChange={onEmailChange}
        placeholder="Ingresa tu email aqui"
        readOnly={isSendingForgotPWRequest || authStatus?.success}
        type="email"
        style={{ width: '100%' }}
      />
      <br />
      <br />
      <button
        className="button w-100-mobile"
        disabled={isSendingForgotPWRequest || authStatus?.success}
        onClick={onSubmitEmail}
        type="button"
      >
        {isSendingForgotPWRequest ? <LoadingOutlined /> : <CheckOutlined />}
        &nbsp;
        {isSendingForgotPWRequest ? 'Enviando correo de recuperación' : 'Enviar correo de recuperación'}
      </button>
    </div>
  );
};

export default ForgotPassword;
