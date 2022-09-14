import { Controller, UseGuards } from '@nestjs/common';
import { GitHubGuard } from 'src/auth/guard/github.guard';

@UseGuards(new GitHubGuard())
@Controller('user')
export class UserController { }
