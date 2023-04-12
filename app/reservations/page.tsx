import EmptyState from '../components/EmptyState';
import ReservationsClient from './ReservationsClient';

import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservation';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title='No Reservations found'
        subtitle='Looks like you have no reservations on your properties'
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
