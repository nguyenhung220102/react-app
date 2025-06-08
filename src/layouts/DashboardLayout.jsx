import React from 'react';
import HeaderBar from '../components/dashboard/HeaderBar';
import FooterBar from '../components/dashboard/FooterBar';

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "1080px",
        minHeight: "100vh",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "var(--dashboard-background-color)",
      }}
    >
      <div style={{ height: "62px" }}>
        <HeaderBar />
      </div>

      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </main>

      <FooterBar />
    </div>
  );
}