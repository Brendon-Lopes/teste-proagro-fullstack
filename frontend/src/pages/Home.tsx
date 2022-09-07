import { EventCard, Footer, Nav } from 'components';
import { IEvent } from 'interfaces/IEvent';
import { useEffect, useState } from 'react';
import { EventsServices } from 'services/EventsServices';

export function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [filtered, setFiltered] = useState<IEvent[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = events.filter((item) => item.cpf.includes(event.target.value));

    setFiltered(data);
  };

  useEffect(() => {
    setFiltered(events);
  }, [events]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await EventsServices.getAll();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex-col">
      <Nav />
      <div className="flex justify-evenly items-center">
        <input
          className="mt-5 block w-3/4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
          type="number"
          name="search"
          onChange={(e) => handleChange(e)}
          placeholder="Filtrar por CPF"
        />
      </div>
      <section className="flex justify-center">
        <div className="flex-col justify-center w-3/4 mt-10">
          {filtered.map((event) => (
            <EventCard key={event._id.$oid} {...event} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
