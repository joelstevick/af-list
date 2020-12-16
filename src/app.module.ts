import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ListResolvers } from './resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [ListService, ListResolvers],
})
export class AppModule {}
