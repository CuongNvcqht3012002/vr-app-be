import { DataSource } from 'typeorm'
import appConfig from '@/config/app.config'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import databaseConfig from '@/config/database.config'
import { Module, MiddlewareConsumer } from '@nestjs/common'
import { TypeOrmConfigService } from '@/database/typeorm-config.service'
import { AppLoggerMiddleware } from '@/middlewares/logger.middleware'
import { UsersModule } from '@/modules/users/module'
import { ResultsModule } from '@/modules/results/module'

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
      envFilePath: ['.env'],
    }),

    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize()
        return dataSource
      },
    }),

    UsersModule,
    ResultsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*')
  }
}
