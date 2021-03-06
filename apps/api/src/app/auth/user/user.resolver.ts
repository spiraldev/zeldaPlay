import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../../guards/gql-auth-guard.guard';
import { returnString } from '../../models';
import {
  ofUser,
  returnUser,
  UserDTO,
  UserIdDTO,
  UserUpdateDataDTO,
} from './models';
import { UserService } from './user.service';

@Resolver(ofUser)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returnUser, { name: 'user' })
  getUser(@Args() userId: UserIdDTO): Observable<UserDTO> {
    return this.userService.getById(userId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(returnUser, { name: 'updateUser' })
  updateUser(
    @Args('updateUserData') userData: UserUpdateDataDTO,
  ): Observable<UserDTO> {
    return this.userService.updateUser(userData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(returnString, { name: 'deleteUser' })
  deleteUser(@Args('userId') userId: UserIdDTO): Observable<any> {
    return this.userService.deleteUser(userId);
  }
}
