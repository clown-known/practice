import { Controller, Get } from "@nestjs/common";

@Controller('members')
export class JWATController{
    @Get()
    findMemberNameOfTeam5(): string[] {
        return ['nam','kietngu'];
    }
}