--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)

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
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: hashtags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hashtags (id, name, "createdAt") FROM stdin;
1	lula	2022-08-13 19:42:52.409466
\.


--
-- Data for Name: hashtagsposts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hashtagsposts (id, "postId", "hashtagId") FROM stdin;
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
23	4	https://www.youtube.com/	Youtube	YouTube	Aproveite vídeos e músicas que você ama, envie e compartilhe conteúdo original com amigos, parentes e o mundo no YouTube.	https://www.youtube.com/img/desktop/yt_1200.png	2022-08-13 21:03:15
35	3	https://wakatime.com/	dsdds hvhvhvhvhv	WakaTime - Dashboards for developers	Open source IDE plugins for programmers.	https://wakatime.com/static/img/ScreenShots/editor-and-dashboard.png	2022-08-15 15:20:18
36	3	https://github.com/	dsdsdsds	GitHub: Where the world builds software	GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.	https://github.githubassets.com/images/modules/site/social-cards/github-social.png	2022-08-15 16:24:43
37	3	https://github.com/	dsddsd	GitHub: Where the world builds software	GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.	https://github.githubassets.com/images/modules/site/social-cards/github-social.png	2022-08-15 16:26:52
38	3	https://github.com/	teste 4	GitHub: Where the world builds software	GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.	https://github.githubassets.com/images/modules/site/social-cards/github-social.png	2022-08-15 16:27:11
39	3	https://www.instagram.com/	sdsdsdsds	Instagram	Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.	/static/images/ico/favicon-200.png/ab6eff595bb1.png	2022-08-15 16:27:24
40	3	https://www.instagram.com/	sdsdsd	Instagram	Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.	\N	2022-08-15 16:28:12
41	3	https://www.instagram.com/	dsdsdsd	Instagram	Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.	\N	2022-08-15 16:28:27
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, "pictureUrl", "createdAt") FROM stdin;
3	fig	fig@gmail.com	$2b$10$tP52aZTdDXP1B.UiYrNmp.zIazR1GWjrSnhTwGRmI9iN.YsVnoNDW	https://avatars.githubusercontent.com/u/99822638?v=4	2022-08-09 00:00:00
4	naruto	naruto@gmail.com	$2b$10$zlyVj3Fg8pO4JwqDx4euI.2MGfH/nTePRAv0YQvAHK7Q1IU828Qae	data:image/jpeg;base64,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	2022-08-13 21:02:34
\.


--
-- Name: hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hashtags_id_seq', 1, false);


--
-- Name: hashtagsposts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hashtagsposts_id_seq', 1, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.likes_id_seq', 120, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 41, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


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
-- PostgreSQL database dump complete
--

