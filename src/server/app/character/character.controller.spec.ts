import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

const CharacterServiceStub = {};

describe('Characters Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [{ provide: CharacterService, useValue: CharacterServiceStub }]
    }).compile();
  });
  it('should be defined', () => {
    const controller: CharacterController = module.get<CharacterController>(
      CharacterController
    );
    expect(controller).toBeDefined();
  });
});
