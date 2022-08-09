CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "pictureUrl" text NOT NULL,
    "createdAt" date DEFAULT NOW() NOT NULL
);