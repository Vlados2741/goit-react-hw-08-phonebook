import { useAuth } from '../hooks/useAuth';
import UserMenu from './menu/userMenu';
import AuthMenu from './menu/authMenu';

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="header">
      <h1 className="header-title">Phonebook.com</h1>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </div>
  );
}
