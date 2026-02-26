--
-- PostgreSQL database dump
--

\restrict I6fbwYmhmxzGMW0dVxhU17K1fM6GcGWAEmhC6G9EDlNjqeXWQ4OBjidVed7HHmj

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Role" AS ENUM (
    'USER',
    'ADMIN',
    'SUPERUSER',
    'CAIXA',
    'CLIENTE'
);


ALTER TYPE public."Role" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: CategoriaProduto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CategoriaProduto" (
    id integer NOT NULL,
    nome text NOT NULL,
    "familiaId" integer
);


ALTER TABLE public."CategoriaProduto" OWNER TO postgres;

--
-- Name: CategoriaProduto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CategoriaProduto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CategoriaProduto_id_seq" OWNER TO postgres;

--
-- Name: CategoriaProduto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CategoriaProduto_id_seq" OWNED BY public."CategoriaProduto".id;


--
-- Name: Cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cliente" (
    id integer NOT NULL,
    nome text NOT NULL,
    email text,
    password text NOT NULL,
    role public."Role" DEFAULT 'CLIENTE'::public."Role" NOT NULL,
    cpf text,
    cep text,
    logradouro text,
    cidade text,
    estado text,
    telefone text
);


ALTER TABLE public."Cliente" OWNER TO postgres;

--
-- Name: Cliente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cliente_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Cliente_id_seq" OWNER TO postgres;

--
-- Name: Cliente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cliente_id_seq" OWNED BY public."Cliente".id;


--
-- Name: ComprovanteEntrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ComprovanteEntrega" (
    id integer NOT NULL,
    "pedidoId" integer NOT NULL,
    "nomeRecebedor" text NOT NULL,
    "fotoUrl" text NOT NULL,
    "cloudinaryId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "entregadorNome" text DEFAULT 'Não informado'::text NOT NULL,
    "numeroPedido" text
);


ALTER TABLE public."ComprovanteEntrega" OWNER TO postgres;

--
-- Name: ComprovanteEntrega_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ComprovanteEntrega_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ComprovanteEntrega_id_seq" OWNER TO postgres;

--
-- Name: ComprovanteEntrega_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ComprovanteEntrega_id_seq" OWNED BY public."ComprovanteEntrega".id;


--
-- Name: FamiliaProduto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FamiliaProduto" (
    id integer NOT NULL,
    nome text NOT NULL,
    "grupoId" integer NOT NULL
);


ALTER TABLE public."FamiliaProduto" OWNER TO postgres;

--
-- Name: FamiliaProduto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."FamiliaProduto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."FamiliaProduto_id_seq" OWNER TO postgres;

--
-- Name: FamiliaProduto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."FamiliaProduto_id_seq" OWNED BY public."FamiliaProduto".id;


--
-- Name: Frete; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Frete" (
    id integer NOT NULL,
    "pedidoId" integer NOT NULL,
    "transportadoraId" integer,
    "pesoMin" double precision DEFAULT 0 NOT NULL,
    "pesoMax" double precision DEFAULT 999999 NOT NULL,
    valor double precision DEFAULT 0 NOT NULL,
    "prazoEntrega" integer DEFAULT 3 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Frete" OWNER TO postgres;

--
-- Name: Frete_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Frete_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Frete_id_seq" OWNER TO postgres;

--
-- Name: Frete_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Frete_id_seq" OWNED BY public."Frete".id;


--
-- Name: GrupoProduto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GrupoProduto" (
    id integer NOT NULL,
    nome text NOT NULL
);


ALTER TABLE public."GrupoProduto" OWNER TO postgres;

--
-- Name: GrupoProduto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."GrupoProduto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."GrupoProduto_id_seq" OWNER TO postgres;

--
-- Name: GrupoProduto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."GrupoProduto_id_seq" OWNED BY public."GrupoProduto".id;


--
-- Name: ItemPedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ItemPedido" (
    id integer NOT NULL,
    "pedidoId" integer NOT NULL,
    "produtoId" integer NOT NULL,
    quantidade integer NOT NULL,
    valor double precision,
    "promocaoId" integer
);


ALTER TABLE public."ItemPedido" OWNER TO postgres;

--
-- Name: ItemPedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ItemPedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ItemPedido_id_seq" OWNER TO postgres;

--
-- Name: ItemPedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ItemPedido_id_seq" OWNED BY public."ItemPedido".id;


--
-- Name: Pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pedido" (
    id integer NOT NULL,
    "numeroPedido" text NOT NULL,
    "clienteId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "valorTotal" double precision DEFAULT 0 NOT NULL,
    status text DEFAULT 'PENDENTE'::text NOT NULL,
    "stripeSessionId" text,
    entregue boolean DEFAULT false NOT NULL,
    "caixaId" integer,
    "metodoPagamento" text DEFAULT 'DESCONHECIDO'::text NOT NULL
);


ALTER TABLE public."Pedido" OWNER TO postgres;

--
-- Name: PedidoStatus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PedidoStatus" (
    id integer NOT NULL,
    "pedidoId" integer NOT NULL,
    status text NOT NULL,
    "dataStatus" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."PedidoStatus" OWNER TO postgres;

--
-- Name: PedidoStatus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PedidoStatus_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PedidoStatus_id_seq" OWNER TO postgres;

--
-- Name: PedidoStatus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PedidoStatus_id_seq" OWNED BY public."PedidoStatus".id;


--
-- Name: Pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Pedido_id_seq" OWNER TO postgres;

--
-- Name: Pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pedido_id_seq" OWNED BY public."Pedido".id;


--
-- Name: Produto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Produto" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    image text NOT NULL,
    estoque integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "categoriaId" integer,
    "codigoBarras" text
);


ALTER TABLE public."Produto" OWNER TO postgres;

--
-- Name: Produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Produto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Produto_id_seq" OWNER TO postgres;

--
-- Name: Produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Produto_id_seq" OWNED BY public."Produto".id;


--
-- Name: Promocao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Promocao" (
    id integer NOT NULL,
    nome text NOT NULL,
    desconto double precision NOT NULL,
    "criadoEm" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Promocao" OWNER TO postgres;

--
-- Name: Promocao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Promocao_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Promocao_id_seq" OWNER TO postgres;

--
-- Name: Promocao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Promocao_id_seq" OWNED BY public."Promocao".id;


--
-- Name: Sequencia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Sequencia" (
    id integer DEFAULT 1 NOT NULL,
    "proximoNumero" integer DEFAULT 1 NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Sequencia" OWNER TO postgres;

--
-- Name: Transportadora; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Transportadora" (
    id integer NOT NULL,
    numero text,
    nome text NOT NULL,
    cnpj text NOT NULL,
    telefone text NOT NULL,
    "fretePadrao" double precision,
    cep text,
    logradouro text,
    bairro text,
    cidade text,
    estado text,
    "tipoVeiculo" text
);


ALTER TABLE public."Transportadora" OWNER TO postgres;

--
-- Name: Transportadora_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Transportadora_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Transportadora_id_seq" OWNER TO postgres;

--
-- Name: Transportadora_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Transportadora_id_seq" OWNED BY public."Transportadora".id;


--
-- Name: VendaResumo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."VendaResumo" (
    id integer NOT NULL,
    data timestamp(3) without time zone NOT NULL,
    "totalVendas" double precision NOT NULL,
    "qtdPedidos" integer NOT NULL,
    "qtdProdutos" integer NOT NULL
);


ALTER TABLE public."VendaResumo" OWNER TO postgres;

--
-- Name: VendaResumo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."VendaResumo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."VendaResumo_id_seq" OWNER TO postgres;

--
-- Name: VendaResumo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."VendaResumo_id_seq" OWNED BY public."VendaResumo".id;


--
-- Name: _ProdutosPromocao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_ProdutosPromocao" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ProdutosPromocao" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: CategoriaProduto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CategoriaProduto" ALTER COLUMN id SET DEFAULT nextval('public."CategoriaProduto_id_seq"'::regclass);


--
-- Name: Cliente id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cliente" ALTER COLUMN id SET DEFAULT nextval('public."Cliente_id_seq"'::regclass);


--
-- Name: ComprovanteEntrega id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ComprovanteEntrega" ALTER COLUMN id SET DEFAULT nextval('public."ComprovanteEntrega_id_seq"'::regclass);


--
-- Name: FamiliaProduto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FamiliaProduto" ALTER COLUMN id SET DEFAULT nextval('public."FamiliaProduto_id_seq"'::regclass);


--
-- Name: Frete id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Frete" ALTER COLUMN id SET DEFAULT nextval('public."Frete_id_seq"'::regclass);


--
-- Name: GrupoProduto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GrupoProduto" ALTER COLUMN id SET DEFAULT nextval('public."GrupoProduto_id_seq"'::regclass);


--
-- Name: ItemPedido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedido" ALTER COLUMN id SET DEFAULT nextval('public."ItemPedido_id_seq"'::regclass);


--
-- Name: Pedido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido" ALTER COLUMN id SET DEFAULT nextval('public."Pedido_id_seq"'::regclass);


--
-- Name: PedidoStatus id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PedidoStatus" ALTER COLUMN id SET DEFAULT nextval('public."PedidoStatus_id_seq"'::regclass);


--
-- Name: Produto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produto" ALTER COLUMN id SET DEFAULT nextval('public."Produto_id_seq"'::regclass);


--
-- Name: Promocao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Promocao" ALTER COLUMN id SET DEFAULT nextval('public."Promocao_id_seq"'::regclass);


--
-- Name: Transportadora id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transportadora" ALTER COLUMN id SET DEFAULT nextval('public."Transportadora_id_seq"'::regclass);


--
-- Name: VendaResumo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VendaResumo" ALTER COLUMN id SET DEFAULT nextval('public."VendaResumo_id_seq"'::regclass);


--
-- Name: CategoriaProduto CategoriaProduto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CategoriaProduto"
    ADD CONSTRAINT "CategoriaProduto_pkey" PRIMARY KEY (id);


--
-- Name: Cliente Cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cliente"
    ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY (id);


--
-- Name: ComprovanteEntrega ComprovanteEntrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ComprovanteEntrega"
    ADD CONSTRAINT "ComprovanteEntrega_pkey" PRIMARY KEY (id);


--
-- Name: FamiliaProduto FamiliaProduto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FamiliaProduto"
    ADD CONSTRAINT "FamiliaProduto_pkey" PRIMARY KEY (id);


--
-- Name: Frete Frete_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Frete"
    ADD CONSTRAINT "Frete_pkey" PRIMARY KEY (id);


--
-- Name: GrupoProduto GrupoProduto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GrupoProduto"
    ADD CONSTRAINT "GrupoProduto_pkey" PRIMARY KEY (id);


--
-- Name: ItemPedido ItemPedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedido"
    ADD CONSTRAINT "ItemPedido_pkey" PRIMARY KEY (id);


--
-- Name: PedidoStatus PedidoStatus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PedidoStatus"
    ADD CONSTRAINT "PedidoStatus_pkey" PRIMARY KEY (id);


--
-- Name: Pedido Pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY (id);


--
-- Name: Produto Produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produto"
    ADD CONSTRAINT "Produto_pkey" PRIMARY KEY (id);


--
-- Name: Promocao Promocao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Promocao"
    ADD CONSTRAINT "Promocao_pkey" PRIMARY KEY (id);


--
-- Name: Sequencia Sequencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Sequencia"
    ADD CONSTRAINT "Sequencia_pkey" PRIMARY KEY (id);


--
-- Name: Transportadora Transportadora_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transportadora"
    ADD CONSTRAINT "Transportadora_pkey" PRIMARY KEY (id);


--
-- Name: VendaResumo VendaResumo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VendaResumo"
    ADD CONSTRAINT "VendaResumo_pkey" PRIMARY KEY (id);


--
-- Name: _ProdutosPromocao _ProdutosPromocao_AB_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ProdutosPromocao"
    ADD CONSTRAINT "_ProdutosPromocao_AB_pkey" PRIMARY KEY ("A", "B");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: CategoriaProduto_nome_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "CategoriaProduto_nome_key" ON public."CategoriaProduto" USING btree (nome);


--
-- Name: Cliente_cpf_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Cliente_cpf_key" ON public."Cliente" USING btree (cpf);


--
-- Name: Cliente_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Cliente_email_key" ON public."Cliente" USING btree (email);


--
-- Name: ComprovanteEntrega_pedidoId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ComprovanteEntrega_pedidoId_key" ON public."ComprovanteEntrega" USING btree ("pedidoId");


--
-- Name: FamiliaProduto_nome_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "FamiliaProduto_nome_key" ON public."FamiliaProduto" USING btree (nome);


--
-- Name: Pedido_numeroPedido_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pedido_numeroPedido_key" ON public."Pedido" USING btree ("numeroPedido");


--
-- Name: Pedido_stripeSessionId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pedido_stripeSessionId_key" ON public."Pedido" USING btree ("stripeSessionId");


--
-- Name: Produto_codigoBarras_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Produto_codigoBarras_key" ON public."Produto" USING btree ("codigoBarras");


--
-- Name: Transportadora_numero_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Transportadora_numero_key" ON public."Transportadora" USING btree (numero);


--
-- Name: _ProdutosPromocao_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_ProdutosPromocao_B_index" ON public."_ProdutosPromocao" USING btree ("B");


--
-- Name: CategoriaProduto CategoriaProduto_familiaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CategoriaProduto"
    ADD CONSTRAINT "CategoriaProduto_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES public."FamiliaProduto"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ComprovanteEntrega ComprovanteEntrega_pedidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ComprovanteEntrega"
    ADD CONSTRAINT "ComprovanteEntrega_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES public."Pedido"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: FamiliaProduto FamiliaProduto_grupoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FamiliaProduto"
    ADD CONSTRAINT "FamiliaProduto_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES public."GrupoProduto"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Frete Frete_pedidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Frete"
    ADD CONSTRAINT "Frete_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES public."Pedido"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Frete Frete_transportadoraId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Frete"
    ADD CONSTRAINT "Frete_transportadoraId_fkey" FOREIGN KEY ("transportadoraId") REFERENCES public."Transportadora"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ItemPedido ItemPedido_pedidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedido"
    ADD CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES public."Pedido"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ItemPedido ItemPedido_produtoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemPedido"
    ADD CONSTRAINT "ItemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES public."Produto"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PedidoStatus PedidoStatus_pedidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PedidoStatus"
    ADD CONSTRAINT "PedidoStatus_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES public."Pedido"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Pedido Pedido_caixaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_caixaId_fkey" FOREIGN KEY ("caixaId") REFERENCES public."Cliente"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Pedido Pedido_clienteId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES public."Cliente"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Produto Produto_categoriaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Produto"
    ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES public."CategoriaProduto"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _ProdutosPromocao _ProdutosPromocao_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ProdutosPromocao"
    ADD CONSTRAINT "_ProdutosPromocao_A_fkey" FOREIGN KEY ("A") REFERENCES public."Produto"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProdutosPromocao _ProdutosPromocao_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_ProdutosPromocao"
    ADD CONSTRAINT "_ProdutosPromocao_B_fkey" FOREIGN KEY ("B") REFERENCES public."Promocao"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict I6fbwYmhmxzGMW0dVxhU17K1fM6GcGWAEmhC6G9EDlNjqeXWQ4OBjidVed7HHmj

