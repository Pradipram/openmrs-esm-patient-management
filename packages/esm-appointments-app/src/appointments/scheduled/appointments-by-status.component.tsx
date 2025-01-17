import React from 'react';
import { useAppointmentList } from '../../hooks/useAppointmentList';
import AppointmentsTable from '../common-components/appointments-table.component';
import { filterByServiceType } from '../utils';

interface AppointmentsByStatusProps {
  appointmentServiceType?: string;
  status: string;
  title: string;
  date: string;
}
const AppointmentsByStatus: React.FC<AppointmentsByStatusProps> = ({ appointmentServiceType, status, title, date }) => {
  const { appointmentList, isLoading, mutate } = useAppointmentList(status, date);

  const appointments = filterByServiceType(appointmentList, appointmentServiceType).map((appointment, index) => {
    return {
      id: `${index}`,
      ...appointment,
    };
  });

  return <AppointmentsTable appointments={appointments} isLoading={isLoading} tableHeading={title} mutate={mutate} />;
};

export default AppointmentsByStatus;
