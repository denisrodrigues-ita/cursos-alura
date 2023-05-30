import { UserData } from '../../types/userTypes';
import ToggleTheme from '../ToggleTheme';

const Header = ({ user }: { user: UserData }) => {
  return (
    <header className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl
     sm:m-5 transition-all duration-500 ease-in-out">
      <span className="text-gray-100">Olá, {user?.name || "usuário"}</span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  )
}

export default Header;
