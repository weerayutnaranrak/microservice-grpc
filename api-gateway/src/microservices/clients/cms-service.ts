import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

const CMSServiceClient = ClientsModule.register([
  {
    name: 'CMSServiceClient',
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'cms',
      protoPath: join(__dirname, '../proto/cms.proto'),
    },
  },
]);

export default CMSServiceClient;
