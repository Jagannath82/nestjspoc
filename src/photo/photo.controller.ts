import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async getAllPhotos() {
    return await this.photoService.findAll();
  }

  @Post()
  async savePhoto(@Body() photo: Photo) {
    return await this.photoService.save(photo);
  }
}
