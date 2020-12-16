import { Injectable } from '@nestjs/common';
import uuid from 'uuid';
import { List } from '../model/list';

@Injectable()
export class ListService {
  async create(name: string): Promise<List> {
    const list = new List();
    list.id = uuid;
    list.name = name;

    return list;
  }
}
