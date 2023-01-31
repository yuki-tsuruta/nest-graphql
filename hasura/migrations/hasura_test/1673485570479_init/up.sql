SET check_function_bodies = false;
CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    last_seen timestamp with time zone
);
CREATE VIEW public.online_users AS
 SELECT users.id,
    users.last_seen
   FROM public.users
  WHERE (users.last_seen >= (now() - '00:00:30'::interval));
CREATE TABLE public.todos (
    id integer NOT NULL,
    title text NOT NULL,
    is_compieted boolean DEFAULT false NOT NULL,
    is_public boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL
);
CREATE SEQUENCE public.todos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.todos_id_seq OWNED BY public.todos.id;
ALTER TABLE ONLY public.todos ALTER COLUMN id SET DEFAULT nextval('public.todos_id_seq'::regclass);
ALTER TABLE ONLY public.todos
    ADD CONSTRAINT todos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.todos
    ADD CONSTRAINT todos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
