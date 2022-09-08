import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventsServices } from 'services';

type Props = {
  display: boolean;
  setDisplay: any;
};

export function ConfirmationModal({ display, setDisplay }: Props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (id) {
      setLoading(true);
      await EventsServices.deleteById(id);
      navigate('/');
    }
  };

  return (
    <div className={`absolute ${display ? 'block' : 'hidden'}`}>
      <div className="relative w-screen z-10 min-h-screen flex items-center justify-center">
        <div className="w-screen h-screen absolute bg-gray-900 opacity-80" />
        <div
          className="
          items-center
          justify-center
          absolute
          sm:w-2/5
          sm:h-2/7
          bg-gray-200
          rounded-md
          p-4
          flex-column"
        >
          <div className="h-4/5 flex flex-col gap-4 mb-6">
            <p className="text-lg font-semibold text-red-600">
              Tem certeza que deseja excluir?
            </p>
            <div>
              <p className="text-gray-800 mb-1">Essa ação é irreversível.</p>
            </div>
          </div>
          <div className="h-1/5 flex items-center justify-end mr-4">
            <button
              className="
               inline-flex
               justify-center
               rounded-md
               border
               border-transparent
               bg-green-600
               py-2
               px-6
               text-sm
               font-medium
               text-white
               shadow-sm
               hover:bg-green-800
               focus:outline-none
               focus:ring-2
               focus:ring-green-600
               focus:ring-offset-2
               mr-6"
              onClick={() => setDisplay(false)}
            >
              Cancelar
            </button>

            <button
              className="
               inline-flex
               justify-center
               rounded-md
               border
               border-transparent
               bg-red-600
               py-2
               px-6
               text-sm
               font-medium
               text-white
               shadow-sm
               hover:bg-red-800
               focus:outline-none
               focus:ring-2
               focus:ring-red-600
               focus:ring-offset-2"
              onClick={handleDelete}
            >
              {loading ? 'Carregando...' : 'Excluir'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
