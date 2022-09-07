type Props = {
  display: boolean;
  setDisplay: (display: boolean) => void;
  conflictId: string;
  setConflictId: (conflictId: string) => void;
};

export function RegistrationModal({
  display,
  setDisplay,
  conflictId,
  setConflictId,
}: Props) {
  const handleClick = () => {
    setDisplay(false);
    setConflictId('');
  };

  return (
    <div className={`absolute ${display ? 'block' : 'hidden'}`}>
      <div className="relative w-screen z-10 h-screen flex items-center justify-center">
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
              Não foi possível cadastrar
            </p>
            <div>
              <p className="text-gray-800 mb-1">
                Houve um conflito na tentativa de cadastro.
              </p>
              <p className="text-gray-800">
                Existe uma comunicação de perda em um raio de 10km da
                localização passada, na mesma data, mas com um tipo de evento
                diferente (ID: {conflictId}). Por favor, verifique os dados
                passados.
              </p>
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
              onClick={handleClick}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
