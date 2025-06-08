import { useState } from 'react';
import {  Row } from 'reactstrap';
import Button from '../../components/common/Button';
import CustomCheckBox from '../../components/common/CheckBox';
import LabeledInput from '../../components/common/LabelInput';
import LinkText from '../../components/common/LinkText';
import en from '../../locales/en';
import { useDispatch } from 'react-redux';
import { signIn } from '../../stores/auth/authActions';  // import action thunk
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validate email format
  const validateEmail = (value) => {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value))
      return `${en.signUp.email} ${en.signUp.validation.invalid}`;
    return "";
  };

  // Validate password length
  const validatePassword = (value) => {
    if (
      value.length < 6 ||
      value.length > 18 ||
      !/[a-zA-Z]/.test(value) ||
      !/\d/.test(value) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(value)
    )
      return `${en.signUp.password} ${en.signUp.validation.invalid}`;
    return "";
  };

  const handleSubmit = () => {
     // Validate inputs
    const emailErr = email ? validateEmail(email) : `${en.signIn.email} ${en.signIn.validation.required}`;
    const pwdErr = password ? validatePassword(password) : `${en.signIn.password} ${en.signIn.validation.required}`;

    setEmailError(emailErr);
    setPasswordError(pwdErr);

    if (emailErr || pwdErr) return;

    const payload = { email, password };

    dispatch(signIn(
      payload,
      () => {
        navigate('/dashboard');
      },
      (errorMessage) => {
        const emailErr =  `${en.signIn.email} ${en.signIn.validation.invalid}`;
        const pwdErr = `${en.signIn.password} ${en.signIn.validation.invalid}`;
        console.log(pwdErr, emailErr, errorMessage);
        setEmailError(emailErr);
        setPasswordError(pwdErr);
      }
    ))      
  };

  return (
      <Row className="w-100 d-flex flex-column justify-content-between align-items-center" style={{gap: '14px'}}>
        <LabeledInput
          label={en.signIn.email}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={en.signIn.placeholder.email}
          validationMsg={emailError}
        />
        <LabeledInput
          label={en.signIn.password}
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={en.signIn.placeholder.password}
          validationMsg={passwordError}
        />

        <CustomCheckBox
          label={
            <span>
              {en.signIn.rememberMe}{" "}
            </span>
          }
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        <Button onClick={handleSubmit}>{en.signIn.signIn}</Button>

        <p
        className="mb-0"
          style={{
            color: "var(--text-secondary-color)",
            fontWeight: "400",
            fontSize: "14px",
            width: "100%",
            textAlign: "center",
            lineHeight: "21px",
          }}
        >
          {en.signIn.newMember}{" "}
          <LinkText href="/signup">{en.signIn.signUp}</LinkText>
        </p>
      </Row>
  );
}
