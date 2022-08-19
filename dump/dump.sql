--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    "userId" integer,
    "postId" integer,
    comment text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: follows; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.follows (
    id integer NOT NULL,
    "followerId" integer,
    "followedId" integer
);


ALTER TABLE public.follows OWNER TO postgres;

--
-- Name: follows_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.follows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.follows_id_seq OWNER TO postgres;

--
-- Name: follows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.follows_id_seq OWNED BY public.follows.id;


--
-- Name: hashtags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hashtags (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.hashtags OWNER TO postgres;

--
-- Name: hashtags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hashtags_id_seq OWNER TO postgres;

--
-- Name: hashtags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hashtags_id_seq OWNED BY public.hashtags.id;


--
-- Name: hashtagsposts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hashtagsposts (
    id integer NOT NULL,
    "postId" integer,
    "hashtagId" integer
);


ALTER TABLE public.hashtagsposts OWNER TO postgres;

--
-- Name: hashtagsposts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hashtagsposts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hashtagsposts_id_seq OWNER TO postgres;

--
-- Name: hashtagsposts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hashtagsposts_id_seq OWNED BY public.hashtagsposts.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    "postId" integer,
    "userId" integer
);


ALTER TABLE public.likes OWNER TO postgres;

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.likes_id_seq OWNER TO postgres;

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    article text,
    title text DEFAULT 'Title'::text,
    description text DEFAULT 'Description'::text,
    image text,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: shares; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shares (
    id integer NOT NULL,
    "userId" integer,
    "postId" integer,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.shares OWNER TO postgres;

--
-- Name: shares_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shares_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shares_id_seq OWNER TO postgres;

--
-- Name: shares_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shares_id_seq OWNED BY public.shares.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "pictureUrl" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: follows id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.follows ALTER COLUMN id SET DEFAULT nextval('public.follows_id_seq'::regclass);


--
-- Name: hashtags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtags ALTER COLUMN id SET DEFAULT nextval('public.hashtags_id_seq'::regclass);


--
-- Name: hashtagsposts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtagsposts ALTER COLUMN id SET DEFAULT nextval('public.hashtagsposts_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: shares id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares ALTER COLUMN id SET DEFAULT nextval('public.shares_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, "userId", "postId", comment, "createdAt") FROM stdin;
\.


--
-- Data for Name: follows; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.follows (id, "followerId", "followedId") FROM stdin;
3	3	5
4	3	4
\.


--
-- Data for Name: hashtags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hashtags (id, name, "createdAt") FROM stdin;
1	lula	2022-08-13 19:42:52.409466
2	bozo	2022-08-16 15:06:40.296295
3	react	2022-08-16 16:18:15.689313
4	material	2022-08-16 16:18:15.692445
5	ciro	2022-08-16 16:26:57.140596
6	maneiro	2022-08-16 16:29:29.965824
7	GueredoBoy	2022-08-16 16:31:17.629394
8	teste	2022-08-16 16:33:34.639593
9	fig	2022-08-16 17:21:48.838929
10	angg	2022-08-18 20:13:09.06382
11	gratis	2022-08-18 20:27:55.041353
12	Vizer	2022-08-19 11:07:40.60665
13	Medium	2022-08-19 11:15:55.905758
\.


--
-- Data for Name: hashtagsposts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hashtagsposts (id, "postId", "hashtagId") FROM stdin;
19	67	13
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.likes (id, "postId", "userId") FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, "userId", url, article, title, description, image, "createdAt") FROM stdin;
67	5	https://medium.com/	#Medium - post do aang	Medium – Where good ideas find you.	Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.	https://miro.medium.com/1*5ER2KRyL5S0S_xX8Pf0lgg.png	2022-08-19 11:15:55
71	4	https://www.youtube.com/	dsdsdsd	YouTube	Aproveite vídeos e músicas que você ama, envie e compartilhe conteúdo original com amigos, parentes e o mundo no YouTube.	https://www.youtube.com/img/desktop/yt_1200.png	2022-08-19 13:38:36
\.


--
-- Data for Name: shares; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shares (id, "userId", "postId", "createdAt") FROM stdin;
7	3	67	2022-08-19 11:50:21.845087
8	3	67	2022-08-19 11:50:58.370537
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, "pictureUrl", "createdAt") FROM stdin;
3	fig	fig@gmail.com	$2b$10$tP52aZTdDXP1B.UiYrNmp.zIazR1GWjrSnhTwGRmI9iN.YsVnoNDW	https://avatars.githubusercontent.com/u/99822638?v=4	2022-08-09 00:00:00
4	naruto	naruto@gmail.com	$2b$10$zlyVj3Fg8pO4JwqDx4euI.2MGfH/nTePRAv0YQvAHK7Q1IU828Qae	data:image/jpeg;base64,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	2022-08-13 21:02:34
5	aang	aang@gmail.com	$2b$10$UWJgkZjPVbiKZ5LfK9XiLez.GphvCv6vUK73n1YxvRl5p1tGrCDaW	data:image/jpeg;base64,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	2022-08-18 18:35:01
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 1, false);


--
-- Name: follows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.follows_id_seq', 4, true);


--
-- Name: hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hashtags_id_seq', 13, true);


--
-- Name: hashtagsposts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hashtagsposts_id_seq', 20, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.likes_id_seq', 130, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 71, true);


--
-- Name: shares_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shares_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: follows follows_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (id);


--
-- Name: hashtags hashtags_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_name_key UNIQUE (name);


--
-- Name: hashtags hashtags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_pkey PRIMARY KEY (id);


--
-- Name: hashtagsposts hashtagsposts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtagsposts
    ADD CONSTRAINT hashtagsposts_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: shares shares_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT shares_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: comments comments_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: follows follows_followedId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT "follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES public.users(id);


--
-- Name: follows follows_followerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT "follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES public.users(id);


--
-- Name: hashtagsposts hashtagsposts_hashtagId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtagsposts
    ADD CONSTRAINT "hashtagsposts_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES public.hashtags(id);


--
-- Name: hashtagsposts hashtagsposts_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hashtagsposts
    ADD CONSTRAINT "hashtagsposts_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: likes likes_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: posts posts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shares shares_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT "shares_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: shares shares_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT "shares_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

