import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: number): Promise<unknown> {
    // 구현은 추후 Prisma 모델 확정 후 추가
    return null;
  }

  async create(data: unknown): Promise<unknown> {
    // 구현은 추후 Prisma 모델 확정 후 추가
    return data;
  }
}


