import { Test, TestingModule } from '@nestjs/testing';
import { CustomShortnerController } from './custom-shortner.controller';
import { CustomShortnerService } from './custom-shortner.service';

describe('CustomShortnerController', () => {
  let controller: CustomShortnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomShortnerController],
      providers: [CustomShortnerService],
    }).compile();

    controller = module.get<CustomShortnerController>(CustomShortnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
