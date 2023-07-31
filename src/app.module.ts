import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './typeorm/Task';

// imports TasksModule and TypeOrmModule(for database connection)
@Module({
    imports: [
        TasksModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'dpg-cj40qpt9aq0e0q2hgj60-a',
            port: 5432,
            username: 'dbname_c7aw_user',
            password: 'gWh2LBXzeQpOs2gBEuK83cCCOi8vCUqf',
            database: 'dbname_c7aw',
            entities: [Task],
            synchronize: true,
            url:'postgres://dbname_c7aw_user:gWh2LBXzeQpOs2gBEuK83cCCOi8vCUqf@dpg-cj40qpt9aq0e0q2hgj60-a.oregon-postgres.render.com/dbname_c7aw',
            ssl: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
