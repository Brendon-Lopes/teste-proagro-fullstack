import { Nav } from 'components';
import { IEvent } from 'interfaces/IEvent';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventsServices } from 'services/EventsServices';

export function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await EventsServices.getAll();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Nav />
      <ul>
        {events.map((event) => (
          <Link key={event._id.$oid} to={`/detalhes/${event._id.$oid}`}>
            <li>
              Nome: {event.nome}, CPF: {event.cpf}
            </li>
            <br />
          </Link>
        ))}
      </ul>
    </div>
  );
}
