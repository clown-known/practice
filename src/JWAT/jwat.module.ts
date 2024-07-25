import { Module } from "@nestjs/common";
import { JWATController } from "./jwat.controller";

@Module({
    controllers:[JWATController]
})
export class JWATModule {}