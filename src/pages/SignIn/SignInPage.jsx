import  { useEffect } from 'react';
import signinImage from '../../assets/images/signin-banner.png';
import { Container} from 'reactstrap';
import IconButton from '../../components/common/Icon';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg'; 
import mailIcon from '../../assets/icons/mail-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import SectionDivider from '../../components/common/SectionDivider';
import AuthLayout from '../../layouts/AuthLayout';
import SignInForm from '../../components/auth/SignInForm';
import en from '../../locales/en';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    useEffect(() => {
    if (token != null) {
      navigate("/dashboard");
    }
  }, [navigate, token]);
  return (
    <AuthLayout image={signinImage}>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center m-0 p-0 "
        style={{ width: "344px", gap: "14px" }}
      >
        <div
          className="d-flex flex-column justify-content-start align-items-start w-100"
          style={{ gap: "8px", marginBottom: "9px" }}
        >
          <h4
            className="mb-0 w-100 text-start"
            style={{
              color: "var(--label-secondary-color)",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "100%",
            }}
          >
            {en.signIn.bigSlogan}
          </h4>
          <p
            className="mb-0 text-start"
            style={{
              color: "var(--label-primary-color)",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              width: "334px"
            }}
          >
            {en.signIn.slogan}
          </p>
        </div>

        <SignInForm />
        <SectionDivider text={en.signIn.or} />

        <div className="d-flex justify-content-center" style={{ gap: "11px" }}>
          <IconButton
            href="https://facebook.com"
            image={facebookIcon}
            backgroundColor="var(--icon-color-facebook)"
          />
          <IconButton
            href="https://twitter.com"
            image={twitterIcon}
            backgroundColor="var(--icon-color-twitter)"
          />
          <IconButton
            href="mailto:support@example.com"
            image={mailIcon}
            backgroundColor="var(--icon-color-mail)"
          />
          <IconButton
            href="https://github.com"
            image={githubIcon}
            backgroundColor="var(--icon-color-github)"
          />
        </div>
      </Container>
    </AuthLayout>
  );
}