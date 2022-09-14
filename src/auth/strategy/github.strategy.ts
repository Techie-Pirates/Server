import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy, } from "@nestjs/passport";
import { Strategy } from 'passport-github2'
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class gitHubStrategy extends PassportStrategy(
    Strategy,
    'github'
)
{
    constructor(
        config: ConfigService,
        private prisma: PrismaService,
    ) {
        super({
            clientID: config.get('GITHUB_CLIENT_ID'),
            clientSecret: config.get('GITHUB_CLIENT_SECRET'),
            callbackURL: `${config.get('CLIENT_URL')}/auth/github/callback`,
        });
    }
    async function(accessToken, refreshToken, profile, done) {
        console.log(profile)
        return done(null, profile)
        // User.findOrCreate({ githubId: profile.id }, function (err, user) {
        //     return done(err, user);
        //});
    }
}
