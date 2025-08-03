import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	Column,
	CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class FriendRequest {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.sentFriendRequests)
	sender: User;

	@ManyToOne(() => User, (user) => user.receivedFriendRequests)
	receiver: User;

	@Column({ default: 'pending' })
	status: 'pending' | 'accepted' | 'rejected';

	@CreateDateColumn()
	createdAt: Date;
}
