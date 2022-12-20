import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    width: '320px',
    color: '#000',
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

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'gender':
        setGender(value);
        break;

      default:
        return;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
      gender,
    };
    setName('');
    setNumber('');
    setGender('');
    dispatch(addContact(contact));
  };

  let nameId = nanoid();
  let numberId = nanoid();

  return (
    <form className="phonebook-form" onSubmit={handleSabmit}>
      <CssTextField
        margin="normal"
        label="Name"
        variant="outlined"
        onChange={handleChange}
        id={nameId}
        value={name}
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <CssTextField
        margin="normal"
        label="Number"
        variant="outlined"
        onChange={handleChange}
        id={numberId}
        value={number}
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: '100%',
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
        Add contact
      </Button>
    </form>
  );
}
