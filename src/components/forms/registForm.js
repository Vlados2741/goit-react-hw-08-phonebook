import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/authorization/authOperations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#000',
    width: '150px',
  },
  '& .MuiFormLabel-root': {
    color: '#000',
  },
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
      boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="login-form">
      <h1 className="login-form-title">Create your account</h1>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <CssTextField
          margin="normal"
          autoComplete="off"
          name="firstName"
          required
          fullWidth
          id="name"
          label="First Name"
        />

        <CssTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
        />

        <CssTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            marginTop: '15px',
            fontSize: '24px',
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
          Create account
        </Button>
      </Box>
    </div>
  );
}
