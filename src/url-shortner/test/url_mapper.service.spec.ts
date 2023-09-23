import { Test, TestingModule } from '@nestjs/testing';
import { UrlMappingService } from '../url-shortner.service';

describe('UrlShortnerService', () => {
  let service: UrlMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlMappingService],
    }).compile();

    service = module.get<UrlMappingService>(UrlMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
