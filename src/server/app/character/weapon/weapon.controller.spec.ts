import { Test, TestingModule } from '@nestjs/testing';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';

const WeaponServiceStub = {};

describe('Weapon Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [WeaponController],
      providers: [{ useValue: WeaponServiceStub, provide: WeaponService }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: WeaponController = module.get<WeaponController>(
      WeaponController
    );
    expect(controller).toBeDefined();
  });
});
