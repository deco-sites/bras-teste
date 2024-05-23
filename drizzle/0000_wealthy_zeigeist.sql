CREATE TABLE `profiles` (
	`col1` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`email` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullName` text
);
