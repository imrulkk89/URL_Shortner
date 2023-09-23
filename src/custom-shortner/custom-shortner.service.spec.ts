import { Test, TestingModule } from '@nestjs/testing';
import { CustomShortnerService } from './custom-shortner.service';

describe('CustomShortnerService', () => {
  let service: CustomShortnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomShortnerService],
    }).compile();

    service = module.get<CustomShortnerService>(CustomShortnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
