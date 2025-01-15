import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [CloudinaryService],
  imports: [ConfigModule],
  exports: [CloudinaryService],
})
export class CloudinaryModule { }
