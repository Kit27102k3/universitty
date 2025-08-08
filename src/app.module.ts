import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        "mongodb+srv://TrongKhiem:1RUFWHT2a0PHYtH3@cluster0.ahfbtwd.mongodb.net/university?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
