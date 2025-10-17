import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class StoreRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: number): Promise<unknown> {
    return null;
  }

  async create(data: unknown): Promise<unknown> {
    return data;
  }
}


