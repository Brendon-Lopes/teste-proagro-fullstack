import { DateTimePicker, Nav } from 'components';

export function RegisterNewCommunication() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div>
      <Nav />

      <div className="flex justify-center mt-10">
        <div className="w-3/4">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Cadastrar nova comunicação de perda
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  No caso de haver uma comunicação de perda já cadastrada no
                  mesmo dia, em um raio de 10km e com um tipo de evento
                  diferente, não será possível cadastrar a nova comunicação.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}>
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
                          type="text"
                          name="nome"
                          id="nome"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-5">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-5">
                        <label
                          htmlFor="cpf"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          name="cpf"
                          id="cpf"
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="latitude"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Latitude
                        </label>
                        <input
                          type="number"
                          name="latitude"
                          id="latitude"
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="longitude"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Longitude
                        </label>
                        <input
                          type="number"
                          name="longitude"
                          id="longitude"
                          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="evento"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Evento ocorrido
                        </label>
                        <select
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
                      </div>

                      <div className="col-span-6 sm:col-span-5">
                        <label
                          htmlFor="data"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Data
                        </label>
                        <DateTimePicker />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
