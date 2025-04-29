import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should return a new patient with given name', async () => {
      const newPatient = { name: 'John Doe' };

      expect(await service.register(newPatient)).toEqual({
        id: 1,
        name: newPatient.name,
      });
    });
  });

  describe('doesPatientExist', () => {
    it('should return false when no patient was registered', async () => {
      const patientId = 1;
      const exists = await service.doesPatientExist(patientId);

      expect(exists).toBe(false);
    });
  });
});
