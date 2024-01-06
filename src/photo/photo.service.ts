import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    const mythos: Photo[] = await this.photoRepository.find();
    console.log(mythos);
    return mythos;
  }

  async save(photo: Photo): Promise<Photo> {
    const mythos: Photo = await this.photoRepository.save(photo);
    console.log(mythos);
    return mythos;
  }
}
