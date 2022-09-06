import axios from 'axios';
import { Nav } from 'components';
import { Key, useEffect, useState } from 'react';

export function Home() {
  const [events, setEvents] = useState<{ nome: Key; _id: { $oid: Key } }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get('http://localhost:5000/loss-events');
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Nav />
      <ul>
        {events.map((event) => (
          <div key={event._id.$oid}>
            <li>
              id: {event._id.$oid}, nome: {event.nome}
            </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}
