import React, {useEffect} from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import image from '../../assets/images/dashboard-banner.png';
import en from '../../locales/en';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
    if (token == null) {
      navigate("/signin");
    }
  }, [navigate, token]);
  return (
    <DashboardLayout>
      <h4
        className="text-center"
        style={{
          color: "var(--label-secondary-color)",
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: "auto",
          marginTop: "123px",
        }}
      >
        {en.dashboard.welcome}
      </h4>
      <img
        src={image}
        alt="Auth Illustration"
        style={{
          width: "596px",
          height: "auto",
          objectFit: "contain",
          marginTop: "220px",
        }}
      />
    </DashboardLayout>
  );
}