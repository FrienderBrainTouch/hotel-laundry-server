import { Injectable } from '@nestjs/common';
import { FileRepository } from '../repository/file.repository.js';
// 컨트롤러 레이어에서 받아온 데이터로 레포지토리에서 검색하고 가공하는 레이어
@Injectable()
export class FileService {
  constructor(private readonly fileRepository: FileRepository) {}

  async getById(id: number): Promise<unknown> {
    return this.fileRepository.findById(id);
  }

  async create(payload: unknown): Promise<unknown> {
    return this.fileRepository.create(payload);
  }
}


