import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  findOne(id: number) {
    return `This action returns a #${id} content`;
  }
}
