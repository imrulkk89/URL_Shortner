import { Test, TestingModule } from '@nestjs/testing';
import { ShortidGeneratorService } from './helpers.service';

describe('ShortidGeneratorService', () => {
  let service: ShortidGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortidGeneratorService],
    }).compile();

    service = module.get<ShortidGeneratorService>(ShortidGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
