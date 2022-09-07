import { ConfirmationModal, EventDetailsCard, Nav } from 'components';
import { IEvent } from 'interfaces/IEvent';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventsServices } from 'services/EventsServices';

export function Details() {
  const { id } = useParams();
  const [display, setDisplay] = useState(false);
  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        const { data } = await EventsServices.getById(id);
        setEvent(data);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <>
        <Nav />
        <div>Carregando...</div>
      </>
    );
  }

  return (
    <div>
      <ConfirmationModal display={display} setDisplay={setDisplay} />
      <Nav />
      <EventDetailsCard event={event} setDisplay={setDisplay} />
    </div>
  );
}
