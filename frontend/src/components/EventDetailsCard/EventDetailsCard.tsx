import { IEvent } from 'interfaces/IEvent';
import { useNavigate } from 'react-router-dom';

type Props = {
  event: IEvent;
  setDisplay: any;
};

export function EventDetailsCard({ event, setDisplay }: Props) {
  const navigate = useNavigate();

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-BR');
  };

  return (
    <section className="flex justify-center sm:mt-6">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg sm:w-3/5">
        <div className="sm:flex sm:justify-between">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Detalhes comunicação de perda ID: {event._id.$oid}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Aqui se encontram todas as informações cadastradas para essa
              comunicação.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <button
              className="
                h-10
                inline-flex
                justify-center
                rounded-md
                border
                border-transparent
                bg-green-600
                py-2
                px-4
                text-sm
                font-medium
                text-white
                shadow-sm
                hover:bg-green-700
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                focus:ring-offset-2
                mt-5
                mx-6
                sm:mr-0
              "
              onClick={() =>
                navigate(`/editar/${event._id.$oid}`, { state: event })
              }
            >
              Editar
            </button>
            <button
              className="
              h-10
              inline-flex
              justify-center
              rounded-md
              border
              border-transparent
              bg-red-600
              py-2
              px-4
              text-sm
              font-medium
              text-white
              shadow-sm
              hover:bg-red-700
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:ring-offset-2
              my-5
              mx-5
              "
              onClick={() => setDisplay(true)}
            >
              Excluir
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nome</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {event.nome}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {event.email}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">CPF</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {event.cpf}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Tipo da lavoura
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {event.tipoLavoura}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Data da colheita
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {formatDate(event.dataColheita)}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Evento ocorrido
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {event.evento}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Localização</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Latitude: {event.localizacao.LAT}, Longitude:{' '}
                {event.localizacao.LONG}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
