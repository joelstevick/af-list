import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { List } from './list.entity';

const lists: List[] = [];

@Injectable()
export class ListService {
  async create(name: string): Promise<List> {
    const list = new List();
    list.id = uuid();
    list.name = name;

    lists.push(list);

    return list;
  }

  async findById(id: string): Promise<List> {
    return lists.find((l) => l.id === id);
  }

  async findAll(): Promise<List[]> {
    return lists;
  }
}
