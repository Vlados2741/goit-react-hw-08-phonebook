import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function AuthMenu() {
  const navigate = useNavigate();

  return (
    <div className="auth-menu">
      <Button
        onClick={() => {
          navigate('/register');
        }}
        variant="contained"
        sx={{
          width: '90px',
          marginRight: '10px',
          fontSize: '12px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#000',
          border: '2px solid #fff',
          boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
          borderRadius: '25px',
          '&.MuiButton-root:hover': {
            color: '#000',
            backgroundColor: '#fff',
            boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.4)',
          },
        }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        variant="contained"
        sx={{
          width: '90px',
          marginRight: '10px',
          fontSize: '12px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#000',
          border: '2px solid #fff',
          boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
          borderRadius: '25px',
          '&.MuiButton-root:hover': {
            color: '#000',
            backgroundColor: '#fff',
            boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.4)',
          },
        }}
      >
        Log in
      </Button>
    </div>
  );
}
