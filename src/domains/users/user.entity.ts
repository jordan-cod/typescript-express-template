import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ type: "varchar", nullable: false })
	name!: string;

	@Column({ type: "varchar", nullable: false })
	lastname!: string;

	@Column({ type: "varchar", unique: true })
	email!: string;

	@Column({ type: "boolean", default: false })
	isAdmin!: boolean;

	@Column({ type: "varchar", nullable: false })
	password!: string;

	@CreateDateColumn({ type: "timestamptz" })
	createdAt!: Date;

	@UpdateDateColumn({ type: "timestamptz", nullable: true })
	updatedAt!: Date;

	@DeleteDateColumn({ type: "timestamptz", nullable: true })
	deletedAt!: Date;
}
