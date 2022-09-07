import { DateTimePicker, Nav, RegistrationModal } from 'components';
import { IRegisterNewCommunication, IState } from 'interfaces';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { EventsServices } from 'services/EventsServices';
import { RegisterNewCommunicationResolver } from 'validations';

export function EditCommunication() {
  const [display, setDisplay] = useState(false);
  const [conflictId, setConflictId] = useState('');
  const [updated, setUpdated] = useState(false);
  const { state: event } = useLocation() as unknown as IState;
  const { id } = useParams();

  const formMethods = useForm<IRegisterNewCommunication>({
    resolver: RegisterNewCommunicationResolver,
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = formMethods;

  const onSubmit = async (data: any) => {
    console.log(data);
    if (id) {
      const response = await EventsServices.update(id, data);

      if (response === undefined) {
        setUpdated(true);
      }
      if (response) {
        setConflictId(response.data.conflict._id.$oid);
        setDisplay(true);
        setUpdated(false);
      }
    }
  };

  return (
    <div className="relative">
      <RegistrationModal
        display={display}
        setDisplay={setDisplay}
        conflictId={conflictId}
        setConflictId={setConflictId}
        type="editar"
      />

      <Nav />

      <div className="flex justify-center mt-10">
        <div className="sm:w-3/4">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Editar comunicação de perda
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  No caso de haver uma comunicação de perda já cadastrada no
                  mesmo dia, em um raio de 10km e com um tipo de evento
                  diferente, não será possível cadastrar a nova comunicação.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="nome"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nome
                          </label>
                          <input
                            {...register('nome')}
                            type="text"
                            name="nome"
                            id="nome"
                            defaultValue={event.nome}
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.nome?.message && (
                            <p className="error-message">
                              {errors?.nome?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            {...register('email')}
                            defaultValue={event.email}
                            type="text"
                            name="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.email?.message && (
                            <p className="error-message">
                              {errors?.email?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="cpf"
                            className="block text-sm font-medium text-gray-700"
                          >
                            CPF{' '}
                            <span className="text-gray-500">
                              (apenas números)
                            </span>
                          </label>
                          <input
                            {...register('cpf')}
                            defaultValue={event.cpf}
                            type="number"
                            name="cpf"
                            id="cpf"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.cpf?.message && (
                            <p className="error-message">
                              {errors?.cpf?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="lavoura"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tipo de lavoura
                          </label>
                          <input
                            {...register('lavoura')}
                            defaultValue={event.tipoLavoura}
                            type="text"
                            name="lavoura"
                            id="lavoura"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.lavoura?.message && (
                            <p className="error-message">
                              {errors?.lavoura?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="latitude"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Latitude
                          </label>
                          <input
                            {...register('latitude')}
                            defaultValue={event.localizacao.LAT}
                            min="-90"
                            max="90"
                            type="number"
                            step="0.000001"
                            name="latitude"
                            id="latitude"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.latitude?.message && (
                            <p className="error-message">
                              {errors?.latitude?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="longitude"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Longitude
                          </label>
                          <input
                            {...register('longitude')}
                            defaultValue={event.localizacao.LONG}
                            min="-180"
                            max="180"
                            type="number"
                            step="0.000001"
                            name="longitude"
                            id="longitude"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                          />
                          {errors?.longitude?.message && (
                            <p className="error-message">
                              {errors?.longitude?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="evento"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Evento ocorrido
                          </label>
                          <select
                            {...register('evento')}
                            defaultValue={event.evento}
                            id="evento"
                            name="evento"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                          >
                            <option>CHUVA EXCESSIVA</option>
                            <option>GEADA</option>
                            <option>GRANIZO</option>
                            <option>SECA</option>
                            <option>VENDAVAL</option>
                            <option>RAIO</option>
                          </select>
                          {errors?.evento?.message && (
                            <p className="error-message">
                              {errors?.evento?.message}
                            </p>
                          )}
                        </div>

                        <div className="col-span-6 sm:col-span-5">
                          <label
                            htmlFor="data"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Data
                          </label>
                          <DateTimePicker name="data" />
                          {errors?.data?.message && (
                            <p className="error-message">
                              {errors?.data?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="
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
                          focus:ring-offset-2"
                      >
                        Salvar
                      </button>
                      {updated && <p>Atualizado com sucesso!</p>}
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
