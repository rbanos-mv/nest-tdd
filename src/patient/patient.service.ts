import { Injectable } from '@nestjs/common';
import { Patient } from './patient.model';

export interface PatientInput {
  name: string;
}

@Injectable()
export class PatientService {
  public async register(patientInput: PatientInput): Promise<Patient> {
    const newPatient: Patient = {
      id: 1,
      name: patientInput.name,
    };

    return Promise.resolve(newPatient);
  }
}
