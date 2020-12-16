import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { List } from './list.entity';
import { ListService } from './list.service';

@Resolver((of) => List)
export class ListResolvers {
  constructor(private listService: ListService) {}

  @Query((returns) => List)
  async getList(@Args('id') id: string): Promise<List> {
    return this.listService.findById(id);
  }

  @Query((returns) => [List])
  async getAllLists(): Promise<List[]> {
    return this.listService.findAll();
  }

  @Mutation((returns) => List)
  async createList(@Args({ name: 'name' }) name: string) {
    return this.listService.create(name);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<List> {
    return this.listService.findById(reference.id);
  }
}
