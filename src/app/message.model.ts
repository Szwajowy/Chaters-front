import { DateTime } from './datetime.model';
import { User } from './user.model';

export interface Message {
    id: number;
    text: string;
    sendedAt: DateTime;
    sendedBy: User;
    receivedAt: DateTime;
}