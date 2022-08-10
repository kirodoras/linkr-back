CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE posts (
    id SERIAL NOT NULL PRIMARY KEY,
    "userId" INTEGER REFERENCES users(id),
    url TEXT NOT NULL,
    article TEXT,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE likes (
    id SERIAL NOT NULL PRIMARY KEY,
	"postId" INTEGER REFERENCES posts(id),
    "userId" INTEGER REFERENCES users(id)
);

CREATE TABLE hashtags (
    id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL UNIQUE,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE hashtagsPosts (
    id SERIAL NOT NULL PRIMARY KEY,
	"postId" INTEGER REFERENCES posts(id),
    "hashtagId" INTEGER REFERENCES hashtags(id)
);