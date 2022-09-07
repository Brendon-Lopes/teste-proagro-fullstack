import { IEvent } from 'interfaces/IEvent';

export function EventDetailsCard(event: IEvent) {
  return (
    <section>
      <h1>Details</h1>
      <p>id: {event._id.$oid}</p>
      <p>Nome: {event.nome}</p>
      <p>Email: {event.email}</p>
      <p>CPF: {event.cpf}</p>
      <p>Tipo da lavoura: {event.tipoLavoura}</p>
      <p>Data colheita: {event.dataColheita}</p>
      <p>evento ocorrido: {event.evento}</p>
      <p>
        Localização: Latitude: {event.localizacao.LAT}, Longitude:{' '}
        {event.localizacao.LONG}
      </p>
    </section>
  );
}
