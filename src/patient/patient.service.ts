import { Injectable } from '@nestjs/common';
import { Patient } from './patient.model';

export interface PatientInput {
  name: string;
}

@Injectable()
export class PatientService {
  private readonly patients: Patient[] = [];
  private nextId = 1;

  public async register(patientInput: PatientInput): Promise<Patient> {
    const newPatient: Patient = {
      id: this.nextId++,
      name: patientInput.name,
    };

    this.patients.push(newPatient);

    return Promise.resolve(newPatient);
  }

  public async doesPatientExist(patientId: number): Promise<boolean> {
    return Promise.resolve(
      this.patients.some((patient) => patient.id === patientId),
    );
  }
}
