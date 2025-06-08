import { useState } from "react";
import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/common/Button";
import CustomCheckBox from "../../components/common/CheckBox";
import LabeledInput from "../../components/common/LabelInput";
import LinkText from "../../components/common/LinkText";
import en from "../../locales/en";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../stores/auth/authActions"; // import action thunk

export default function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate email format
  const validateEmail = (value) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      return `${en.signUp.email} ${en.signUp.validation.invalid}`;
    return "";
  };

  // Validate password format
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
    console.log(process.env.REACT_APP_API_URL_SIGNUP);
    // Validate inputs
    const fnErr = firstName
      ? ""
      : `${en.signUp.firstName} ${en.signUp.validation.required}`;
    const lnErr = lastName
      ? ""
      : `${en.signUp.lastName} ${en.signUp.validation.required}`;
    const emailErr = email
      ? validateEmail(email)
      : `${en.signUp.email} ${en.signUp.validation.required}`;
    const pwdErr = password
      ? validatePassword(password)
      : `${en.signUp.password} ${en.signUp.validation.required}`;

    setFirstNameError(fnErr);
    setLastNameError(lnErr);
    setEmailError(emailErr);
    setPasswordError(pwdErr);

    if (!fnErr && !lnErr && !emailErr && !pwdErr) {
      const payload = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(
        signUp(
          payload,
          () => {
            navigate("/dashboard");
          },
          (errorMessage) => {
            console.error(errorMessage);
            const emailErr = `${en.signUp.email} ${en.signUp.validation.invalid}`;
            setEmailError(emailErr);
          }
        )
      ).then(() => {});
    }
  };

  return (
    <Row
      className="w-100 d-flex flex-column justify-content-between"
      style={{ gap: "14px" }}
    >
      <LabeledInput
        label={en.signUp.firstName}
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder={en.signUp.placeholder.firstName}
        validationMsg={firstNameError}
      />
      <LabeledInput
        label={en.signUp.lastName}
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder={en.signUp.placeholder.lastName}
        validationMsg={lastNameError}
      />
      <LabeledInput
        label={en.signUp.email}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={en.signUp.placeholder.email}
        validationMsg={emailError}
      />
      <LabeledInput
        label={en.signUp.password}
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={en.signUp.placeholder.password}
        validationMsg={passwordError}
      />

      <CustomCheckBox
        label={
          <span>
            {en.signUp.agreement}{" "}
            <LinkText href="#">{en.signUp.terms}</LinkText>
          </span>
        }
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Signing Up..." : en.signUp.signUp}
      </Button>

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
        {en.signUp.hasAccount}{" "}
        <LinkText href="/signin">{en.signUp.signIn}</LinkText>
      </p>
    </Row>
  );
}
