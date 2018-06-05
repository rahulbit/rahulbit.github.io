import { TestBed, inject } from '@angular/core/testing';

import { GameofthronesService } from './gameofthrones.service';

describe('GameofthronesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameofthronesService]
    });
  });

  it('should be created', inject([GameofthronesService], (service: GameofthronesService) => {
    expect(service).toBeTruthy();
  }));
});
