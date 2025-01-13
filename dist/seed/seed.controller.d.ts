import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    executeAllSeeds(): Promise<void>;
    executeUsersSeed(): Promise<string>;
    executeProductsSeed(): Promise<string>;
    executeUnitOfMeasuresSeed(): Promise<string>;
}
