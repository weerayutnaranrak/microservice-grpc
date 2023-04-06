import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

interface ICMSService {
  findOne(data: { id: number }, metadata?: Metadata): Observable<any>;
}

export default ICMSService;
