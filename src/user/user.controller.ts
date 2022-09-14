import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GitHubGuard } from 'src/auth/guard/github.guard';

@UseGuards(new GitHubGuard())
@Controller('user')
export class UserController {
    @Post('/github')
    getMe(
        @Body() body: any
    ) {
        console.log(body)
    }

}
