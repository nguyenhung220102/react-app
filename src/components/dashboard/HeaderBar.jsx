import UserProfile from './UserProfile';
import image from '../../assets/images/avatar.svg';
export default function HeaderBar() {
  return (
    <header
      style={{
        height: "62px",
        width: "100%",
        backgroundColor: "var(--primary-color-white)",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <UserProfile
        name="John Doe"
        status="Available"
        imageSrc={image}
      />
    </header>
  );
}