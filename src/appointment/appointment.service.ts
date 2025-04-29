import { Injectable } from '@nestjs/common';
import { Appointment } from './appointment.model';

export interface AppointmentInput {
  patientId: number;
  startTime: Date;
  endTime: Date;
}

@Injectable()
export class AppointmentService {
  public async scheduleAppointment(
    appointmentData: AppointmentInput,
  ): Promise<Appointment> {
    return Promise.resolve({
      ...appointmentData,
      confirmed: false,
    });
  }
}
