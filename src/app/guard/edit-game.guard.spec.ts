import { TestBed } from '@angular/core/testing';

import { EditGameGuard } from './edit-game.guard';

describe('EditGameGuard', () => {
  let guard: EditGameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditGameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
