import { Button } from 'reactstrap';

export default function CustomButton({ children, onClick, ...props }) {
  return (
    <Button
      onClick={onClick}
      style={{
        width: '340px',
        height: '38px',
        backgroundColor: "var(--primary-color-purple)",
        color: 'var(--primary-color-white)',
        border: 'none',
        fontSize: 'var(--font-size-base)',
        borderRadius: '5px',
        fontWeight: 'var(--font-weight-bold)',
        letterSpacing: '0.4px',
        lineHeight: '1',
        alignItems: 'center',
      }}
      {...props}
    >
      {children}
    </Button>
  );
}