import { IEvent } from 'interfaces';
import { Link } from 'react-router-dom';

export function EventCard(event: IEvent) {
  return (
    <Link
      to={`/detalhes/${event._id.$oid}`}
      className="
        h-8
        odd:bg-gray-200
        bg-gray-100
        flex
        justify-between
        items-center
        w-full
        px-10
        py-6
        text-gray-800
        rounded-lg
        drop-shadow-md
        mb-3
        hover:ring-2
        odd:hover:ring-gray-300
        even:hover:ring-gray-200"
    >
      <p>Nome: {event.nome}</p>
      <p>CPF: {event.cpf}</p>
    </Link>
  );
}
