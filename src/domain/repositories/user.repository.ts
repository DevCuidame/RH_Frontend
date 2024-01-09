import { Observable } from 'rxjs';
import { UserModel } from '../models/access.model';

export abstract class UserRepository {
    abstract login(params: {email: string, password: string}): Observable<UserModel>;
    abstract register(params: {name: string, email: string, password: string}): Observable<UserModel>;
    abstract getUserProfile(): Observable<UserModel>;
}