import Proagrofacil from 'assets/Proagrofacil.svg';
import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="flex items-center justify-center bg-green-600 py-2">
      <div className="flex items-center w-3/4 gap-3">
        <img src={Proagrofacil} alt="Proagro logo" />
        <NavLink
          to="/"
          className="
            hidden
            sm:inline-flex
            items-center
            justify-center
            rounded-md
            p-2
            text-gray-800
            font-medium
            hover:bg-green-800
            hover:text-white
            hover:cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-white"
        >
          Ver lista
        </NavLink>
        <NavLink
          to="/cadastrar-nova-comunicacao"
          className="
            hidden
            sm:inline-flex
            items-center
            justify-center
            rounded-md
            p-2
            text-gray-800
            font-medium
            hover:bg-green-800
            hover:text-white
            hover:cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-white"
        >
          + Cadastrar nova comunicação
        </NavLink>
      </div>
    </nav>
  );
}
