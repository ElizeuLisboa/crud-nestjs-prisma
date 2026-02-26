
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model Promocao
 * 
 */
export type Promocao = $Result.DefaultSelection<Prisma.$PromocaoPayload>
/**
 * Model Frete
 * 
 */
export type Frete = $Result.DefaultSelection<Prisma.$FretePayload>
/**
 * Model PedidoStatus
 * 
 */
export type PedidoStatus = $Result.DefaultSelection<Prisma.$PedidoStatusPayload>
/**
 * Model VendaResumo
 * 
 */
export type VendaResumo = $Result.DefaultSelection<Prisma.$VendaResumoPayload>
/**
 * Model Transportadora
 * 
 */
export type Transportadora = $Result.DefaultSelection<Prisma.$TransportadoraPayload>
/**
 * Model ComprovanteEntrega
 * 
 */
export type ComprovanteEntrega = $Result.DefaultSelection<Prisma.$ComprovanteEntregaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPERUSER: 'SUPERUSER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promocao`: Exposes CRUD operations for the **Promocao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promocaos
    * const promocaos = await prisma.promocao.findMany()
    * ```
    */
  get promocao(): Prisma.PromocaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frete`: Exposes CRUD operations for the **Frete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fretes
    * const fretes = await prisma.frete.findMany()
    * ```
    */
  get frete(): Prisma.FreteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoStatus`: Exposes CRUD operations for the **PedidoStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoStatuses
    * const pedidoStatuses = await prisma.pedidoStatus.findMany()
    * ```
    */
  get pedidoStatus(): Prisma.PedidoStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendaResumo`: Exposes CRUD operations for the **VendaResumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendaResumos
    * const vendaResumos = await prisma.vendaResumo.findMany()
    * ```
    */
  get vendaResumo(): Prisma.VendaResumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportadora`: Exposes CRUD operations for the **Transportadora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportadoras
    * const transportadoras = await prisma.transportadora.findMany()
    * ```
    */
  get transportadora(): Prisma.TransportadoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprovanteEntrega`: Exposes CRUD operations for the **ComprovanteEntrega** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComprovanteEntregas
    * const comprovanteEntregas = await prisma.comprovanteEntrega.findMany()
    * ```
    */
  get comprovanteEntrega(): Prisma.ComprovanteEntregaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Produto: 'Produto',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    Promocao: 'Promocao',
    Frete: 'Frete',
    PedidoStatus: 'PedidoStatus',
    VendaResumo: 'VendaResumo',
    Transportadora: 'Transportadora',
    ComprovanteEntrega: 'ComprovanteEntrega'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "produto" | "pedido" | "itemPedido" | "promocao" | "frete" | "pedidoStatus" | "vendaResumo" | "transportadora" | "comprovanteEntrega"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      Promocao: {
        payload: Prisma.$PromocaoPayload<ExtArgs>
        fields: Prisma.PromocaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromocaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromocaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          findFirst: {
            args: Prisma.PromocaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromocaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          findMany: {
            args: Prisma.PromocaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          create: {
            args: Prisma.PromocaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          createMany: {
            args: Prisma.PromocaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromocaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          delete: {
            args: Prisma.PromocaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          update: {
            args: Prisma.PromocaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          deleteMany: {
            args: Prisma.PromocaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromocaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromocaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>[]
          }
          upsert: {
            args: Prisma.PromocaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromocaoPayload>
          }
          aggregate: {
            args: Prisma.PromocaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromocao>
          }
          groupBy: {
            args: Prisma.PromocaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromocaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromocaoCountArgs<ExtArgs>
            result: $Utils.Optional<PromocaoCountAggregateOutputType> | number
          }
        }
      }
      Frete: {
        payload: Prisma.$FretePayload<ExtArgs>
        fields: Prisma.FreteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          findFirst: {
            args: Prisma.FreteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          findMany: {
            args: Prisma.FreteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>[]
          }
          create: {
            args: Prisma.FreteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          createMany: {
            args: Prisma.FreteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>[]
          }
          delete: {
            args: Prisma.FreteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          update: {
            args: Prisma.FreteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          deleteMany: {
            args: Prisma.FreteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FreteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>[]
          }
          upsert: {
            args: Prisma.FreteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FretePayload>
          }
          aggregate: {
            args: Prisma.FreteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrete>
          }
          groupBy: {
            args: Prisma.FreteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreteCountArgs<ExtArgs>
            result: $Utils.Optional<FreteCountAggregateOutputType> | number
          }
        }
      }
      PedidoStatus: {
        payload: Prisma.$PedidoStatusPayload<ExtArgs>
        fields: Prisma.PedidoStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          findFirst: {
            args: Prisma.PedidoStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          findMany: {
            args: Prisma.PedidoStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>[]
          }
          create: {
            args: Prisma.PedidoStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          createMany: {
            args: Prisma.PedidoStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>[]
          }
          delete: {
            args: Prisma.PedidoStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          update: {
            args: Prisma.PedidoStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          deleteMany: {
            args: Prisma.PedidoStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>[]
          }
          upsert: {
            args: Prisma.PedidoStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoStatusPayload>
          }
          aggregate: {
            args: Prisma.PedidoStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoStatus>
          }
          groupBy: {
            args: Prisma.PedidoStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoStatusCountAggregateOutputType> | number
          }
        }
      }
      VendaResumo: {
        payload: Prisma.$VendaResumoPayload<ExtArgs>
        fields: Prisma.VendaResumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendaResumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendaResumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          findFirst: {
            args: Prisma.VendaResumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendaResumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          findMany: {
            args: Prisma.VendaResumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>[]
          }
          create: {
            args: Prisma.VendaResumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          createMany: {
            args: Prisma.VendaResumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendaResumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>[]
          }
          delete: {
            args: Prisma.VendaResumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          update: {
            args: Prisma.VendaResumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          deleteMany: {
            args: Prisma.VendaResumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendaResumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendaResumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>[]
          }
          upsert: {
            args: Prisma.VendaResumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaResumoPayload>
          }
          aggregate: {
            args: Prisma.VendaResumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendaResumo>
          }
          groupBy: {
            args: Prisma.VendaResumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendaResumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendaResumoCountArgs<ExtArgs>
            result: $Utils.Optional<VendaResumoCountAggregateOutputType> | number
          }
        }
      }
      Transportadora: {
        payload: Prisma.$TransportadoraPayload<ExtArgs>
        fields: Prisma.TransportadoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportadoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportadoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          findFirst: {
            args: Prisma.TransportadoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportadoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          findMany: {
            args: Prisma.TransportadoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          create: {
            args: Prisma.TransportadoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          createMany: {
            args: Prisma.TransportadoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportadoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          delete: {
            args: Prisma.TransportadoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          update: {
            args: Prisma.TransportadoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          deleteMany: {
            args: Prisma.TransportadoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportadoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportadoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>[]
          }
          upsert: {
            args: Prisma.TransportadoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportadoraPayload>
          }
          aggregate: {
            args: Prisma.TransportadoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportadora>
          }
          groupBy: {
            args: Prisma.TransportadoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportadoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportadoraCountArgs<ExtArgs>
            result: $Utils.Optional<TransportadoraCountAggregateOutputType> | number
          }
        }
      }
      ComprovanteEntrega: {
        payload: Prisma.$ComprovanteEntregaPayload<ExtArgs>
        fields: Prisma.ComprovanteEntregaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprovanteEntregaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprovanteEntregaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          findFirst: {
            args: Prisma.ComprovanteEntregaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprovanteEntregaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          findMany: {
            args: Prisma.ComprovanteEntregaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>[]
          }
          create: {
            args: Prisma.ComprovanteEntregaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          createMany: {
            args: Prisma.ComprovanteEntregaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComprovanteEntregaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>[]
          }
          delete: {
            args: Prisma.ComprovanteEntregaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          update: {
            args: Prisma.ComprovanteEntregaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          deleteMany: {
            args: Prisma.ComprovanteEntregaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprovanteEntregaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComprovanteEntregaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>[]
          }
          upsert: {
            args: Prisma.ComprovanteEntregaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprovanteEntregaPayload>
          }
          aggregate: {
            args: Prisma.ComprovanteEntregaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprovanteEntrega>
          }
          groupBy: {
            args: Prisma.ComprovanteEntregaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprovanteEntregaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprovanteEntregaCountArgs<ExtArgs>
            result: $Utils.Optional<ComprovanteEntregaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    promocao?: PromocaoOmit
    frete?: FreteOmit
    pedidoStatus?: PedidoStatusOmit
    vendaResumo?: VendaResumoOmit
    transportadora?: TransportadoraOmit
    comprovanteEntrega?: ComprovanteEntregaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedidos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itens: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ProdutoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
    historicoStatus: number
    comprovantes: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
    historicoStatus?: boolean | PedidoCountOutputTypeCountHistoricoStatusArgs
    comprovantes?: boolean | PedidoCountOutputTypeCountComprovantesArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountHistoricoStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoStatusWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountComprovantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprovanteEntregaWhereInput
  }


  /**
   * Count Type PromocaoCountOutputType
   */

  export type PromocaoCountOutputType = {
    itensPedido: number
    Produto: number
  }

  export type PromocaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | PromocaoCountOutputTypeCountItensPedidoArgs
    Produto?: boolean | PromocaoCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * PromocaoCountOutputType without action
   */
  export type PromocaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromocaoCountOutputType
     */
    select?: PromocaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromocaoCountOutputType without action
   */
  export type PromocaoCountOutputTypeCountItensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }

  /**
   * PromocaoCountOutputType without action
   */
  export type PromocaoCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type TransportadoraCountOutputType
   */

  export type TransportadoraCountOutputType = {
    fretes: number
  }

  export type TransportadoraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fretes?: boolean | TransportadoraCountOutputTypeCountFretesArgs
  }

  // Custom InputTypes
  /**
   * TransportadoraCountOutputType without action
   */
  export type TransportadoraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportadoraCountOutputType
     */
    select?: TransportadoraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportadoraCountOutputType without action
   */
  export type TransportadoraCountOutputTypeCountFretesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    cpf: string | null
    role: $Enums.Role | null
    cep: string | null
    logradouro: string | null
    cidade: string | null
    estado: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    password: string | null
    cpf: string | null
    role: $Enums.Role | null
    cep: string | null
    logradouro: string | null
    cidade: string | null
    estado: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    password: number
    cpf: number
    role: number
    cep: number
    logradouro: number
    cidade: number
    estado: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    cep?: true
    logradouro?: true
    cidade?: true
    estado?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    cep?: true
    logradouro?: true
    cidade?: true
    estado?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    password?: true
    cpf?: true
    role?: true
    cep?: true
    logradouro?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    password: string
    cpf: string | null
    role: $Enums.Role
    cep: string | null
    logradouro: string | null
    cidade: string | null
    estado: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    cep?: boolean
    logradouro?: boolean
    cidade?: boolean
    estado?: boolean
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    cep?: boolean
    logradouro?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    cep?: boolean
    logradouro?: boolean
    cidade?: boolean
    estado?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    password?: boolean
    cpf?: boolean
    role?: boolean
    cep?: boolean
    logradouro?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "password" | "cpf" | "role" | "cep" | "logradouro" | "cidade" | "estado", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      password: string
      cpf: string | null
      role: $Enums.Role
      cep: string | null
      logradouro: string | null
      cidade: string | null
      estado: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly password: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly role: FieldRef<"Cliente", 'Role'>
    readonly cep: FieldRef<"Cliente", 'String'>
    readonly logradouro: FieldRef<"Cliente", 'String'>
    readonly cidade: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    price: number | null
    estoque: number | null
    promocaoId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    price: number | null
    estoque: number | null
    promocaoId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    title: string | null
    categoria: string | null
    description: string | null
    price: number | null
    image: string | null
    estoque: number | null
    createdAt: Date | null
    promocaoId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    categoria: string | null
    description: string | null
    price: number | null
    image: string | null
    estoque: number | null
    createdAt: Date | null
    promocaoId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    title: number
    categoria: number
    description: number
    price: number
    image: number
    estoque: number
    createdAt: number
    promocaoId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    price?: true
    estoque?: true
    promocaoId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    price?: true
    estoque?: true
    promocaoId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    title?: true
    categoria?: true
    description?: true
    price?: true
    image?: true
    estoque?: true
    createdAt?: true
    promocaoId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    title?: true
    categoria?: true
    description?: true
    price?: true
    image?: true
    estoque?: true
    createdAt?: true
    promocaoId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    title?: true
    categoria?: true
    description?: true
    price?: true
    image?: true
    estoque?: true
    createdAt?: true
    promocaoId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    title: string
    categoria: string | null
    description: string
    price: number
    image: string
    estoque: number
    createdAt: Date
    promocaoId: number | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoria?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    estoque?: boolean
    createdAt?: boolean
    promocaoId?: boolean
    itens?: boolean | Produto$itensArgs<ExtArgs>
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoria?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    estoque?: boolean
    createdAt?: boolean
    promocaoId?: boolean
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoria?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    estoque?: boolean
    createdAt?: boolean
    promocaoId?: boolean
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    title?: boolean
    categoria?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    estoque?: boolean
    createdAt?: boolean
    promocaoId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "categoria" | "description" | "price" | "image" | "estoque" | "createdAt" | "promocaoId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Produto$itensArgs<ExtArgs>
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promocao?: boolean | Produto$promocaoArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
      promocao: Prisma.$PromocaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      categoria: string | null
      description: string
      price: number
      image: string
      estoque: number
      createdAt: Date
      promocaoId: number | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Produto$itensArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promocao<T extends Produto$promocaoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$promocaoArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly title: FieldRef<"Produto", 'String'>
    readonly categoria: FieldRef<"Produto", 'String'>
    readonly description: FieldRef<"Produto", 'String'>
    readonly price: FieldRef<"Produto", 'Float'>
    readonly image: FieldRef<"Produto", 'String'>
    readonly estoque: FieldRef<"Produto", 'Int'>
    readonly createdAt: FieldRef<"Produto", 'DateTime'>
    readonly promocaoId: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itens
   */
  export type Produto$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Produto.promocao
   */
  export type Produto$promocaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    where?: PromocaoWhereInput
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    valorTotal: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    valorTotal: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    numeroPedido: string | null
    clienteId: number | null
    valorTotal: number | null
    status: string | null
    stripeSessionId: string | null
    createdAt: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    numeroPedido: string | null
    clienteId: number | null
    valorTotal: number | null
    status: string | null
    stripeSessionId: string | null
    createdAt: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    numeroPedido: number
    clienteId: number
    valorTotal: number
    status: number
    stripeSessionId: number
    createdAt: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    clienteId?: true
    valorTotal?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    clienteId?: true
    valorTotal?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    numeroPedido?: true
    clienteId?: true
    valorTotal?: true
    status?: true
    stripeSessionId?: true
    createdAt?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    numeroPedido?: true
    clienteId?: true
    valorTotal?: true
    status?: true
    stripeSessionId?: true
    createdAt?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    numeroPedido?: true
    clienteId?: true
    valorTotal?: true
    status?: true
    stripeSessionId?: true
    createdAt?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroPedido?: boolean
    clienteId?: boolean
    valorTotal?: boolean
    status?: boolean
    stripeSessionId?: boolean
    createdAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    frete?: boolean | Pedido$freteArgs<ExtArgs>
    historicoStatus?: boolean | Pedido$historicoStatusArgs<ExtArgs>
    comprovantes?: boolean | Pedido$comprovantesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroPedido?: boolean
    clienteId?: boolean
    valorTotal?: boolean
    status?: boolean
    stripeSessionId?: boolean
    createdAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroPedido?: boolean
    clienteId?: boolean
    valorTotal?: boolean
    status?: boolean
    stripeSessionId?: boolean
    createdAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    numeroPedido?: boolean
    clienteId?: boolean
    valorTotal?: boolean
    status?: boolean
    stripeSessionId?: boolean
    createdAt?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroPedido" | "clienteId" | "valorTotal" | "status" | "stripeSessionId" | "createdAt", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    frete?: boolean | Pedido$freteArgs<ExtArgs>
    historicoStatus?: boolean | Pedido$historicoStatusArgs<ExtArgs>
    comprovantes?: boolean | Pedido$comprovantesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
      frete: Prisma.$FretePayload<ExtArgs> | null
      historicoStatus: Prisma.$PedidoStatusPayload<ExtArgs>[]
      comprovantes: Prisma.$ComprovanteEntregaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroPedido: string
      clienteId: number
      valorTotal: number
      status: string
      stripeSessionId: string
      createdAt: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frete<T extends Pedido$freteArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$freteArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historicoStatus<T extends Pedido$historicoStatusArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$historicoStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comprovantes<T extends Pedido$comprovantesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$comprovantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly numeroPedido: FieldRef<"Pedido", 'String'>
    readonly clienteId: FieldRef<"Pedido", 'Int'>
    readonly valorTotal: FieldRef<"Pedido", 'Float'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly stripeSessionId: FieldRef<"Pedido", 'String'>
    readonly createdAt: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido.frete
   */
  export type Pedido$freteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    where?: FreteWhereInput
  }

  /**
   * Pedido.historicoStatus
   */
  export type Pedido$historicoStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    where?: PedidoStatusWhereInput
    orderBy?: PedidoStatusOrderByWithRelationInput | PedidoStatusOrderByWithRelationInput[]
    cursor?: PedidoStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoStatusScalarFieldEnum | PedidoStatusScalarFieldEnum[]
  }

  /**
   * Pedido.comprovantes
   */
  export type Pedido$comprovantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    where?: ComprovanteEntregaWhereInput
    orderBy?: ComprovanteEntregaOrderByWithRelationInput | ComprovanteEntregaOrderByWithRelationInput[]
    cursor?: ComprovanteEntregaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComprovanteEntregaScalarFieldEnum | ComprovanteEntregaScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valor: number | null
    promocaoId: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valor: number | null
    promocaoId: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valor: number | null
    promocaoId: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    produtoId: number | null
    quantidade: number | null
    valor: number | null
    promocaoId: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor: number
    promocaoId: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valor?: true
    promocaoId?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valor?: true
    promocaoId?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valor?: true
    promocaoId?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valor?: true
    promocaoId?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    produtoId?: true
    quantidade?: true
    valor?: true
    promocaoId?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor: number | null
    promocaoId: number | null
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valor?: boolean
    promocaoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valor?: boolean
    promocaoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valor?: boolean
    promocaoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    valor?: boolean
    promocaoId?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "produtoId" | "quantidade" | "valor" | "promocaoId", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    promocao?: boolean | ItemPedido$promocaoArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
      promocao: Prisma.$PromocaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      produtoId: number
      quantidade: number
      valor: number | null
      promocaoId: number | null
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promocao<T extends ItemPedido$promocaoArgs<ExtArgs> = {}>(args?: Subset<T, ItemPedido$promocaoArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly produtoId: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly valor: FieldRef<"ItemPedido", 'Float'>
    readonly promocaoId: FieldRef<"ItemPedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido.promocao
   */
  export type ItemPedido$promocaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    where?: PromocaoWhereInput
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model Promocao
   */

  export type AggregatePromocao = {
    _count: PromocaoCountAggregateOutputType | null
    _avg: PromocaoAvgAggregateOutputType | null
    _sum: PromocaoSumAggregateOutputType | null
    _min: PromocaoMinAggregateOutputType | null
    _max: PromocaoMaxAggregateOutputType | null
  }

  export type PromocaoAvgAggregateOutputType = {
    id: number | null
    desconto: number | null
  }

  export type PromocaoSumAggregateOutputType = {
    id: number | null
    desconto: number | null
  }

  export type PromocaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    desconto: number | null
    freteGratis: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type PromocaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    desconto: number | null
    freteGratis: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
  }

  export type PromocaoCountAggregateOutputType = {
    id: number
    nome: number
    desconto: number
    freteGratis: number
    dataInicio: number
    dataFim: number
    _all: number
  }


  export type PromocaoAvgAggregateInputType = {
    id?: true
    desconto?: true
  }

  export type PromocaoSumAggregateInputType = {
    id?: true
    desconto?: true
  }

  export type PromocaoMinAggregateInputType = {
    id?: true
    nome?: true
    desconto?: true
    freteGratis?: true
    dataInicio?: true
    dataFim?: true
  }

  export type PromocaoMaxAggregateInputType = {
    id?: true
    nome?: true
    desconto?: true
    freteGratis?: true
    dataInicio?: true
    dataFim?: true
  }

  export type PromocaoCountAggregateInputType = {
    id?: true
    nome?: true
    desconto?: true
    freteGratis?: true
    dataInicio?: true
    dataFim?: true
    _all?: true
  }

  export type PromocaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocao to aggregate.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promocaos
    **/
    _count?: true | PromocaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromocaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromocaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromocaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromocaoMaxAggregateInputType
  }

  export type GetPromocaoAggregateType<T extends PromocaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromocao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromocao[P]>
      : GetScalarType<T[P], AggregatePromocao[P]>
  }




  export type PromocaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromocaoWhereInput
    orderBy?: PromocaoOrderByWithAggregationInput | PromocaoOrderByWithAggregationInput[]
    by: PromocaoScalarFieldEnum[] | PromocaoScalarFieldEnum
    having?: PromocaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromocaoCountAggregateInputType | true
    _avg?: PromocaoAvgAggregateInputType
    _sum?: PromocaoSumAggregateInputType
    _min?: PromocaoMinAggregateInputType
    _max?: PromocaoMaxAggregateInputType
  }

  export type PromocaoGroupByOutputType = {
    id: number
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date
    dataFim: Date
    _count: PromocaoCountAggregateOutputType | null
    _avg: PromocaoAvgAggregateOutputType | null
    _sum: PromocaoSumAggregateOutputType | null
    _min: PromocaoMinAggregateOutputType | null
    _max: PromocaoMaxAggregateOutputType | null
  }

  type GetPromocaoGroupByPayload<T extends PromocaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromocaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromocaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromocaoGroupByOutputType[P]>
            : GetScalarType<T[P], PromocaoGroupByOutputType[P]>
        }
      >
    >


  export type PromocaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desconto?: boolean
    freteGratis?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    itensPedido?: boolean | Promocao$itensPedidoArgs<ExtArgs>
    Produto?: boolean | Promocao$ProdutoArgs<ExtArgs>
    _count?: boolean | PromocaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desconto?: boolean
    freteGratis?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    desconto?: boolean
    freteGratis?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }, ExtArgs["result"]["promocao"]>

  export type PromocaoSelectScalar = {
    id?: boolean
    nome?: boolean
    desconto?: boolean
    freteGratis?: boolean
    dataInicio?: boolean
    dataFim?: boolean
  }

  export type PromocaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "desconto" | "freteGratis" | "dataInicio" | "dataFim", ExtArgs["result"]["promocao"]>
  export type PromocaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPedido?: boolean | Promocao$itensPedidoArgs<ExtArgs>
    Produto?: boolean | Promocao$ProdutoArgs<ExtArgs>
    _count?: boolean | PromocaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromocaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromocaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromocaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promocao"
    objects: {
      itensPedido: Prisma.$ItemPedidoPayload<ExtArgs>[]
      Produto: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      desconto: number
      freteGratis: boolean
      dataInicio: Date
      dataFim: Date
    }, ExtArgs["result"]["promocao"]>
    composites: {}
  }

  type PromocaoGetPayload<S extends boolean | null | undefined | PromocaoDefaultArgs> = $Result.GetResult<Prisma.$PromocaoPayload, S>

  type PromocaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromocaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromocaoCountAggregateInputType | true
    }

  export interface PromocaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promocao'], meta: { name: 'Promocao' } }
    /**
     * Find zero or one Promocao that matches the filter.
     * @param {PromocaoFindUniqueArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromocaoFindUniqueArgs>(args: SelectSubset<T, PromocaoFindUniqueArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promocao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromocaoFindUniqueOrThrowArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromocaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromocaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindFirstArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromocaoFindFirstArgs>(args?: SelectSubset<T, PromocaoFindFirstArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promocao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindFirstOrThrowArgs} args - Arguments to find a Promocao
     * @example
     * // Get one Promocao
     * const promocao = await prisma.promocao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromocaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromocaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promocaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promocaos
     * const promocaos = await prisma.promocao.findMany()
     * 
     * // Get first 10 Promocaos
     * const promocaos = await prisma.promocao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promocaoWithIdOnly = await prisma.promocao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromocaoFindManyArgs>(args?: SelectSubset<T, PromocaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promocao.
     * @param {PromocaoCreateArgs} args - Arguments to create a Promocao.
     * @example
     * // Create one Promocao
     * const Promocao = await prisma.promocao.create({
     *   data: {
     *     // ... data to create a Promocao
     *   }
     * })
     * 
     */
    create<T extends PromocaoCreateArgs>(args: SelectSubset<T, PromocaoCreateArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promocaos.
     * @param {PromocaoCreateManyArgs} args - Arguments to create many Promocaos.
     * @example
     * // Create many Promocaos
     * const promocao = await prisma.promocao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromocaoCreateManyArgs>(args?: SelectSubset<T, PromocaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promocaos and returns the data saved in the database.
     * @param {PromocaoCreateManyAndReturnArgs} args - Arguments to create many Promocaos.
     * @example
     * // Create many Promocaos
     * const promocao = await prisma.promocao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promocaos and only return the `id`
     * const promocaoWithIdOnly = await prisma.promocao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromocaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PromocaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promocao.
     * @param {PromocaoDeleteArgs} args - Arguments to delete one Promocao.
     * @example
     * // Delete one Promocao
     * const Promocao = await prisma.promocao.delete({
     *   where: {
     *     // ... filter to delete one Promocao
     *   }
     * })
     * 
     */
    delete<T extends PromocaoDeleteArgs>(args: SelectSubset<T, PromocaoDeleteArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promocao.
     * @param {PromocaoUpdateArgs} args - Arguments to update one Promocao.
     * @example
     * // Update one Promocao
     * const promocao = await prisma.promocao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromocaoUpdateArgs>(args: SelectSubset<T, PromocaoUpdateArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promocaos.
     * @param {PromocaoDeleteManyArgs} args - Arguments to filter Promocaos to delete.
     * @example
     * // Delete a few Promocaos
     * const { count } = await prisma.promocao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromocaoDeleteManyArgs>(args?: SelectSubset<T, PromocaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promocaos
     * const promocao = await prisma.promocao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromocaoUpdateManyArgs>(args: SelectSubset<T, PromocaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promocaos and returns the data updated in the database.
     * @param {PromocaoUpdateManyAndReturnArgs} args - Arguments to update many Promocaos.
     * @example
     * // Update many Promocaos
     * const promocao = await prisma.promocao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promocaos and only return the `id`
     * const promocaoWithIdOnly = await prisma.promocao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromocaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PromocaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promocao.
     * @param {PromocaoUpsertArgs} args - Arguments to update or create a Promocao.
     * @example
     * // Update or create a Promocao
     * const promocao = await prisma.promocao.upsert({
     *   create: {
     *     // ... data to create a Promocao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promocao we want to update
     *   }
     * })
     */
    upsert<T extends PromocaoUpsertArgs>(args: SelectSubset<T, PromocaoUpsertArgs<ExtArgs>>): Prisma__PromocaoClient<$Result.GetResult<Prisma.$PromocaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoCountArgs} args - Arguments to filter Promocaos to count.
     * @example
     * // Count the number of Promocaos
     * const count = await prisma.promocao.count({
     *   where: {
     *     // ... the filter for the Promocaos we want to count
     *   }
     * })
    **/
    count<T extends PromocaoCountArgs>(
      args?: Subset<T, PromocaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromocaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromocaoAggregateArgs>(args: Subset<T, PromocaoAggregateArgs>): Prisma.PrismaPromise<GetPromocaoAggregateType<T>>

    /**
     * Group by Promocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromocaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromocaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromocaoGroupByArgs['orderBy'] }
        : { orderBy?: PromocaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromocaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promocao model
   */
  readonly fields: PromocaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promocao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromocaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensPedido<T extends Promocao$itensPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Promocao$itensPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Produto<T extends Promocao$ProdutoArgs<ExtArgs> = {}>(args?: Subset<T, Promocao$ProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promocao model
   */
  interface PromocaoFieldRefs {
    readonly id: FieldRef<"Promocao", 'Int'>
    readonly nome: FieldRef<"Promocao", 'String'>
    readonly desconto: FieldRef<"Promocao", 'Int'>
    readonly freteGratis: FieldRef<"Promocao", 'Boolean'>
    readonly dataInicio: FieldRef<"Promocao", 'DateTime'>
    readonly dataFim: FieldRef<"Promocao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promocao findUnique
   */
  export type PromocaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao findUniqueOrThrow
   */
  export type PromocaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao findFirst
   */
  export type PromocaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocaos.
     */
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao findFirstOrThrow
   */
  export type PromocaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter, which Promocao to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promocaos.
     */
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao findMany
   */
  export type PromocaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter, which Promocaos to fetch.
     */
    where?: PromocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promocaos to fetch.
     */
    orderBy?: PromocaoOrderByWithRelationInput | PromocaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promocaos.
     */
    cursor?: PromocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promocaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promocaos.
     */
    skip?: number
    distinct?: PromocaoScalarFieldEnum | PromocaoScalarFieldEnum[]
  }

  /**
   * Promocao create
   */
  export type PromocaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Promocao.
     */
    data: XOR<PromocaoCreateInput, PromocaoUncheckedCreateInput>
  }

  /**
   * Promocao createMany
   */
  export type PromocaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promocaos.
     */
    data: PromocaoCreateManyInput | PromocaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocao createManyAndReturn
   */
  export type PromocaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data used to create many Promocaos.
     */
    data: PromocaoCreateManyInput | PromocaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promocao update
   */
  export type PromocaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Promocao.
     */
    data: XOR<PromocaoUpdateInput, PromocaoUncheckedUpdateInput>
    /**
     * Choose, which Promocao to update.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao updateMany
   */
  export type PromocaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promocaos.
     */
    data: XOR<PromocaoUpdateManyMutationInput, PromocaoUncheckedUpdateManyInput>
    /**
     * Filter which Promocaos to update
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to update.
     */
    limit?: number
  }

  /**
   * Promocao updateManyAndReturn
   */
  export type PromocaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * The data used to update Promocaos.
     */
    data: XOR<PromocaoUpdateManyMutationInput, PromocaoUncheckedUpdateManyInput>
    /**
     * Filter which Promocaos to update
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to update.
     */
    limit?: number
  }

  /**
   * Promocao upsert
   */
  export type PromocaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Promocao to update in case it exists.
     */
    where: PromocaoWhereUniqueInput
    /**
     * In case the Promocao found by the `where` argument doesn't exist, create a new Promocao with this data.
     */
    create: XOR<PromocaoCreateInput, PromocaoUncheckedCreateInput>
    /**
     * In case the Promocao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromocaoUpdateInput, PromocaoUncheckedUpdateInput>
  }

  /**
   * Promocao delete
   */
  export type PromocaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
    /**
     * Filter which Promocao to delete.
     */
    where: PromocaoWhereUniqueInput
  }

  /**
   * Promocao deleteMany
   */
  export type PromocaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promocaos to delete
     */
    where?: PromocaoWhereInput
    /**
     * Limit how many Promocaos to delete.
     */
    limit?: number
  }

  /**
   * Promocao.itensPedido
   */
  export type Promocao$itensPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Promocao.Produto
   */
  export type Promocao$ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Promocao without action
   */
  export type PromocaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promocao
     */
    select?: PromocaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promocao
     */
    omit?: PromocaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromocaoInclude<ExtArgs> | null
  }


  /**
   * Model Frete
   */

  export type AggregateFrete = {
    _count: FreteCountAggregateOutputType | null
    _avg: FreteAvgAggregateOutputType | null
    _sum: FreteSumAggregateOutputType | null
    _min: FreteMinAggregateOutputType | null
    _max: FreteMaxAggregateOutputType | null
  }

  export type FreteAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    transportadoraId: number | null
  }

  export type FreteSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    valor: number | null
    transportadoraId: number | null
  }

  export type FreteMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    tipo: string | null
    valor: number | null
    prazoEstimado: string | null
    codigoRastreamento: string | null
    transportadoraId: number | null
  }

  export type FreteMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    tipo: string | null
    valor: number | null
    prazoEstimado: string | null
    codigoRastreamento: string | null
    transportadoraId: number | null
  }

  export type FreteCountAggregateOutputType = {
    id: number
    pedidoId: number
    tipo: number
    valor: number
    prazoEstimado: number
    codigoRastreamento: number
    transportadoraId: number
    _all: number
  }


  export type FreteAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    transportadoraId?: true
  }

  export type FreteSumAggregateInputType = {
    id?: true
    pedidoId?: true
    valor?: true
    transportadoraId?: true
  }

  export type FreteMinAggregateInputType = {
    id?: true
    pedidoId?: true
    tipo?: true
    valor?: true
    prazoEstimado?: true
    codigoRastreamento?: true
    transportadoraId?: true
  }

  export type FreteMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    tipo?: true
    valor?: true
    prazoEstimado?: true
    codigoRastreamento?: true
    transportadoraId?: true
  }

  export type FreteCountAggregateInputType = {
    id?: true
    pedidoId?: true
    tipo?: true
    valor?: true
    prazoEstimado?: true
    codigoRastreamento?: true
    transportadoraId?: true
    _all?: true
  }

  export type FreteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frete to aggregate.
     */
    where?: FreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fretes to fetch.
     */
    orderBy?: FreteOrderByWithRelationInput | FreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fretes
    **/
    _count?: true | FreteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreteMaxAggregateInputType
  }

  export type GetFreteAggregateType<T extends FreteAggregateArgs> = {
        [P in keyof T & keyof AggregateFrete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrete[P]>
      : GetScalarType<T[P], AggregateFrete[P]>
  }




  export type FreteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreteWhereInput
    orderBy?: FreteOrderByWithAggregationInput | FreteOrderByWithAggregationInput[]
    by: FreteScalarFieldEnum[] | FreteScalarFieldEnum
    having?: FreteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreteCountAggregateInputType | true
    _avg?: FreteAvgAggregateInputType
    _sum?: FreteSumAggregateInputType
    _min?: FreteMinAggregateInputType
    _max?: FreteMaxAggregateInputType
  }

  export type FreteGroupByOutputType = {
    id: number
    pedidoId: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento: string | null
    transportadoraId: number | null
    _count: FreteCountAggregateOutputType | null
    _avg: FreteAvgAggregateOutputType | null
    _sum: FreteSumAggregateOutputType | null
    _min: FreteMinAggregateOutputType | null
    _max: FreteMaxAggregateOutputType | null
  }

  type GetFreteGroupByPayload<T extends FreteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreteGroupByOutputType[P]>
            : GetScalarType<T[P], FreteGroupByOutputType[P]>
        }
      >
    >


  export type FreteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    tipo?: boolean
    valor?: boolean
    prazoEstimado?: boolean
    codigoRastreamento?: boolean
    transportadoraId?: boolean
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frete"]>

  export type FreteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    tipo?: boolean
    valor?: boolean
    prazoEstimado?: boolean
    codigoRastreamento?: boolean
    transportadoraId?: boolean
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frete"]>

  export type FreteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    tipo?: boolean
    valor?: boolean
    prazoEstimado?: boolean
    codigoRastreamento?: boolean
    transportadoraId?: boolean
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frete"]>

  export type FreteSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    tipo?: boolean
    valor?: boolean
    prazoEstimado?: boolean
    codigoRastreamento?: boolean
    transportadoraId?: boolean
  }

  export type FreteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "tipo" | "valor" | "prazoEstimado" | "codigoRastreamento" | "transportadoraId", ExtArgs["result"]["frete"]>
  export type FreteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type FreteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type FreteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transportadora?: boolean | Frete$transportadoraArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $FretePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frete"
    objects: {
      transportadora: Prisma.$TransportadoraPayload<ExtArgs> | null
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      tipo: string
      valor: number
      prazoEstimado: string
      codigoRastreamento: string | null
      transportadoraId: number | null
    }, ExtArgs["result"]["frete"]>
    composites: {}
  }

  type FreteGetPayload<S extends boolean | null | undefined | FreteDefaultArgs> = $Result.GetResult<Prisma.$FretePayload, S>

  type FreteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FreteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreteCountAggregateInputType | true
    }

  export interface FreteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frete'], meta: { name: 'Frete' } }
    /**
     * Find zero or one Frete that matches the filter.
     * @param {FreteFindUniqueArgs} args - Arguments to find a Frete
     * @example
     * // Get one Frete
     * const frete = await prisma.frete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreteFindUniqueArgs>(args: SelectSubset<T, FreteFindUniqueArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FreteFindUniqueOrThrowArgs} args - Arguments to find a Frete
     * @example
     * // Get one Frete
     * const frete = await prisma.frete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreteFindUniqueOrThrowArgs>(args: SelectSubset<T, FreteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteFindFirstArgs} args - Arguments to find a Frete
     * @example
     * // Get one Frete
     * const frete = await prisma.frete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreteFindFirstArgs>(args?: SelectSubset<T, FreteFindFirstArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteFindFirstOrThrowArgs} args - Arguments to find a Frete
     * @example
     * // Get one Frete
     * const frete = await prisma.frete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreteFindFirstOrThrowArgs>(args?: SelectSubset<T, FreteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fretes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fretes
     * const fretes = await prisma.frete.findMany()
     * 
     * // Get first 10 Fretes
     * const fretes = await prisma.frete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freteWithIdOnly = await prisma.frete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreteFindManyArgs>(args?: SelectSubset<T, FreteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frete.
     * @param {FreteCreateArgs} args - Arguments to create a Frete.
     * @example
     * // Create one Frete
     * const Frete = await prisma.frete.create({
     *   data: {
     *     // ... data to create a Frete
     *   }
     * })
     * 
     */
    create<T extends FreteCreateArgs>(args: SelectSubset<T, FreteCreateArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fretes.
     * @param {FreteCreateManyArgs} args - Arguments to create many Fretes.
     * @example
     * // Create many Fretes
     * const frete = await prisma.frete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreteCreateManyArgs>(args?: SelectSubset<T, FreteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fretes and returns the data saved in the database.
     * @param {FreteCreateManyAndReturnArgs} args - Arguments to create many Fretes.
     * @example
     * // Create many Fretes
     * const frete = await prisma.frete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fretes and only return the `id`
     * const freteWithIdOnly = await prisma.frete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreteCreateManyAndReturnArgs>(args?: SelectSubset<T, FreteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Frete.
     * @param {FreteDeleteArgs} args - Arguments to delete one Frete.
     * @example
     * // Delete one Frete
     * const Frete = await prisma.frete.delete({
     *   where: {
     *     // ... filter to delete one Frete
     *   }
     * })
     * 
     */
    delete<T extends FreteDeleteArgs>(args: SelectSubset<T, FreteDeleteArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frete.
     * @param {FreteUpdateArgs} args - Arguments to update one Frete.
     * @example
     * // Update one Frete
     * const frete = await prisma.frete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreteUpdateArgs>(args: SelectSubset<T, FreteUpdateArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fretes.
     * @param {FreteDeleteManyArgs} args - Arguments to filter Fretes to delete.
     * @example
     * // Delete a few Fretes
     * const { count } = await prisma.frete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreteDeleteManyArgs>(args?: SelectSubset<T, FreteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fretes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fretes
     * const frete = await prisma.frete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreteUpdateManyArgs>(args: SelectSubset<T, FreteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fretes and returns the data updated in the database.
     * @param {FreteUpdateManyAndReturnArgs} args - Arguments to update many Fretes.
     * @example
     * // Update many Fretes
     * const frete = await prisma.frete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fretes and only return the `id`
     * const freteWithIdOnly = await prisma.frete.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FreteUpdateManyAndReturnArgs>(args: SelectSubset<T, FreteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Frete.
     * @param {FreteUpsertArgs} args - Arguments to update or create a Frete.
     * @example
     * // Update or create a Frete
     * const frete = await prisma.frete.upsert({
     *   create: {
     *     // ... data to create a Frete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frete we want to update
     *   }
     * })
     */
    upsert<T extends FreteUpsertArgs>(args: SelectSubset<T, FreteUpsertArgs<ExtArgs>>): Prisma__FreteClient<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fretes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteCountArgs} args - Arguments to filter Fretes to count.
     * @example
     * // Count the number of Fretes
     * const count = await prisma.frete.count({
     *   where: {
     *     // ... the filter for the Fretes we want to count
     *   }
     * })
    **/
    count<T extends FreteCountArgs>(
      args?: Subset<T, FreteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreteAggregateArgs>(args: Subset<T, FreteAggregateArgs>): Prisma.PrismaPromise<GetFreteAggregateType<T>>

    /**
     * Group by Frete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FreteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreteGroupByArgs['orderBy'] }
        : { orderBy?: FreteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FreteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frete model
   */
  readonly fields: FreteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transportadora<T extends Frete$transportadoraArgs<ExtArgs> = {}>(args?: Subset<T, Frete$transportadoraArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Frete model
   */
  interface FreteFieldRefs {
    readonly id: FieldRef<"Frete", 'Int'>
    readonly pedidoId: FieldRef<"Frete", 'Int'>
    readonly tipo: FieldRef<"Frete", 'String'>
    readonly valor: FieldRef<"Frete", 'Float'>
    readonly prazoEstimado: FieldRef<"Frete", 'String'>
    readonly codigoRastreamento: FieldRef<"Frete", 'String'>
    readonly transportadoraId: FieldRef<"Frete", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Frete findUnique
   */
  export type FreteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter, which Frete to fetch.
     */
    where: FreteWhereUniqueInput
  }

  /**
   * Frete findUniqueOrThrow
   */
  export type FreteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter, which Frete to fetch.
     */
    where: FreteWhereUniqueInput
  }

  /**
   * Frete findFirst
   */
  export type FreteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter, which Frete to fetch.
     */
    where?: FreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fretes to fetch.
     */
    orderBy?: FreteOrderByWithRelationInput | FreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fretes.
     */
    cursor?: FreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fretes.
     */
    distinct?: FreteScalarFieldEnum | FreteScalarFieldEnum[]
  }

  /**
   * Frete findFirstOrThrow
   */
  export type FreteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter, which Frete to fetch.
     */
    where?: FreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fretes to fetch.
     */
    orderBy?: FreteOrderByWithRelationInput | FreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fretes.
     */
    cursor?: FreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fretes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fretes.
     */
    distinct?: FreteScalarFieldEnum | FreteScalarFieldEnum[]
  }

  /**
   * Frete findMany
   */
  export type FreteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter, which Fretes to fetch.
     */
    where?: FreteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fretes to fetch.
     */
    orderBy?: FreteOrderByWithRelationInput | FreteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fretes.
     */
    cursor?: FreteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fretes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fretes.
     */
    skip?: number
    distinct?: FreteScalarFieldEnum | FreteScalarFieldEnum[]
  }

  /**
   * Frete create
   */
  export type FreteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * The data needed to create a Frete.
     */
    data: XOR<FreteCreateInput, FreteUncheckedCreateInput>
  }

  /**
   * Frete createMany
   */
  export type FreteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fretes.
     */
    data: FreteCreateManyInput | FreteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frete createManyAndReturn
   */
  export type FreteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * The data used to create many Fretes.
     */
    data: FreteCreateManyInput | FreteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frete update
   */
  export type FreteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * The data needed to update a Frete.
     */
    data: XOR<FreteUpdateInput, FreteUncheckedUpdateInput>
    /**
     * Choose, which Frete to update.
     */
    where: FreteWhereUniqueInput
  }

  /**
   * Frete updateMany
   */
  export type FreteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fretes.
     */
    data: XOR<FreteUpdateManyMutationInput, FreteUncheckedUpdateManyInput>
    /**
     * Filter which Fretes to update
     */
    where?: FreteWhereInput
    /**
     * Limit how many Fretes to update.
     */
    limit?: number
  }

  /**
   * Frete updateManyAndReturn
   */
  export type FreteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * The data used to update Fretes.
     */
    data: XOR<FreteUpdateManyMutationInput, FreteUncheckedUpdateManyInput>
    /**
     * Filter which Fretes to update
     */
    where?: FreteWhereInput
    /**
     * Limit how many Fretes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frete upsert
   */
  export type FreteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * The filter to search for the Frete to update in case it exists.
     */
    where: FreteWhereUniqueInput
    /**
     * In case the Frete found by the `where` argument doesn't exist, create a new Frete with this data.
     */
    create: XOR<FreteCreateInput, FreteUncheckedCreateInput>
    /**
     * In case the Frete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreteUpdateInput, FreteUncheckedUpdateInput>
  }

  /**
   * Frete delete
   */
  export type FreteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    /**
     * Filter which Frete to delete.
     */
    where: FreteWhereUniqueInput
  }

  /**
   * Frete deleteMany
   */
  export type FreteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fretes to delete
     */
    where?: FreteWhereInput
    /**
     * Limit how many Fretes to delete.
     */
    limit?: number
  }

  /**
   * Frete.transportadora
   */
  export type Frete$transportadoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    where?: TransportadoraWhereInput
  }

  /**
   * Frete without action
   */
  export type FreteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
  }


  /**
   * Model PedidoStatus
   */

  export type AggregatePedidoStatus = {
    _count: PedidoStatusCountAggregateOutputType | null
    _avg: PedidoStatusAvgAggregateOutputType | null
    _sum: PedidoStatusSumAggregateOutputType | null
    _min: PedidoStatusMinAggregateOutputType | null
    _max: PedidoStatusMaxAggregateOutputType | null
  }

  export type PedidoStatusAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type PedidoStatusSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type PedidoStatusMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    status: string | null
    dataStatus: Date | null
  }

  export type PedidoStatusMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    status: string | null
    dataStatus: Date | null
  }

  export type PedidoStatusCountAggregateOutputType = {
    id: number
    pedidoId: number
    status: number
    dataStatus: number
    _all: number
  }


  export type PedidoStatusAvgAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type PedidoStatusSumAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type PedidoStatusMinAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    dataStatus?: true
  }

  export type PedidoStatusMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    dataStatus?: true
  }

  export type PedidoStatusCountAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    dataStatus?: true
    _all?: true
  }

  export type PedidoStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoStatus to aggregate.
     */
    where?: PedidoStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoStatuses to fetch.
     */
    orderBy?: PedidoStatusOrderByWithRelationInput | PedidoStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoStatuses
    **/
    _count?: true | PedidoStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoStatusMaxAggregateInputType
  }

  export type GetPedidoStatusAggregateType<T extends PedidoStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoStatus[P]>
      : GetScalarType<T[P], AggregatePedidoStatus[P]>
  }




  export type PedidoStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoStatusWhereInput
    orderBy?: PedidoStatusOrderByWithAggregationInput | PedidoStatusOrderByWithAggregationInput[]
    by: PedidoStatusScalarFieldEnum[] | PedidoStatusScalarFieldEnum
    having?: PedidoStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoStatusCountAggregateInputType | true
    _avg?: PedidoStatusAvgAggregateInputType
    _sum?: PedidoStatusSumAggregateInputType
    _min?: PedidoStatusMinAggregateInputType
    _max?: PedidoStatusMaxAggregateInputType
  }

  export type PedidoStatusGroupByOutputType = {
    id: number
    pedidoId: number
    status: string
    dataStatus: Date
    _count: PedidoStatusCountAggregateOutputType | null
    _avg: PedidoStatusAvgAggregateOutputType | null
    _sum: PedidoStatusSumAggregateOutputType | null
    _min: PedidoStatusMinAggregateOutputType | null
    _max: PedidoStatusMaxAggregateOutputType | null
  }

  type GetPedidoStatusGroupByPayload<T extends PedidoStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoStatusGroupByOutputType[P]>
        }
      >
    >


  export type PedidoStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    dataStatus?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoStatus"]>

  export type PedidoStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    dataStatus?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoStatus"]>

  export type PedidoStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    dataStatus?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoStatus"]>

  export type PedidoStatusSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    dataStatus?: boolean
  }

  export type PedidoStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "status" | "dataStatus", ExtArgs["result"]["pedidoStatus"]>
  export type PedidoStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PedidoStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type PedidoStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PedidoStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoStatus"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      status: string
      dataStatus: Date
    }, ExtArgs["result"]["pedidoStatus"]>
    composites: {}
  }

  type PedidoStatusGetPayload<S extends boolean | null | undefined | PedidoStatusDefaultArgs> = $Result.GetResult<Prisma.$PedidoStatusPayload, S>

  type PedidoStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoStatusCountAggregateInputType | true
    }

  export interface PedidoStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoStatus'], meta: { name: 'PedidoStatus' } }
    /**
     * Find zero or one PedidoStatus that matches the filter.
     * @param {PedidoStatusFindUniqueArgs} args - Arguments to find a PedidoStatus
     * @example
     * // Get one PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoStatusFindUniqueArgs>(args: SelectSubset<T, PedidoStatusFindUniqueArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoStatusFindUniqueOrThrowArgs} args - Arguments to find a PedidoStatus
     * @example
     * // Get one PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusFindFirstArgs} args - Arguments to find a PedidoStatus
     * @example
     * // Get one PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoStatusFindFirstArgs>(args?: SelectSubset<T, PedidoStatusFindFirstArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusFindFirstOrThrowArgs} args - Arguments to find a PedidoStatus
     * @example
     * // Get one PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoStatuses
     * const pedidoStatuses = await prisma.pedidoStatus.findMany()
     * 
     * // Get first 10 PedidoStatuses
     * const pedidoStatuses = await prisma.pedidoStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoStatusWithIdOnly = await prisma.pedidoStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoStatusFindManyArgs>(args?: SelectSubset<T, PedidoStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoStatus.
     * @param {PedidoStatusCreateArgs} args - Arguments to create a PedidoStatus.
     * @example
     * // Create one PedidoStatus
     * const PedidoStatus = await prisma.pedidoStatus.create({
     *   data: {
     *     // ... data to create a PedidoStatus
     *   }
     * })
     * 
     */
    create<T extends PedidoStatusCreateArgs>(args: SelectSubset<T, PedidoStatusCreateArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoStatuses.
     * @param {PedidoStatusCreateManyArgs} args - Arguments to create many PedidoStatuses.
     * @example
     * // Create many PedidoStatuses
     * const pedidoStatus = await prisma.pedidoStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoStatusCreateManyArgs>(args?: SelectSubset<T, PedidoStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoStatuses and returns the data saved in the database.
     * @param {PedidoStatusCreateManyAndReturnArgs} args - Arguments to create many PedidoStatuses.
     * @example
     * // Create many PedidoStatuses
     * const pedidoStatus = await prisma.pedidoStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoStatuses and only return the `id`
     * const pedidoStatusWithIdOnly = await prisma.pedidoStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoStatus.
     * @param {PedidoStatusDeleteArgs} args - Arguments to delete one PedidoStatus.
     * @example
     * // Delete one PedidoStatus
     * const PedidoStatus = await prisma.pedidoStatus.delete({
     *   where: {
     *     // ... filter to delete one PedidoStatus
     *   }
     * })
     * 
     */
    delete<T extends PedidoStatusDeleteArgs>(args: SelectSubset<T, PedidoStatusDeleteArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoStatus.
     * @param {PedidoStatusUpdateArgs} args - Arguments to update one PedidoStatus.
     * @example
     * // Update one PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoStatusUpdateArgs>(args: SelectSubset<T, PedidoStatusUpdateArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoStatuses.
     * @param {PedidoStatusDeleteManyArgs} args - Arguments to filter PedidoStatuses to delete.
     * @example
     * // Delete a few PedidoStatuses
     * const { count } = await prisma.pedidoStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoStatusDeleteManyArgs>(args?: SelectSubset<T, PedidoStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoStatuses
     * const pedidoStatus = await prisma.pedidoStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoStatusUpdateManyArgs>(args: SelectSubset<T, PedidoStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoStatuses and returns the data updated in the database.
     * @param {PedidoStatusUpdateManyAndReturnArgs} args - Arguments to update many PedidoStatuses.
     * @example
     * // Update many PedidoStatuses
     * const pedidoStatus = await prisma.pedidoStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoStatuses and only return the `id`
     * const pedidoStatusWithIdOnly = await prisma.pedidoStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoStatus.
     * @param {PedidoStatusUpsertArgs} args - Arguments to update or create a PedidoStatus.
     * @example
     * // Update or create a PedidoStatus
     * const pedidoStatus = await prisma.pedidoStatus.upsert({
     *   create: {
     *     // ... data to create a PedidoStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoStatus we want to update
     *   }
     * })
     */
    upsert<T extends PedidoStatusUpsertArgs>(args: SelectSubset<T, PedidoStatusUpsertArgs<ExtArgs>>): Prisma__PedidoStatusClient<$Result.GetResult<Prisma.$PedidoStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusCountArgs} args - Arguments to filter PedidoStatuses to count.
     * @example
     * // Count the number of PedidoStatuses
     * const count = await prisma.pedidoStatus.count({
     *   where: {
     *     // ... the filter for the PedidoStatuses we want to count
     *   }
     * })
    **/
    count<T extends PedidoStatusCountArgs>(
      args?: Subset<T, PedidoStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoStatusAggregateArgs>(args: Subset<T, PedidoStatusAggregateArgs>): Prisma.PrismaPromise<GetPedidoStatusAggregateType<T>>

    /**
     * Group by PedidoStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoStatusGroupByArgs['orderBy'] }
        : { orderBy?: PedidoStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoStatus model
   */
  readonly fields: PedidoStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoStatus model
   */
  interface PedidoStatusFieldRefs {
    readonly id: FieldRef<"PedidoStatus", 'Int'>
    readonly pedidoId: FieldRef<"PedidoStatus", 'Int'>
    readonly status: FieldRef<"PedidoStatus", 'String'>
    readonly dataStatus: FieldRef<"PedidoStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PedidoStatus findUnique
   */
  export type PedidoStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter, which PedidoStatus to fetch.
     */
    where: PedidoStatusWhereUniqueInput
  }

  /**
   * PedidoStatus findUniqueOrThrow
   */
  export type PedidoStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter, which PedidoStatus to fetch.
     */
    where: PedidoStatusWhereUniqueInput
  }

  /**
   * PedidoStatus findFirst
   */
  export type PedidoStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter, which PedidoStatus to fetch.
     */
    where?: PedidoStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoStatuses to fetch.
     */
    orderBy?: PedidoStatusOrderByWithRelationInput | PedidoStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoStatuses.
     */
    cursor?: PedidoStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoStatuses.
     */
    distinct?: PedidoStatusScalarFieldEnum | PedidoStatusScalarFieldEnum[]
  }

  /**
   * PedidoStatus findFirstOrThrow
   */
  export type PedidoStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter, which PedidoStatus to fetch.
     */
    where?: PedidoStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoStatuses to fetch.
     */
    orderBy?: PedidoStatusOrderByWithRelationInput | PedidoStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoStatuses.
     */
    cursor?: PedidoStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoStatuses.
     */
    distinct?: PedidoStatusScalarFieldEnum | PedidoStatusScalarFieldEnum[]
  }

  /**
   * PedidoStatus findMany
   */
  export type PedidoStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter, which PedidoStatuses to fetch.
     */
    where?: PedidoStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoStatuses to fetch.
     */
    orderBy?: PedidoStatusOrderByWithRelationInput | PedidoStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoStatuses.
     */
    cursor?: PedidoStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoStatuses.
     */
    skip?: number
    distinct?: PedidoStatusScalarFieldEnum | PedidoStatusScalarFieldEnum[]
  }

  /**
   * PedidoStatus create
   */
  export type PedidoStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoStatus.
     */
    data: XOR<PedidoStatusCreateInput, PedidoStatusUncheckedCreateInput>
  }

  /**
   * PedidoStatus createMany
   */
  export type PedidoStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoStatuses.
     */
    data: PedidoStatusCreateManyInput | PedidoStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoStatus createManyAndReturn
   */
  export type PedidoStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoStatuses.
     */
    data: PedidoStatusCreateManyInput | PedidoStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoStatus update
   */
  export type PedidoStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoStatus.
     */
    data: XOR<PedidoStatusUpdateInput, PedidoStatusUncheckedUpdateInput>
    /**
     * Choose, which PedidoStatus to update.
     */
    where: PedidoStatusWhereUniqueInput
  }

  /**
   * PedidoStatus updateMany
   */
  export type PedidoStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoStatuses.
     */
    data: XOR<PedidoStatusUpdateManyMutationInput, PedidoStatusUncheckedUpdateManyInput>
    /**
     * Filter which PedidoStatuses to update
     */
    where?: PedidoStatusWhereInput
    /**
     * Limit how many PedidoStatuses to update.
     */
    limit?: number
  }

  /**
   * PedidoStatus updateManyAndReturn
   */
  export type PedidoStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * The data used to update PedidoStatuses.
     */
    data: XOR<PedidoStatusUpdateManyMutationInput, PedidoStatusUncheckedUpdateManyInput>
    /**
     * Filter which PedidoStatuses to update
     */
    where?: PedidoStatusWhereInput
    /**
     * Limit how many PedidoStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoStatus upsert
   */
  export type PedidoStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoStatus to update in case it exists.
     */
    where: PedidoStatusWhereUniqueInput
    /**
     * In case the PedidoStatus found by the `where` argument doesn't exist, create a new PedidoStatus with this data.
     */
    create: XOR<PedidoStatusCreateInput, PedidoStatusUncheckedCreateInput>
    /**
     * In case the PedidoStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoStatusUpdateInput, PedidoStatusUncheckedUpdateInput>
  }

  /**
   * PedidoStatus delete
   */
  export type PedidoStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
    /**
     * Filter which PedidoStatus to delete.
     */
    where: PedidoStatusWhereUniqueInput
  }

  /**
   * PedidoStatus deleteMany
   */
  export type PedidoStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoStatuses to delete
     */
    where?: PedidoStatusWhereInput
    /**
     * Limit how many PedidoStatuses to delete.
     */
    limit?: number
  }

  /**
   * PedidoStatus without action
   */
  export type PedidoStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoStatus
     */
    select?: PedidoStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoStatus
     */
    omit?: PedidoStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoStatusInclude<ExtArgs> | null
  }


  /**
   * Model VendaResumo
   */

  export type AggregateVendaResumo = {
    _count: VendaResumoCountAggregateOutputType | null
    _avg: VendaResumoAvgAggregateOutputType | null
    _sum: VendaResumoSumAggregateOutputType | null
    _min: VendaResumoMinAggregateOutputType | null
    _max: VendaResumoMaxAggregateOutputType | null
  }

  export type VendaResumoAvgAggregateOutputType = {
    id: number | null
    totalVendas: number | null
    qtdPedidos: number | null
    qtdProdutos: number | null
  }

  export type VendaResumoSumAggregateOutputType = {
    id: number | null
    totalVendas: number | null
    qtdPedidos: number | null
    qtdProdutos: number | null
  }

  export type VendaResumoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    totalVendas: number | null
    qtdPedidos: number | null
    qtdProdutos: number | null
  }

  export type VendaResumoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    totalVendas: number | null
    qtdPedidos: number | null
    qtdProdutos: number | null
  }

  export type VendaResumoCountAggregateOutputType = {
    id: number
    data: number
    totalVendas: number
    qtdPedidos: number
    qtdProdutos: number
    _all: number
  }


  export type VendaResumoAvgAggregateInputType = {
    id?: true
    totalVendas?: true
    qtdPedidos?: true
    qtdProdutos?: true
  }

  export type VendaResumoSumAggregateInputType = {
    id?: true
    totalVendas?: true
    qtdPedidos?: true
    qtdProdutos?: true
  }

  export type VendaResumoMinAggregateInputType = {
    id?: true
    data?: true
    totalVendas?: true
    qtdPedidos?: true
    qtdProdutos?: true
  }

  export type VendaResumoMaxAggregateInputType = {
    id?: true
    data?: true
    totalVendas?: true
    qtdPedidos?: true
    qtdProdutos?: true
  }

  export type VendaResumoCountAggregateInputType = {
    id?: true
    data?: true
    totalVendas?: true
    qtdPedidos?: true
    qtdProdutos?: true
    _all?: true
  }

  export type VendaResumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendaResumo to aggregate.
     */
    where?: VendaResumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendaResumos to fetch.
     */
    orderBy?: VendaResumoOrderByWithRelationInput | VendaResumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendaResumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendaResumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendaResumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendaResumos
    **/
    _count?: true | VendaResumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendaResumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendaResumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendaResumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendaResumoMaxAggregateInputType
  }

  export type GetVendaResumoAggregateType<T extends VendaResumoAggregateArgs> = {
        [P in keyof T & keyof AggregateVendaResumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendaResumo[P]>
      : GetScalarType<T[P], AggregateVendaResumo[P]>
  }




  export type VendaResumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaResumoWhereInput
    orderBy?: VendaResumoOrderByWithAggregationInput | VendaResumoOrderByWithAggregationInput[]
    by: VendaResumoScalarFieldEnum[] | VendaResumoScalarFieldEnum
    having?: VendaResumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendaResumoCountAggregateInputType | true
    _avg?: VendaResumoAvgAggregateInputType
    _sum?: VendaResumoSumAggregateInputType
    _min?: VendaResumoMinAggregateInputType
    _max?: VendaResumoMaxAggregateInputType
  }

  export type VendaResumoGroupByOutputType = {
    id: number
    data: Date
    totalVendas: number
    qtdPedidos: number
    qtdProdutos: number
    _count: VendaResumoCountAggregateOutputType | null
    _avg: VendaResumoAvgAggregateOutputType | null
    _sum: VendaResumoSumAggregateOutputType | null
    _min: VendaResumoMinAggregateOutputType | null
    _max: VendaResumoMaxAggregateOutputType | null
  }

  type GetVendaResumoGroupByPayload<T extends VendaResumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendaResumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendaResumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendaResumoGroupByOutputType[P]>
            : GetScalarType<T[P], VendaResumoGroupByOutputType[P]>
        }
      >
    >


  export type VendaResumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalVendas?: boolean
    qtdPedidos?: boolean
    qtdProdutos?: boolean
  }, ExtArgs["result"]["vendaResumo"]>

  export type VendaResumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalVendas?: boolean
    qtdPedidos?: boolean
    qtdProdutos?: boolean
  }, ExtArgs["result"]["vendaResumo"]>

  export type VendaResumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalVendas?: boolean
    qtdPedidos?: boolean
    qtdProdutos?: boolean
  }, ExtArgs["result"]["vendaResumo"]>

  export type VendaResumoSelectScalar = {
    id?: boolean
    data?: boolean
    totalVendas?: boolean
    qtdPedidos?: boolean
    qtdProdutos?: boolean
  }

  export type VendaResumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "totalVendas" | "qtdPedidos" | "qtdProdutos", ExtArgs["result"]["vendaResumo"]>

  export type $VendaResumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendaResumo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      totalVendas: number
      qtdPedidos: number
      qtdProdutos: number
    }, ExtArgs["result"]["vendaResumo"]>
    composites: {}
  }

  type VendaResumoGetPayload<S extends boolean | null | undefined | VendaResumoDefaultArgs> = $Result.GetResult<Prisma.$VendaResumoPayload, S>

  type VendaResumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendaResumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendaResumoCountAggregateInputType | true
    }

  export interface VendaResumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendaResumo'], meta: { name: 'VendaResumo' } }
    /**
     * Find zero or one VendaResumo that matches the filter.
     * @param {VendaResumoFindUniqueArgs} args - Arguments to find a VendaResumo
     * @example
     * // Get one VendaResumo
     * const vendaResumo = await prisma.vendaResumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendaResumoFindUniqueArgs>(args: SelectSubset<T, VendaResumoFindUniqueArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendaResumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendaResumoFindUniqueOrThrowArgs} args - Arguments to find a VendaResumo
     * @example
     * // Get one VendaResumo
     * const vendaResumo = await prisma.vendaResumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendaResumoFindUniqueOrThrowArgs>(args: SelectSubset<T, VendaResumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendaResumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoFindFirstArgs} args - Arguments to find a VendaResumo
     * @example
     * // Get one VendaResumo
     * const vendaResumo = await prisma.vendaResumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendaResumoFindFirstArgs>(args?: SelectSubset<T, VendaResumoFindFirstArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendaResumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoFindFirstOrThrowArgs} args - Arguments to find a VendaResumo
     * @example
     * // Get one VendaResumo
     * const vendaResumo = await prisma.vendaResumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendaResumoFindFirstOrThrowArgs>(args?: SelectSubset<T, VendaResumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendaResumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendaResumos
     * const vendaResumos = await prisma.vendaResumo.findMany()
     * 
     * // Get first 10 VendaResumos
     * const vendaResumos = await prisma.vendaResumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendaResumoWithIdOnly = await prisma.vendaResumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendaResumoFindManyArgs>(args?: SelectSubset<T, VendaResumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendaResumo.
     * @param {VendaResumoCreateArgs} args - Arguments to create a VendaResumo.
     * @example
     * // Create one VendaResumo
     * const VendaResumo = await prisma.vendaResumo.create({
     *   data: {
     *     // ... data to create a VendaResumo
     *   }
     * })
     * 
     */
    create<T extends VendaResumoCreateArgs>(args: SelectSubset<T, VendaResumoCreateArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendaResumos.
     * @param {VendaResumoCreateManyArgs} args - Arguments to create many VendaResumos.
     * @example
     * // Create many VendaResumos
     * const vendaResumo = await prisma.vendaResumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendaResumoCreateManyArgs>(args?: SelectSubset<T, VendaResumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendaResumos and returns the data saved in the database.
     * @param {VendaResumoCreateManyAndReturnArgs} args - Arguments to create many VendaResumos.
     * @example
     * // Create many VendaResumos
     * const vendaResumo = await prisma.vendaResumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendaResumos and only return the `id`
     * const vendaResumoWithIdOnly = await prisma.vendaResumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendaResumoCreateManyAndReturnArgs>(args?: SelectSubset<T, VendaResumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendaResumo.
     * @param {VendaResumoDeleteArgs} args - Arguments to delete one VendaResumo.
     * @example
     * // Delete one VendaResumo
     * const VendaResumo = await prisma.vendaResumo.delete({
     *   where: {
     *     // ... filter to delete one VendaResumo
     *   }
     * })
     * 
     */
    delete<T extends VendaResumoDeleteArgs>(args: SelectSubset<T, VendaResumoDeleteArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendaResumo.
     * @param {VendaResumoUpdateArgs} args - Arguments to update one VendaResumo.
     * @example
     * // Update one VendaResumo
     * const vendaResumo = await prisma.vendaResumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendaResumoUpdateArgs>(args: SelectSubset<T, VendaResumoUpdateArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendaResumos.
     * @param {VendaResumoDeleteManyArgs} args - Arguments to filter VendaResumos to delete.
     * @example
     * // Delete a few VendaResumos
     * const { count } = await prisma.vendaResumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendaResumoDeleteManyArgs>(args?: SelectSubset<T, VendaResumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendaResumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendaResumos
     * const vendaResumo = await prisma.vendaResumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendaResumoUpdateManyArgs>(args: SelectSubset<T, VendaResumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendaResumos and returns the data updated in the database.
     * @param {VendaResumoUpdateManyAndReturnArgs} args - Arguments to update many VendaResumos.
     * @example
     * // Update many VendaResumos
     * const vendaResumo = await prisma.vendaResumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendaResumos and only return the `id`
     * const vendaResumoWithIdOnly = await prisma.vendaResumo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendaResumoUpdateManyAndReturnArgs>(args: SelectSubset<T, VendaResumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendaResumo.
     * @param {VendaResumoUpsertArgs} args - Arguments to update or create a VendaResumo.
     * @example
     * // Update or create a VendaResumo
     * const vendaResumo = await prisma.vendaResumo.upsert({
     *   create: {
     *     // ... data to create a VendaResumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendaResumo we want to update
     *   }
     * })
     */
    upsert<T extends VendaResumoUpsertArgs>(args: SelectSubset<T, VendaResumoUpsertArgs<ExtArgs>>): Prisma__VendaResumoClient<$Result.GetResult<Prisma.$VendaResumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendaResumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoCountArgs} args - Arguments to filter VendaResumos to count.
     * @example
     * // Count the number of VendaResumos
     * const count = await prisma.vendaResumo.count({
     *   where: {
     *     // ... the filter for the VendaResumos we want to count
     *   }
     * })
    **/
    count<T extends VendaResumoCountArgs>(
      args?: Subset<T, VendaResumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendaResumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendaResumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendaResumoAggregateArgs>(args: Subset<T, VendaResumoAggregateArgs>): Prisma.PrismaPromise<GetVendaResumoAggregateType<T>>

    /**
     * Group by VendaResumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaResumoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendaResumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendaResumoGroupByArgs['orderBy'] }
        : { orderBy?: VendaResumoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendaResumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendaResumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendaResumo model
   */
  readonly fields: VendaResumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendaResumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendaResumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendaResumo model
   */
  interface VendaResumoFieldRefs {
    readonly id: FieldRef<"VendaResumo", 'Int'>
    readonly data: FieldRef<"VendaResumo", 'DateTime'>
    readonly totalVendas: FieldRef<"VendaResumo", 'Float'>
    readonly qtdPedidos: FieldRef<"VendaResumo", 'Int'>
    readonly qtdProdutos: FieldRef<"VendaResumo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VendaResumo findUnique
   */
  export type VendaResumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter, which VendaResumo to fetch.
     */
    where: VendaResumoWhereUniqueInput
  }

  /**
   * VendaResumo findUniqueOrThrow
   */
  export type VendaResumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter, which VendaResumo to fetch.
     */
    where: VendaResumoWhereUniqueInput
  }

  /**
   * VendaResumo findFirst
   */
  export type VendaResumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter, which VendaResumo to fetch.
     */
    where?: VendaResumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendaResumos to fetch.
     */
    orderBy?: VendaResumoOrderByWithRelationInput | VendaResumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendaResumos.
     */
    cursor?: VendaResumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendaResumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendaResumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendaResumos.
     */
    distinct?: VendaResumoScalarFieldEnum | VendaResumoScalarFieldEnum[]
  }

  /**
   * VendaResumo findFirstOrThrow
   */
  export type VendaResumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter, which VendaResumo to fetch.
     */
    where?: VendaResumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendaResumos to fetch.
     */
    orderBy?: VendaResumoOrderByWithRelationInput | VendaResumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendaResumos.
     */
    cursor?: VendaResumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendaResumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendaResumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendaResumos.
     */
    distinct?: VendaResumoScalarFieldEnum | VendaResumoScalarFieldEnum[]
  }

  /**
   * VendaResumo findMany
   */
  export type VendaResumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter, which VendaResumos to fetch.
     */
    where?: VendaResumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendaResumos to fetch.
     */
    orderBy?: VendaResumoOrderByWithRelationInput | VendaResumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendaResumos.
     */
    cursor?: VendaResumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendaResumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendaResumos.
     */
    skip?: number
    distinct?: VendaResumoScalarFieldEnum | VendaResumoScalarFieldEnum[]
  }

  /**
   * VendaResumo create
   */
  export type VendaResumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * The data needed to create a VendaResumo.
     */
    data: XOR<VendaResumoCreateInput, VendaResumoUncheckedCreateInput>
  }

  /**
   * VendaResumo createMany
   */
  export type VendaResumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendaResumos.
     */
    data: VendaResumoCreateManyInput | VendaResumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendaResumo createManyAndReturn
   */
  export type VendaResumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * The data used to create many VendaResumos.
     */
    data: VendaResumoCreateManyInput | VendaResumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendaResumo update
   */
  export type VendaResumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * The data needed to update a VendaResumo.
     */
    data: XOR<VendaResumoUpdateInput, VendaResumoUncheckedUpdateInput>
    /**
     * Choose, which VendaResumo to update.
     */
    where: VendaResumoWhereUniqueInput
  }

  /**
   * VendaResumo updateMany
   */
  export type VendaResumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendaResumos.
     */
    data: XOR<VendaResumoUpdateManyMutationInput, VendaResumoUncheckedUpdateManyInput>
    /**
     * Filter which VendaResumos to update
     */
    where?: VendaResumoWhereInput
    /**
     * Limit how many VendaResumos to update.
     */
    limit?: number
  }

  /**
   * VendaResumo updateManyAndReturn
   */
  export type VendaResumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * The data used to update VendaResumos.
     */
    data: XOR<VendaResumoUpdateManyMutationInput, VendaResumoUncheckedUpdateManyInput>
    /**
     * Filter which VendaResumos to update
     */
    where?: VendaResumoWhereInput
    /**
     * Limit how many VendaResumos to update.
     */
    limit?: number
  }

  /**
   * VendaResumo upsert
   */
  export type VendaResumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * The filter to search for the VendaResumo to update in case it exists.
     */
    where: VendaResumoWhereUniqueInput
    /**
     * In case the VendaResumo found by the `where` argument doesn't exist, create a new VendaResumo with this data.
     */
    create: XOR<VendaResumoCreateInput, VendaResumoUncheckedCreateInput>
    /**
     * In case the VendaResumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendaResumoUpdateInput, VendaResumoUncheckedUpdateInput>
  }

  /**
   * VendaResumo delete
   */
  export type VendaResumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
    /**
     * Filter which VendaResumo to delete.
     */
    where: VendaResumoWhereUniqueInput
  }

  /**
   * VendaResumo deleteMany
   */
  export type VendaResumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendaResumos to delete
     */
    where?: VendaResumoWhereInput
    /**
     * Limit how many VendaResumos to delete.
     */
    limit?: number
  }

  /**
   * VendaResumo without action
   */
  export type VendaResumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaResumo
     */
    select?: VendaResumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendaResumo
     */
    omit?: VendaResumoOmit<ExtArgs> | null
  }


  /**
   * Model Transportadora
   */

  export type AggregateTransportadora = {
    _count: TransportadoraCountAggregateOutputType | null
    _avg: TransportadoraAvgAggregateOutputType | null
    _sum: TransportadoraSumAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  export type TransportadoraAvgAggregateOutputType = {
    id: number | null
  }

  export type TransportadoraSumAggregateOutputType = {
    id: number | null
  }

  export type TransportadoraMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
  }

  export type TransportadoraMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
  }

  export type TransportadoraCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    telefone: number
    _all: number
  }


  export type TransportadoraAvgAggregateInputType = {
    id?: true
  }

  export type TransportadoraSumAggregateInputType = {
    id?: true
  }

  export type TransportadoraMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
  }

  export type TransportadoraMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
  }

  export type TransportadoraCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    _all?: true
  }

  export type TransportadoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportadora to aggregate.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transportadoras
    **/
    _count?: true | TransportadoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportadoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportadoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportadoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportadoraMaxAggregateInputType
  }

  export type GetTransportadoraAggregateType<T extends TransportadoraAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportadora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportadora[P]>
      : GetScalarType<T[P], AggregateTransportadora[P]>
  }




  export type TransportadoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportadoraWhereInput
    orderBy?: TransportadoraOrderByWithAggregationInput | TransportadoraOrderByWithAggregationInput[]
    by: TransportadoraScalarFieldEnum[] | TransportadoraScalarFieldEnum
    having?: TransportadoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportadoraCountAggregateInputType | true
    _avg?: TransportadoraAvgAggregateInputType
    _sum?: TransportadoraSumAggregateInputType
    _min?: TransportadoraMinAggregateInputType
    _max?: TransportadoraMaxAggregateInputType
  }

  export type TransportadoraGroupByOutputType = {
    id: number
    nome: string
    cnpj: string | null
    telefone: string | null
    _count: TransportadoraCountAggregateOutputType | null
    _avg: TransportadoraAvgAggregateOutputType | null
    _sum: TransportadoraSumAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  type GetTransportadoraGroupByPayload<T extends TransportadoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportadoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportadoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
            : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
        }
      >
    >


  export type TransportadoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    fretes?: boolean | Transportadora$fretesArgs<ExtArgs>
    _count?: boolean | TransportadoraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["transportadora"]>

  export type TransportadoraSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
  }

  export type TransportadoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "telefone", ExtArgs["result"]["transportadora"]>
  export type TransportadoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fretes?: boolean | Transportadora$fretesArgs<ExtArgs>
    _count?: boolean | TransportadoraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportadoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportadoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportadoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transportadora"
    objects: {
      fretes: Prisma.$FretePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cnpj: string | null
      telefone: string | null
    }, ExtArgs["result"]["transportadora"]>
    composites: {}
  }

  type TransportadoraGetPayload<S extends boolean | null | undefined | TransportadoraDefaultArgs> = $Result.GetResult<Prisma.$TransportadoraPayload, S>

  type TransportadoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportadoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportadoraCountAggregateInputType | true
    }

  export interface TransportadoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transportadora'], meta: { name: 'Transportadora' } }
    /**
     * Find zero or one Transportadora that matches the filter.
     * @param {TransportadoraFindUniqueArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportadoraFindUniqueArgs>(args: SelectSubset<T, TransportadoraFindUniqueArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transportadora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportadoraFindUniqueOrThrowArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportadoraFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportadoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportadora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindFirstArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportadoraFindFirstArgs>(args?: SelectSubset<T, TransportadoraFindFirstArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportadora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindFirstOrThrowArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportadoraFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportadoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transportadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportadoras
     * const transportadoras = await prisma.transportadora.findMany()
     * 
     * // Get first 10 Transportadoras
     * const transportadoras = await prisma.transportadora.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportadoraWithIdOnly = await prisma.transportadora.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportadoraFindManyArgs>(args?: SelectSubset<T, TransportadoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transportadora.
     * @param {TransportadoraCreateArgs} args - Arguments to create a Transportadora.
     * @example
     * // Create one Transportadora
     * const Transportadora = await prisma.transportadora.create({
     *   data: {
     *     // ... data to create a Transportadora
     *   }
     * })
     * 
     */
    create<T extends TransportadoraCreateArgs>(args: SelectSubset<T, TransportadoraCreateArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transportadoras.
     * @param {TransportadoraCreateManyArgs} args - Arguments to create many Transportadoras.
     * @example
     * // Create many Transportadoras
     * const transportadora = await prisma.transportadora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportadoraCreateManyArgs>(args?: SelectSubset<T, TransportadoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transportadoras and returns the data saved in the database.
     * @param {TransportadoraCreateManyAndReturnArgs} args - Arguments to create many Transportadoras.
     * @example
     * // Create many Transportadoras
     * const transportadora = await prisma.transportadora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transportadoras and only return the `id`
     * const transportadoraWithIdOnly = await prisma.transportadora.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportadoraCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportadoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transportadora.
     * @param {TransportadoraDeleteArgs} args - Arguments to delete one Transportadora.
     * @example
     * // Delete one Transportadora
     * const Transportadora = await prisma.transportadora.delete({
     *   where: {
     *     // ... filter to delete one Transportadora
     *   }
     * })
     * 
     */
    delete<T extends TransportadoraDeleteArgs>(args: SelectSubset<T, TransportadoraDeleteArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transportadora.
     * @param {TransportadoraUpdateArgs} args - Arguments to update one Transportadora.
     * @example
     * // Update one Transportadora
     * const transportadora = await prisma.transportadora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportadoraUpdateArgs>(args: SelectSubset<T, TransportadoraUpdateArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transportadoras.
     * @param {TransportadoraDeleteManyArgs} args - Arguments to filter Transportadoras to delete.
     * @example
     * // Delete a few Transportadoras
     * const { count } = await prisma.transportadora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportadoraDeleteManyArgs>(args?: SelectSubset<T, TransportadoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportadoras
     * const transportadora = await prisma.transportadora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportadoraUpdateManyArgs>(args: SelectSubset<T, TransportadoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportadoras and returns the data updated in the database.
     * @param {TransportadoraUpdateManyAndReturnArgs} args - Arguments to update many Transportadoras.
     * @example
     * // Update many Transportadoras
     * const transportadora = await prisma.transportadora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transportadoras and only return the `id`
     * const transportadoraWithIdOnly = await prisma.transportadora.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportadoraUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportadoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transportadora.
     * @param {TransportadoraUpsertArgs} args - Arguments to update or create a Transportadora.
     * @example
     * // Update or create a Transportadora
     * const transportadora = await prisma.transportadora.upsert({
     *   create: {
     *     // ... data to create a Transportadora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportadora we want to update
     *   }
     * })
     */
    upsert<T extends TransportadoraUpsertArgs>(args: SelectSubset<T, TransportadoraUpsertArgs<ExtArgs>>): Prisma__TransportadoraClient<$Result.GetResult<Prisma.$TransportadoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraCountArgs} args - Arguments to filter Transportadoras to count.
     * @example
     * // Count the number of Transportadoras
     * const count = await prisma.transportadora.count({
     *   where: {
     *     // ... the filter for the Transportadoras we want to count
     *   }
     * })
    **/
    count<T extends TransportadoraCountArgs>(
      args?: Subset<T, TransportadoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportadoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportadoraAggregateArgs>(args: Subset<T, TransportadoraAggregateArgs>): Prisma.PrismaPromise<GetTransportadoraAggregateType<T>>

    /**
     * Group by Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportadoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportadoraGroupByArgs['orderBy'] }
        : { orderBy?: TransportadoraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportadoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportadoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transportadora model
   */
  readonly fields: TransportadoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transportadora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportadoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fretes<T extends Transportadora$fretesArgs<ExtArgs> = {}>(args?: Subset<T, Transportadora$fretesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FretePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transportadora model
   */
  interface TransportadoraFieldRefs {
    readonly id: FieldRef<"Transportadora", 'Int'>
    readonly nome: FieldRef<"Transportadora", 'String'>
    readonly cnpj: FieldRef<"Transportadora", 'String'>
    readonly telefone: FieldRef<"Transportadora", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transportadora findUnique
   */
  export type TransportadoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora findUniqueOrThrow
   */
  export type TransportadoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora findFirst
   */
  export type TransportadoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportadoras.
     */
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora findFirstOrThrow
   */
  export type TransportadoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadora to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportadoras.
     */
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora findMany
   */
  export type TransportadoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter, which Transportadoras to fetch.
     */
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     */
    orderBy?: TransportadoraOrderByWithRelationInput | TransportadoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transportadoras.
     */
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     */
    skip?: number
    distinct?: TransportadoraScalarFieldEnum | TransportadoraScalarFieldEnum[]
  }

  /**
   * Transportadora create
   */
  export type TransportadoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Transportadora.
     */
    data: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
  }

  /**
   * Transportadora createMany
   */
  export type TransportadoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transportadoras.
     */
    data: TransportadoraCreateManyInput | TransportadoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportadora createManyAndReturn
   */
  export type TransportadoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * The data used to create many Transportadoras.
     */
    data: TransportadoraCreateManyInput | TransportadoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transportadora update
   */
  export type TransportadoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Transportadora.
     */
    data: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
    /**
     * Choose, which Transportadora to update.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora updateMany
   */
  export type TransportadoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transportadoras.
     */
    data: XOR<TransportadoraUpdateManyMutationInput, TransportadoraUncheckedUpdateManyInput>
    /**
     * Filter which Transportadoras to update
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to update.
     */
    limit?: number
  }

  /**
   * Transportadora updateManyAndReturn
   */
  export type TransportadoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * The data used to update Transportadoras.
     */
    data: XOR<TransportadoraUpdateManyMutationInput, TransportadoraUncheckedUpdateManyInput>
    /**
     * Filter which Transportadoras to update
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to update.
     */
    limit?: number
  }

  /**
   * Transportadora upsert
   */
  export type TransportadoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Transportadora to update in case it exists.
     */
    where: TransportadoraWhereUniqueInput
    /**
     * In case the Transportadora found by the `where` argument doesn't exist, create a new Transportadora with this data.
     */
    create: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
    /**
     * In case the Transportadora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
  }

  /**
   * Transportadora delete
   */
  export type TransportadoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
    /**
     * Filter which Transportadora to delete.
     */
    where: TransportadoraWhereUniqueInput
  }

  /**
   * Transportadora deleteMany
   */
  export type TransportadoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportadoras to delete
     */
    where?: TransportadoraWhereInput
    /**
     * Limit how many Transportadoras to delete.
     */
    limit?: number
  }

  /**
   * Transportadora.fretes
   */
  export type Transportadora$fretesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frete
     */
    select?: FreteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frete
     */
    omit?: FreteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreteInclude<ExtArgs> | null
    where?: FreteWhereInput
    orderBy?: FreteOrderByWithRelationInput | FreteOrderByWithRelationInput[]
    cursor?: FreteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreteScalarFieldEnum | FreteScalarFieldEnum[]
  }

  /**
   * Transportadora without action
   */
  export type TransportadoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportadora
     */
    select?: TransportadoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportadora
     */
    omit?: TransportadoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportadoraInclude<ExtArgs> | null
  }


  /**
   * Model ComprovanteEntrega
   */

  export type AggregateComprovanteEntrega = {
    _count: ComprovanteEntregaCountAggregateOutputType | null
    _avg: ComprovanteEntregaAvgAggregateOutputType | null
    _sum: ComprovanteEntregaSumAggregateOutputType | null
    _min: ComprovanteEntregaMinAggregateOutputType | null
    _max: ComprovanteEntregaMaxAggregateOutputType | null
  }

  export type ComprovanteEntregaAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type ComprovanteEntregaSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
  }

  export type ComprovanteEntregaMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    nomeRecebedor: string | null
    fotoUrl: string | null
    dataEntrega: Date | null
  }

  export type ComprovanteEntregaMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    nomeRecebedor: string | null
    fotoUrl: string | null
    dataEntrega: Date | null
  }

  export type ComprovanteEntregaCountAggregateOutputType = {
    id: number
    pedidoId: number
    nomeRecebedor: number
    fotoUrl: number
    dataEntrega: number
    _all: number
  }


  export type ComprovanteEntregaAvgAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type ComprovanteEntregaSumAggregateInputType = {
    id?: true
    pedidoId?: true
  }

  export type ComprovanteEntregaMinAggregateInputType = {
    id?: true
    pedidoId?: true
    nomeRecebedor?: true
    fotoUrl?: true
    dataEntrega?: true
  }

  export type ComprovanteEntregaMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    nomeRecebedor?: true
    fotoUrl?: true
    dataEntrega?: true
  }

  export type ComprovanteEntregaCountAggregateInputType = {
    id?: true
    pedidoId?: true
    nomeRecebedor?: true
    fotoUrl?: true
    dataEntrega?: true
    _all?: true
  }

  export type ComprovanteEntregaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComprovanteEntrega to aggregate.
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprovanteEntregas to fetch.
     */
    orderBy?: ComprovanteEntregaOrderByWithRelationInput | ComprovanteEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprovanteEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprovanteEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprovanteEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComprovanteEntregas
    **/
    _count?: true | ComprovanteEntregaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprovanteEntregaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprovanteEntregaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprovanteEntregaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprovanteEntregaMaxAggregateInputType
  }

  export type GetComprovanteEntregaAggregateType<T extends ComprovanteEntregaAggregateArgs> = {
        [P in keyof T & keyof AggregateComprovanteEntrega]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprovanteEntrega[P]>
      : GetScalarType<T[P], AggregateComprovanteEntrega[P]>
  }




  export type ComprovanteEntregaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprovanteEntregaWhereInput
    orderBy?: ComprovanteEntregaOrderByWithAggregationInput | ComprovanteEntregaOrderByWithAggregationInput[]
    by: ComprovanteEntregaScalarFieldEnum[] | ComprovanteEntregaScalarFieldEnum
    having?: ComprovanteEntregaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprovanteEntregaCountAggregateInputType | true
    _avg?: ComprovanteEntregaAvgAggregateInputType
    _sum?: ComprovanteEntregaSumAggregateInputType
    _min?: ComprovanteEntregaMinAggregateInputType
    _max?: ComprovanteEntregaMaxAggregateInputType
  }

  export type ComprovanteEntregaGroupByOutputType = {
    id: number
    pedidoId: number
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega: Date
    _count: ComprovanteEntregaCountAggregateOutputType | null
    _avg: ComprovanteEntregaAvgAggregateOutputType | null
    _sum: ComprovanteEntregaSumAggregateOutputType | null
    _min: ComprovanteEntregaMinAggregateOutputType | null
    _max: ComprovanteEntregaMaxAggregateOutputType | null
  }

  type GetComprovanteEntregaGroupByPayload<T extends ComprovanteEntregaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprovanteEntregaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprovanteEntregaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprovanteEntregaGroupByOutputType[P]>
            : GetScalarType<T[P], ComprovanteEntregaGroupByOutputType[P]>
        }
      >
    >


  export type ComprovanteEntregaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    nomeRecebedor?: boolean
    fotoUrl?: boolean
    dataEntrega?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprovanteEntrega"]>

  export type ComprovanteEntregaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    nomeRecebedor?: boolean
    fotoUrl?: boolean
    dataEntrega?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprovanteEntrega"]>

  export type ComprovanteEntregaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    nomeRecebedor?: boolean
    fotoUrl?: boolean
    dataEntrega?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprovanteEntrega"]>

  export type ComprovanteEntregaSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    nomeRecebedor?: boolean
    fotoUrl?: boolean
    dataEntrega?: boolean
  }

  export type ComprovanteEntregaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "nomeRecebedor" | "fotoUrl" | "dataEntrega", ExtArgs["result"]["comprovanteEntrega"]>
  export type ComprovanteEntregaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type ComprovanteEntregaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }
  export type ComprovanteEntregaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $ComprovanteEntregaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComprovanteEntrega"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      nomeRecebedor: string
      fotoUrl: string
      dataEntrega: Date
    }, ExtArgs["result"]["comprovanteEntrega"]>
    composites: {}
  }

  type ComprovanteEntregaGetPayload<S extends boolean | null | undefined | ComprovanteEntregaDefaultArgs> = $Result.GetResult<Prisma.$ComprovanteEntregaPayload, S>

  type ComprovanteEntregaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComprovanteEntregaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComprovanteEntregaCountAggregateInputType | true
    }

  export interface ComprovanteEntregaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComprovanteEntrega'], meta: { name: 'ComprovanteEntrega' } }
    /**
     * Find zero or one ComprovanteEntrega that matches the filter.
     * @param {ComprovanteEntregaFindUniqueArgs} args - Arguments to find a ComprovanteEntrega
     * @example
     * // Get one ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprovanteEntregaFindUniqueArgs>(args: SelectSubset<T, ComprovanteEntregaFindUniqueArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComprovanteEntrega that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComprovanteEntregaFindUniqueOrThrowArgs} args - Arguments to find a ComprovanteEntrega
     * @example
     * // Get one ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprovanteEntregaFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprovanteEntregaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComprovanteEntrega that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaFindFirstArgs} args - Arguments to find a ComprovanteEntrega
     * @example
     * // Get one ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprovanteEntregaFindFirstArgs>(args?: SelectSubset<T, ComprovanteEntregaFindFirstArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComprovanteEntrega that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaFindFirstOrThrowArgs} args - Arguments to find a ComprovanteEntrega
     * @example
     * // Get one ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprovanteEntregaFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprovanteEntregaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComprovanteEntregas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComprovanteEntregas
     * const comprovanteEntregas = await prisma.comprovanteEntrega.findMany()
     * 
     * // Get first 10 ComprovanteEntregas
     * const comprovanteEntregas = await prisma.comprovanteEntrega.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprovanteEntregaWithIdOnly = await prisma.comprovanteEntrega.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComprovanteEntregaFindManyArgs>(args?: SelectSubset<T, ComprovanteEntregaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComprovanteEntrega.
     * @param {ComprovanteEntregaCreateArgs} args - Arguments to create a ComprovanteEntrega.
     * @example
     * // Create one ComprovanteEntrega
     * const ComprovanteEntrega = await prisma.comprovanteEntrega.create({
     *   data: {
     *     // ... data to create a ComprovanteEntrega
     *   }
     * })
     * 
     */
    create<T extends ComprovanteEntregaCreateArgs>(args: SelectSubset<T, ComprovanteEntregaCreateArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComprovanteEntregas.
     * @param {ComprovanteEntregaCreateManyArgs} args - Arguments to create many ComprovanteEntregas.
     * @example
     * // Create many ComprovanteEntregas
     * const comprovanteEntrega = await prisma.comprovanteEntrega.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprovanteEntregaCreateManyArgs>(args?: SelectSubset<T, ComprovanteEntregaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComprovanteEntregas and returns the data saved in the database.
     * @param {ComprovanteEntregaCreateManyAndReturnArgs} args - Arguments to create many ComprovanteEntregas.
     * @example
     * // Create many ComprovanteEntregas
     * const comprovanteEntrega = await prisma.comprovanteEntrega.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComprovanteEntregas and only return the `id`
     * const comprovanteEntregaWithIdOnly = await prisma.comprovanteEntrega.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComprovanteEntregaCreateManyAndReturnArgs>(args?: SelectSubset<T, ComprovanteEntregaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComprovanteEntrega.
     * @param {ComprovanteEntregaDeleteArgs} args - Arguments to delete one ComprovanteEntrega.
     * @example
     * // Delete one ComprovanteEntrega
     * const ComprovanteEntrega = await prisma.comprovanteEntrega.delete({
     *   where: {
     *     // ... filter to delete one ComprovanteEntrega
     *   }
     * })
     * 
     */
    delete<T extends ComprovanteEntregaDeleteArgs>(args: SelectSubset<T, ComprovanteEntregaDeleteArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComprovanteEntrega.
     * @param {ComprovanteEntregaUpdateArgs} args - Arguments to update one ComprovanteEntrega.
     * @example
     * // Update one ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprovanteEntregaUpdateArgs>(args: SelectSubset<T, ComprovanteEntregaUpdateArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComprovanteEntregas.
     * @param {ComprovanteEntregaDeleteManyArgs} args - Arguments to filter ComprovanteEntregas to delete.
     * @example
     * // Delete a few ComprovanteEntregas
     * const { count } = await prisma.comprovanteEntrega.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprovanteEntregaDeleteManyArgs>(args?: SelectSubset<T, ComprovanteEntregaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComprovanteEntregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComprovanteEntregas
     * const comprovanteEntrega = await prisma.comprovanteEntrega.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprovanteEntregaUpdateManyArgs>(args: SelectSubset<T, ComprovanteEntregaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComprovanteEntregas and returns the data updated in the database.
     * @param {ComprovanteEntregaUpdateManyAndReturnArgs} args - Arguments to update many ComprovanteEntregas.
     * @example
     * // Update many ComprovanteEntregas
     * const comprovanteEntrega = await prisma.comprovanteEntrega.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComprovanteEntregas and only return the `id`
     * const comprovanteEntregaWithIdOnly = await prisma.comprovanteEntrega.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComprovanteEntregaUpdateManyAndReturnArgs>(args: SelectSubset<T, ComprovanteEntregaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComprovanteEntrega.
     * @param {ComprovanteEntregaUpsertArgs} args - Arguments to update or create a ComprovanteEntrega.
     * @example
     * // Update or create a ComprovanteEntrega
     * const comprovanteEntrega = await prisma.comprovanteEntrega.upsert({
     *   create: {
     *     // ... data to create a ComprovanteEntrega
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComprovanteEntrega we want to update
     *   }
     * })
     */
    upsert<T extends ComprovanteEntregaUpsertArgs>(args: SelectSubset<T, ComprovanteEntregaUpsertArgs<ExtArgs>>): Prisma__ComprovanteEntregaClient<$Result.GetResult<Prisma.$ComprovanteEntregaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComprovanteEntregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaCountArgs} args - Arguments to filter ComprovanteEntregas to count.
     * @example
     * // Count the number of ComprovanteEntregas
     * const count = await prisma.comprovanteEntrega.count({
     *   where: {
     *     // ... the filter for the ComprovanteEntregas we want to count
     *   }
     * })
    **/
    count<T extends ComprovanteEntregaCountArgs>(
      args?: Subset<T, ComprovanteEntregaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprovanteEntregaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComprovanteEntrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComprovanteEntregaAggregateArgs>(args: Subset<T, ComprovanteEntregaAggregateArgs>): Prisma.PrismaPromise<GetComprovanteEntregaAggregateType<T>>

    /**
     * Group by ComprovanteEntrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprovanteEntregaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComprovanteEntregaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprovanteEntregaGroupByArgs['orderBy'] }
        : { orderBy?: ComprovanteEntregaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComprovanteEntregaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprovanteEntregaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComprovanteEntrega model
   */
  readonly fields: ComprovanteEntregaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComprovanteEntrega.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprovanteEntregaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComprovanteEntrega model
   */
  interface ComprovanteEntregaFieldRefs {
    readonly id: FieldRef<"ComprovanteEntrega", 'Int'>
    readonly pedidoId: FieldRef<"ComprovanteEntrega", 'Int'>
    readonly nomeRecebedor: FieldRef<"ComprovanteEntrega", 'String'>
    readonly fotoUrl: FieldRef<"ComprovanteEntrega", 'String'>
    readonly dataEntrega: FieldRef<"ComprovanteEntrega", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComprovanteEntrega findUnique
   */
  export type ComprovanteEntregaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter, which ComprovanteEntrega to fetch.
     */
    where: ComprovanteEntregaWhereUniqueInput
  }

  /**
   * ComprovanteEntrega findUniqueOrThrow
   */
  export type ComprovanteEntregaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter, which ComprovanteEntrega to fetch.
     */
    where: ComprovanteEntregaWhereUniqueInput
  }

  /**
   * ComprovanteEntrega findFirst
   */
  export type ComprovanteEntregaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter, which ComprovanteEntrega to fetch.
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprovanteEntregas to fetch.
     */
    orderBy?: ComprovanteEntregaOrderByWithRelationInput | ComprovanteEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComprovanteEntregas.
     */
    cursor?: ComprovanteEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprovanteEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprovanteEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComprovanteEntregas.
     */
    distinct?: ComprovanteEntregaScalarFieldEnum | ComprovanteEntregaScalarFieldEnum[]
  }

  /**
   * ComprovanteEntrega findFirstOrThrow
   */
  export type ComprovanteEntregaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter, which ComprovanteEntrega to fetch.
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprovanteEntregas to fetch.
     */
    orderBy?: ComprovanteEntregaOrderByWithRelationInput | ComprovanteEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComprovanteEntregas.
     */
    cursor?: ComprovanteEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprovanteEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprovanteEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComprovanteEntregas.
     */
    distinct?: ComprovanteEntregaScalarFieldEnum | ComprovanteEntregaScalarFieldEnum[]
  }

  /**
   * ComprovanteEntrega findMany
   */
  export type ComprovanteEntregaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter, which ComprovanteEntregas to fetch.
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComprovanteEntregas to fetch.
     */
    orderBy?: ComprovanteEntregaOrderByWithRelationInput | ComprovanteEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComprovanteEntregas.
     */
    cursor?: ComprovanteEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComprovanteEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComprovanteEntregas.
     */
    skip?: number
    distinct?: ComprovanteEntregaScalarFieldEnum | ComprovanteEntregaScalarFieldEnum[]
  }

  /**
   * ComprovanteEntrega create
   */
  export type ComprovanteEntregaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * The data needed to create a ComprovanteEntrega.
     */
    data: XOR<ComprovanteEntregaCreateInput, ComprovanteEntregaUncheckedCreateInput>
  }

  /**
   * ComprovanteEntrega createMany
   */
  export type ComprovanteEntregaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComprovanteEntregas.
     */
    data: ComprovanteEntregaCreateManyInput | ComprovanteEntregaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComprovanteEntrega createManyAndReturn
   */
  export type ComprovanteEntregaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * The data used to create many ComprovanteEntregas.
     */
    data: ComprovanteEntregaCreateManyInput | ComprovanteEntregaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComprovanteEntrega update
   */
  export type ComprovanteEntregaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * The data needed to update a ComprovanteEntrega.
     */
    data: XOR<ComprovanteEntregaUpdateInput, ComprovanteEntregaUncheckedUpdateInput>
    /**
     * Choose, which ComprovanteEntrega to update.
     */
    where: ComprovanteEntregaWhereUniqueInput
  }

  /**
   * ComprovanteEntrega updateMany
   */
  export type ComprovanteEntregaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComprovanteEntregas.
     */
    data: XOR<ComprovanteEntregaUpdateManyMutationInput, ComprovanteEntregaUncheckedUpdateManyInput>
    /**
     * Filter which ComprovanteEntregas to update
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * Limit how many ComprovanteEntregas to update.
     */
    limit?: number
  }

  /**
   * ComprovanteEntrega updateManyAndReturn
   */
  export type ComprovanteEntregaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * The data used to update ComprovanteEntregas.
     */
    data: XOR<ComprovanteEntregaUpdateManyMutationInput, ComprovanteEntregaUncheckedUpdateManyInput>
    /**
     * Filter which ComprovanteEntregas to update
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * Limit how many ComprovanteEntregas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComprovanteEntrega upsert
   */
  export type ComprovanteEntregaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * The filter to search for the ComprovanteEntrega to update in case it exists.
     */
    where: ComprovanteEntregaWhereUniqueInput
    /**
     * In case the ComprovanteEntrega found by the `where` argument doesn't exist, create a new ComprovanteEntrega with this data.
     */
    create: XOR<ComprovanteEntregaCreateInput, ComprovanteEntregaUncheckedCreateInput>
    /**
     * In case the ComprovanteEntrega was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprovanteEntregaUpdateInput, ComprovanteEntregaUncheckedUpdateInput>
  }

  /**
   * ComprovanteEntrega delete
   */
  export type ComprovanteEntregaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
    /**
     * Filter which ComprovanteEntrega to delete.
     */
    where: ComprovanteEntregaWhereUniqueInput
  }

  /**
   * ComprovanteEntrega deleteMany
   */
  export type ComprovanteEntregaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComprovanteEntregas to delete
     */
    where?: ComprovanteEntregaWhereInput
    /**
     * Limit how many ComprovanteEntregas to delete.
     */
    limit?: number
  }

  /**
   * ComprovanteEntrega without action
   */
  export type ComprovanteEntregaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComprovanteEntrega
     */
    select?: ComprovanteEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComprovanteEntrega
     */
    omit?: ComprovanteEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComprovanteEntregaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    password: 'password',
    cpf: 'cpf',
    role: 'role',
    cep: 'cep',
    logradouro: 'logradouro',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoria: 'categoria',
    description: 'description',
    price: 'price',
    image: 'image',
    estoque: 'estoque',
    createdAt: 'createdAt',
    promocaoId: 'promocaoId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    numeroPedido: 'numeroPedido',
    clienteId: 'clienteId',
    valorTotal: 'valorTotal',
    status: 'status',
    stripeSessionId: 'stripeSessionId',
    createdAt: 'createdAt'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId',
    quantidade: 'quantidade',
    valor: 'valor',
    promocaoId: 'promocaoId'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const PromocaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    desconto: 'desconto',
    freteGratis: 'freteGratis',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim'
  };

  export type PromocaoScalarFieldEnum = (typeof PromocaoScalarFieldEnum)[keyof typeof PromocaoScalarFieldEnum]


  export const FreteScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    tipo: 'tipo',
    valor: 'valor',
    prazoEstimado: 'prazoEstimado',
    codigoRastreamento: 'codigoRastreamento',
    transportadoraId: 'transportadoraId'
  };

  export type FreteScalarFieldEnum = (typeof FreteScalarFieldEnum)[keyof typeof FreteScalarFieldEnum]


  export const PedidoStatusScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    status: 'status',
    dataStatus: 'dataStatus'
  };

  export type PedidoStatusScalarFieldEnum = (typeof PedidoStatusScalarFieldEnum)[keyof typeof PedidoStatusScalarFieldEnum]


  export const VendaResumoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    totalVendas: 'totalVendas',
    qtdPedidos: 'qtdPedidos',
    qtdProdutos: 'qtdProdutos'
  };

  export type VendaResumoScalarFieldEnum = (typeof VendaResumoScalarFieldEnum)[keyof typeof VendaResumoScalarFieldEnum]


  export const TransportadoraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone'
  };

  export type TransportadoraScalarFieldEnum = (typeof TransportadoraScalarFieldEnum)[keyof typeof TransportadoraScalarFieldEnum]


  export const ComprovanteEntregaScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    nomeRecebedor: 'nomeRecebedor',
    fotoUrl: 'fotoUrl',
    dataEntrega: 'dataEntrega'
  };

  export type ComprovanteEntregaScalarFieldEnum = (typeof ComprovanteEntregaScalarFieldEnum)[keyof typeof ComprovanteEntregaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    cpf?: StringNullableFilter<"Cliente"> | string | null
    role?: EnumRoleFilter<"Cliente"> | $Enums.Role
    cep?: StringNullableFilter<"Cliente"> | string | null
    logradouro?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    pedidos?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrderInput | SortOrder
    role?: SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    password?: StringFilter<"Cliente"> | string
    role?: EnumRoleFilter<"Cliente"> | $Enums.Role
    cep?: StringNullableFilter<"Cliente"> | string | null
    logradouro?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    pedidos?: PedidoListRelationFilter
  }, "id" | "email" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrderInput | SortOrder
    role?: SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    password?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Cliente"> | $Enums.Role
    cep?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    logradouro?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    title?: StringFilter<"Produto"> | string
    categoria?: StringNullableFilter<"Produto"> | string | null
    description?: StringFilter<"Produto"> | string
    price?: FloatFilter<"Produto"> | number
    image?: StringFilter<"Produto"> | string
    estoque?: IntFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    promocaoId?: IntNullableFilter<"Produto"> | number | null
    itens?: ItemPedidoListRelationFilter
    promocao?: XOR<PromocaoNullableScalarRelationFilter, PromocaoWhereInput> | null
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoria?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    estoque?: SortOrder
    createdAt?: SortOrder
    promocaoId?: SortOrderInput | SortOrder
    itens?: ItemPedidoOrderByRelationAggregateInput
    promocao?: PromocaoOrderByWithRelationInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    categoria?: StringNullableFilter<"Produto"> | string | null
    description?: StringFilter<"Produto"> | string
    price?: FloatFilter<"Produto"> | number
    image?: StringFilter<"Produto"> | string
    estoque?: IntFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    promocaoId?: IntNullableFilter<"Produto"> | number | null
    itens?: ItemPedidoListRelationFilter
    promocao?: XOR<PromocaoNullableScalarRelationFilter, PromocaoWhereInput> | null
  }, "id" | "title">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoria?: SortOrderInput | SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    estoque?: SortOrder
    createdAt?: SortOrder
    promocaoId?: SortOrderInput | SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    title?: StringWithAggregatesFilter<"Produto"> | string
    categoria?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    description?: StringWithAggregatesFilter<"Produto"> | string
    price?: FloatWithAggregatesFilter<"Produto"> | number
    image?: StringWithAggregatesFilter<"Produto"> | string
    estoque?: IntWithAggregatesFilter<"Produto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    promocaoId?: IntNullableWithAggregatesFilter<"Produto"> | number | null
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    numeroPedido?: StringFilter<"Pedido"> | string
    clienteId?: IntFilter<"Pedido"> | number
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    stripeSessionId?: StringFilter<"Pedido"> | string
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemPedidoListRelationFilter
    frete?: XOR<FreteNullableScalarRelationFilter, FreteWhereInput> | null
    historicoStatus?: PedidoStatusListRelationFilter
    comprovantes?: ComprovanteEntregaListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    numeroPedido?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    createdAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    itens?: ItemPedidoOrderByRelationAggregateInput
    frete?: FreteOrderByWithRelationInput
    historicoStatus?: PedidoStatusOrderByRelationAggregateInput
    comprovantes?: ComprovanteEntregaOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stripeSessionId?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    numeroPedido?: StringFilter<"Pedido"> | string
    clienteId?: IntFilter<"Pedido"> | number
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    itens?: ItemPedidoListRelationFilter
    frete?: XOR<FreteNullableScalarRelationFilter, FreteWhereInput> | null
    historicoStatus?: PedidoStatusListRelationFilter
    comprovantes?: ComprovanteEntregaListRelationFilter
  }, "id" | "stripeSessionId">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroPedido?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    createdAt?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    numeroPedido?: StringWithAggregatesFilter<"Pedido"> | string
    clienteId?: IntWithAggregatesFilter<"Pedido"> | number
    valorTotal?: FloatWithAggregatesFilter<"Pedido"> | number
    status?: StringWithAggregatesFilter<"Pedido"> | string
    stripeSessionId?: StringWithAggregatesFilter<"Pedido"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valor?: FloatNullableFilter<"ItemPedido"> | number | null
    promocaoId?: IntNullableFilter<"ItemPedido"> | number | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    promocao?: XOR<PromocaoNullableScalarRelationFilter, PromocaoWhereInput> | null
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrderInput | SortOrder
    promocaoId?: SortOrderInput | SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
    promocao?: PromocaoOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valor?: FloatNullableFilter<"ItemPedido"> | number | null
    promocaoId?: IntNullableFilter<"ItemPedido"> | number | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    promocao?: XOR<PromocaoNullableScalarRelationFilter, PromocaoWhereInput> | null
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrderInput | SortOrder
    promocaoId?: SortOrderInput | SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    produtoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    valor?: FloatNullableWithAggregatesFilter<"ItemPedido"> | number | null
    promocaoId?: IntNullableWithAggregatesFilter<"ItemPedido"> | number | null
  }

  export type PromocaoWhereInput = {
    AND?: PromocaoWhereInput | PromocaoWhereInput[]
    OR?: PromocaoWhereInput[]
    NOT?: PromocaoWhereInput | PromocaoWhereInput[]
    id?: IntFilter<"Promocao"> | number
    nome?: StringFilter<"Promocao"> | string
    desconto?: IntFilter<"Promocao"> | number
    freteGratis?: BoolFilter<"Promocao"> | boolean
    dataInicio?: DateTimeFilter<"Promocao"> | Date | string
    dataFim?: DateTimeFilter<"Promocao"> | Date | string
    itensPedido?: ItemPedidoListRelationFilter
    Produto?: ProdutoListRelationFilter
  }

  export type PromocaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    desconto?: SortOrder
    freteGratis?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    itensPedido?: ItemPedidoOrderByRelationAggregateInput
    Produto?: ProdutoOrderByRelationAggregateInput
  }

  export type PromocaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PromocaoWhereInput | PromocaoWhereInput[]
    OR?: PromocaoWhereInput[]
    NOT?: PromocaoWhereInput | PromocaoWhereInput[]
    nome?: StringFilter<"Promocao"> | string
    desconto?: IntFilter<"Promocao"> | number
    freteGratis?: BoolFilter<"Promocao"> | boolean
    dataInicio?: DateTimeFilter<"Promocao"> | Date | string
    dataFim?: DateTimeFilter<"Promocao"> | Date | string
    itensPedido?: ItemPedidoListRelationFilter
    Produto?: ProdutoListRelationFilter
  }, "id">

  export type PromocaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    desconto?: SortOrder
    freteGratis?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    _count?: PromocaoCountOrderByAggregateInput
    _avg?: PromocaoAvgOrderByAggregateInput
    _max?: PromocaoMaxOrderByAggregateInput
    _min?: PromocaoMinOrderByAggregateInput
    _sum?: PromocaoSumOrderByAggregateInput
  }

  export type PromocaoScalarWhereWithAggregatesInput = {
    AND?: PromocaoScalarWhereWithAggregatesInput | PromocaoScalarWhereWithAggregatesInput[]
    OR?: PromocaoScalarWhereWithAggregatesInput[]
    NOT?: PromocaoScalarWhereWithAggregatesInput | PromocaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promocao"> | number
    nome?: StringWithAggregatesFilter<"Promocao"> | string
    desconto?: IntWithAggregatesFilter<"Promocao"> | number
    freteGratis?: BoolWithAggregatesFilter<"Promocao"> | boolean
    dataInicio?: DateTimeWithAggregatesFilter<"Promocao"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Promocao"> | Date | string
  }

  export type FreteWhereInput = {
    AND?: FreteWhereInput | FreteWhereInput[]
    OR?: FreteWhereInput[]
    NOT?: FreteWhereInput | FreteWhereInput[]
    id?: IntFilter<"Frete"> | number
    pedidoId?: IntFilter<"Frete"> | number
    tipo?: StringFilter<"Frete"> | string
    valor?: FloatFilter<"Frete"> | number
    prazoEstimado?: StringFilter<"Frete"> | string
    codigoRastreamento?: StringNullableFilter<"Frete"> | string | null
    transportadoraId?: IntNullableFilter<"Frete"> | number | null
    transportadora?: XOR<TransportadoraNullableScalarRelationFilter, TransportadoraWhereInput> | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type FreteOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    prazoEstimado?: SortOrder
    codigoRastreamento?: SortOrderInput | SortOrder
    transportadoraId?: SortOrderInput | SortOrder
    transportadora?: TransportadoraOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
  }

  export type FreteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: FreteWhereInput | FreteWhereInput[]
    OR?: FreteWhereInput[]
    NOT?: FreteWhereInput | FreteWhereInput[]
    tipo?: StringFilter<"Frete"> | string
    valor?: FloatFilter<"Frete"> | number
    prazoEstimado?: StringFilter<"Frete"> | string
    codigoRastreamento?: StringNullableFilter<"Frete"> | string | null
    transportadoraId?: IntNullableFilter<"Frete"> | number | null
    transportadora?: XOR<TransportadoraNullableScalarRelationFilter, TransportadoraWhereInput> | null
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "pedidoId">

  export type FreteOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    prazoEstimado?: SortOrder
    codigoRastreamento?: SortOrderInput | SortOrder
    transportadoraId?: SortOrderInput | SortOrder
    _count?: FreteCountOrderByAggregateInput
    _avg?: FreteAvgOrderByAggregateInput
    _max?: FreteMaxOrderByAggregateInput
    _min?: FreteMinOrderByAggregateInput
    _sum?: FreteSumOrderByAggregateInput
  }

  export type FreteScalarWhereWithAggregatesInput = {
    AND?: FreteScalarWhereWithAggregatesInput | FreteScalarWhereWithAggregatesInput[]
    OR?: FreteScalarWhereWithAggregatesInput[]
    NOT?: FreteScalarWhereWithAggregatesInput | FreteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Frete"> | number
    pedidoId?: IntWithAggregatesFilter<"Frete"> | number
    tipo?: StringWithAggregatesFilter<"Frete"> | string
    valor?: FloatWithAggregatesFilter<"Frete"> | number
    prazoEstimado?: StringWithAggregatesFilter<"Frete"> | string
    codigoRastreamento?: StringNullableWithAggregatesFilter<"Frete"> | string | null
    transportadoraId?: IntNullableWithAggregatesFilter<"Frete"> | number | null
  }

  export type PedidoStatusWhereInput = {
    AND?: PedidoStatusWhereInput | PedidoStatusWhereInput[]
    OR?: PedidoStatusWhereInput[]
    NOT?: PedidoStatusWhereInput | PedidoStatusWhereInput[]
    id?: IntFilter<"PedidoStatus"> | number
    pedidoId?: IntFilter<"PedidoStatus"> | number
    status?: StringFilter<"PedidoStatus"> | string
    dataStatus?: DateTimeFilter<"PedidoStatus"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PedidoStatusOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    dataStatus?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type PedidoStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoStatusWhereInput | PedidoStatusWhereInput[]
    OR?: PedidoStatusWhereInput[]
    NOT?: PedidoStatusWhereInput | PedidoStatusWhereInput[]
    pedidoId?: IntFilter<"PedidoStatus"> | number
    status?: StringFilter<"PedidoStatus"> | string
    dataStatus?: DateTimeFilter<"PedidoStatus"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id">

  export type PedidoStatusOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    dataStatus?: SortOrder
    _count?: PedidoStatusCountOrderByAggregateInput
    _avg?: PedidoStatusAvgOrderByAggregateInput
    _max?: PedidoStatusMaxOrderByAggregateInput
    _min?: PedidoStatusMinOrderByAggregateInput
    _sum?: PedidoStatusSumOrderByAggregateInput
  }

  export type PedidoStatusScalarWhereWithAggregatesInput = {
    AND?: PedidoStatusScalarWhereWithAggregatesInput | PedidoStatusScalarWhereWithAggregatesInput[]
    OR?: PedidoStatusScalarWhereWithAggregatesInput[]
    NOT?: PedidoStatusScalarWhereWithAggregatesInput | PedidoStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoStatus"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidoStatus"> | number
    status?: StringWithAggregatesFilter<"PedidoStatus"> | string
    dataStatus?: DateTimeWithAggregatesFilter<"PedidoStatus"> | Date | string
  }

  export type VendaResumoWhereInput = {
    AND?: VendaResumoWhereInput | VendaResumoWhereInput[]
    OR?: VendaResumoWhereInput[]
    NOT?: VendaResumoWhereInput | VendaResumoWhereInput[]
    id?: IntFilter<"VendaResumo"> | number
    data?: DateTimeFilter<"VendaResumo"> | Date | string
    totalVendas?: FloatFilter<"VendaResumo"> | number
    qtdPedidos?: IntFilter<"VendaResumo"> | number
    qtdProdutos?: IntFilter<"VendaResumo"> | number
  }

  export type VendaResumoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type VendaResumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendaResumoWhereInput | VendaResumoWhereInput[]
    OR?: VendaResumoWhereInput[]
    NOT?: VendaResumoWhereInput | VendaResumoWhereInput[]
    data?: DateTimeFilter<"VendaResumo"> | Date | string
    totalVendas?: FloatFilter<"VendaResumo"> | number
    qtdPedidos?: IntFilter<"VendaResumo"> | number
    qtdProdutos?: IntFilter<"VendaResumo"> | number
  }, "id">

  export type VendaResumoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
    _count?: VendaResumoCountOrderByAggregateInput
    _avg?: VendaResumoAvgOrderByAggregateInput
    _max?: VendaResumoMaxOrderByAggregateInput
    _min?: VendaResumoMinOrderByAggregateInput
    _sum?: VendaResumoSumOrderByAggregateInput
  }

  export type VendaResumoScalarWhereWithAggregatesInput = {
    AND?: VendaResumoScalarWhereWithAggregatesInput | VendaResumoScalarWhereWithAggregatesInput[]
    OR?: VendaResumoScalarWhereWithAggregatesInput[]
    NOT?: VendaResumoScalarWhereWithAggregatesInput | VendaResumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VendaResumo"> | number
    data?: DateTimeWithAggregatesFilter<"VendaResumo"> | Date | string
    totalVendas?: FloatWithAggregatesFilter<"VendaResumo"> | number
    qtdPedidos?: IntWithAggregatesFilter<"VendaResumo"> | number
    qtdProdutos?: IntWithAggregatesFilter<"VendaResumo"> | number
  }

  export type TransportadoraWhereInput = {
    AND?: TransportadoraWhereInput | TransportadoraWhereInput[]
    OR?: TransportadoraWhereInput[]
    NOT?: TransportadoraWhereInput | TransportadoraWhereInput[]
    id?: IntFilter<"Transportadora"> | number
    nome?: StringFilter<"Transportadora"> | string
    cnpj?: StringNullableFilter<"Transportadora"> | string | null
    telefone?: StringNullableFilter<"Transportadora"> | string | null
    fretes?: FreteListRelationFilter
  }

  export type TransportadoraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    fretes?: FreteOrderByRelationAggregateInput
  }

  export type TransportadoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransportadoraWhereInput | TransportadoraWhereInput[]
    OR?: TransportadoraWhereInput[]
    NOT?: TransportadoraWhereInput | TransportadoraWhereInput[]
    nome?: StringFilter<"Transportadora"> | string
    cnpj?: StringNullableFilter<"Transportadora"> | string | null
    telefone?: StringNullableFilter<"Transportadora"> | string | null
    fretes?: FreteListRelationFilter
  }, "id">

  export type TransportadoraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: TransportadoraCountOrderByAggregateInput
    _avg?: TransportadoraAvgOrderByAggregateInput
    _max?: TransportadoraMaxOrderByAggregateInput
    _min?: TransportadoraMinOrderByAggregateInput
    _sum?: TransportadoraSumOrderByAggregateInput
  }

  export type TransportadoraScalarWhereWithAggregatesInput = {
    AND?: TransportadoraScalarWhereWithAggregatesInput | TransportadoraScalarWhereWithAggregatesInput[]
    OR?: TransportadoraScalarWhereWithAggregatesInput[]
    NOT?: TransportadoraScalarWhereWithAggregatesInput | TransportadoraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transportadora"> | number
    nome?: StringWithAggregatesFilter<"Transportadora"> | string
    cnpj?: StringNullableWithAggregatesFilter<"Transportadora"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Transportadora"> | string | null
  }

  export type ComprovanteEntregaWhereInput = {
    AND?: ComprovanteEntregaWhereInput | ComprovanteEntregaWhereInput[]
    OR?: ComprovanteEntregaWhereInput[]
    NOT?: ComprovanteEntregaWhereInput | ComprovanteEntregaWhereInput[]
    id?: IntFilter<"ComprovanteEntrega"> | number
    pedidoId?: IntFilter<"ComprovanteEntrega"> | number
    nomeRecebedor?: StringFilter<"ComprovanteEntrega"> | string
    fotoUrl?: StringFilter<"ComprovanteEntrega"> | string
    dataEntrega?: DateTimeFilter<"ComprovanteEntrega"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type ComprovanteEntregaOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    nomeRecebedor?: SortOrder
    fotoUrl?: SortOrder
    dataEntrega?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type ComprovanteEntregaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComprovanteEntregaWhereInput | ComprovanteEntregaWhereInput[]
    OR?: ComprovanteEntregaWhereInput[]
    NOT?: ComprovanteEntregaWhereInput | ComprovanteEntregaWhereInput[]
    pedidoId?: IntFilter<"ComprovanteEntrega"> | number
    nomeRecebedor?: StringFilter<"ComprovanteEntrega"> | string
    fotoUrl?: StringFilter<"ComprovanteEntrega"> | string
    dataEntrega?: DateTimeFilter<"ComprovanteEntrega"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id">

  export type ComprovanteEntregaOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    nomeRecebedor?: SortOrder
    fotoUrl?: SortOrder
    dataEntrega?: SortOrder
    _count?: ComprovanteEntregaCountOrderByAggregateInput
    _avg?: ComprovanteEntregaAvgOrderByAggregateInput
    _max?: ComprovanteEntregaMaxOrderByAggregateInput
    _min?: ComprovanteEntregaMinOrderByAggregateInput
    _sum?: ComprovanteEntregaSumOrderByAggregateInput
  }

  export type ComprovanteEntregaScalarWhereWithAggregatesInput = {
    AND?: ComprovanteEntregaScalarWhereWithAggregatesInput | ComprovanteEntregaScalarWhereWithAggregatesInput[]
    OR?: ComprovanteEntregaScalarWhereWithAggregatesInput[]
    NOT?: ComprovanteEntregaScalarWhereWithAggregatesInput | ComprovanteEntregaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComprovanteEntrega"> | number
    pedidoId?: IntWithAggregatesFilter<"ComprovanteEntrega"> | number
    nomeRecebedor?: StringWithAggregatesFilter<"ComprovanteEntrega"> | string
    fotoUrl?: StringWithAggregatesFilter<"ComprovanteEntrega"> | string
    dataEntrega?: DateTimeWithAggregatesFilter<"ComprovanteEntrega"> | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    email: string
    password: string
    cpf?: string | null
    role?: $Enums.Role
    cep?: string | null
    logradouro?: string | null
    cidade?: string | null
    estado?: string | null
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    password: string
    cpf?: string | null
    role?: $Enums.Role
    cep?: string | null
    logradouro?: string | null
    cidade?: string | null
    estado?: string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    password: string
    cpf?: string | null
    role?: $Enums.Role
    cep?: string | null
    logradouro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
    promocao?: PromocaoCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    promocaoId?: number | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
    promocao?: PromocaoUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    promocaoId?: number | null
  }

  export type ProdutoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoCreateInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    frete?: FreteCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    frete?: FreteUncheckedCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    frete?: FreteUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    frete?: FreteUncheckedUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateInput = {
    quantidade: number
    valor?: number | null
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensInput
    promocao?: PromocaoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type ItemPedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
    promocao?: PromocaoUpdateOneWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type ItemPedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PromocaoCreateInput = {
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    itensPedido?: ItemPedidoCreateNestedManyWithoutPromocaoInput
    Produto?: ProdutoCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoUncheckedCreateInput = {
    id?: number
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPromocaoInput
    Produto?: ProdutoUncheckedCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUpdateManyWithoutPromocaoNestedInput
    Produto?: ProdutoUpdateManyWithoutPromocaoNestedInput
  }

  export type PromocaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPromocaoNestedInput
    Produto?: ProdutoUncheckedUpdateManyWithoutPromocaoNestedInput
  }

  export type PromocaoCreateManyInput = {
    id?: number
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
  }

  export type PromocaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromocaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreteCreateInput = {
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    transportadora?: TransportadoraCreateNestedOneWithoutFretesInput
    pedido: PedidoCreateNestedOneWithoutFreteInput
  }

  export type FreteUncheckedCreateInput = {
    id?: number
    pedidoId: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    transportadoraId?: number | null
  }

  export type FreteUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    transportadora?: TransportadoraUpdateOneWithoutFretesNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutFreteNestedInput
  }

  export type FreteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    transportadoraId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FreteCreateManyInput = {
    id?: number
    pedidoId: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    transportadoraId?: number | null
  }

  export type FreteUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    transportadoraId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoStatusCreateInput = {
    status: string
    dataStatus?: Date | string
    pedido: PedidoCreateNestedOneWithoutHistoricoStatusInput
  }

  export type PedidoStatusUncheckedCreateInput = {
    id?: number
    pedidoId: number
    status: string
    dataStatus?: Date | string
  }

  export type PedidoStatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutHistoricoStatusNestedInput
  }

  export type PedidoStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoStatusCreateManyInput = {
    id?: number
    pedidoId: number
    status: string
    dataStatus?: Date | string
  }

  export type PedidoStatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendaResumoCreateInput = {
    data?: Date | string
    totalVendas: number
    qtdPedidos: number
    qtdProdutos: number
  }

  export type VendaResumoUncheckedCreateInput = {
    id?: number
    data?: Date | string
    totalVendas: number
    qtdPedidos: number
    qtdProdutos: number
  }

  export type VendaResumoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVendas?: FloatFieldUpdateOperationsInput | number
    qtdPedidos?: IntFieldUpdateOperationsInput | number
    qtdProdutos?: IntFieldUpdateOperationsInput | number
  }

  export type VendaResumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVendas?: FloatFieldUpdateOperationsInput | number
    qtdPedidos?: IntFieldUpdateOperationsInput | number
    qtdProdutos?: IntFieldUpdateOperationsInput | number
  }

  export type VendaResumoCreateManyInput = {
    id?: number
    data?: Date | string
    totalVendas: number
    qtdPedidos: number
    qtdProdutos: number
  }

  export type VendaResumoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVendas?: FloatFieldUpdateOperationsInput | number
    qtdPedidos?: IntFieldUpdateOperationsInput | number
    qtdProdutos?: IntFieldUpdateOperationsInput | number
  }

  export type VendaResumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalVendas?: FloatFieldUpdateOperationsInput | number
    qtdPedidos?: IntFieldUpdateOperationsInput | number
    qtdProdutos?: IntFieldUpdateOperationsInput | number
  }

  export type TransportadoraCreateInput = {
    nome: string
    cnpj?: string | null
    telefone?: string | null
    fretes?: FreteCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUncheckedCreateInput = {
    id?: number
    nome: string
    cnpj?: string | null
    telefone?: string | null
    fretes?: FreteUncheckedCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    fretes?: FreteUpdateManyWithoutTransportadoraNestedInput
  }

  export type TransportadoraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    fretes?: FreteUncheckedUpdateManyWithoutTransportadoraNestedInput
  }

  export type TransportadoraCreateManyInput = {
    id?: number
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type TransportadoraUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransportadoraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComprovanteEntregaCreateInput = {
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
    pedido: PedidoCreateNestedOneWithoutComprovantesInput
  }

  export type ComprovanteEntregaUncheckedCreateInput = {
    id?: number
    pedidoId: number
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
  }

  export type ComprovanteEntregaUpdateInput = {
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutComprovantesNestedInput
  }

  export type ComprovanteEntregaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprovanteEntregaCreateManyInput = {
    id?: number
    pedidoId: number
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
  }

  export type ComprovanteEntregaUpdateManyMutationInput = {
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprovanteEntregaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type PromocaoNullableScalarRelationFilter = {
    is?: PromocaoWhereInput | null
    isNot?: PromocaoWhereInput | null
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoria?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    estoque?: SortOrder
    createdAt?: SortOrder
    promocaoId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    estoque?: SortOrder
    promocaoId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoria?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    estoque?: SortOrder
    createdAt?: SortOrder
    promocaoId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoria?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    estoque?: SortOrder
    createdAt?: SortOrder
    promocaoId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    estoque?: SortOrder
    promocaoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type FreteNullableScalarRelationFilter = {
    is?: FreteWhereInput | null
    isNot?: FreteWhereInput | null
  }

  export type PedidoStatusListRelationFilter = {
    every?: PedidoStatusWhereInput
    some?: PedidoStatusWhereInput
    none?: PedidoStatusWhereInput
  }

  export type ComprovanteEntregaListRelationFilter = {
    every?: ComprovanteEntregaWhereInput
    some?: ComprovanteEntregaWhereInput
    none?: ComprovanteEntregaWhereInput
  }

  export type PedidoStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComprovanteEntregaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroPedido?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroPedido?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroPedido?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    stripeSessionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    valorTotal?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    promocaoId?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    promocaoId?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    promocaoId?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    promocaoId?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    valor?: SortOrder
    promocaoId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromocaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desconto?: SortOrder
    freteGratis?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type PromocaoAvgOrderByAggregateInput = {
    id?: SortOrder
    desconto?: SortOrder
  }

  export type PromocaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desconto?: SortOrder
    freteGratis?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type PromocaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    desconto?: SortOrder
    freteGratis?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
  }

  export type PromocaoSumOrderByAggregateInput = {
    id?: SortOrder
    desconto?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransportadoraNullableScalarRelationFilter = {
    is?: TransportadoraWhereInput | null
    isNot?: TransportadoraWhereInput | null
  }

  export type FreteCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    prazoEstimado?: SortOrder
    codigoRastreamento?: SortOrder
    transportadoraId?: SortOrder
  }

  export type FreteAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    transportadoraId?: SortOrder
  }

  export type FreteMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    prazoEstimado?: SortOrder
    codigoRastreamento?: SortOrder
    transportadoraId?: SortOrder
  }

  export type FreteMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    prazoEstimado?: SortOrder
    codigoRastreamento?: SortOrder
    transportadoraId?: SortOrder
  }

  export type FreteSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    valor?: SortOrder
    transportadoraId?: SortOrder
  }

  export type PedidoStatusCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    dataStatus?: SortOrder
  }

  export type PedidoStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type PedidoStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    dataStatus?: SortOrder
  }

  export type PedidoStatusMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    dataStatus?: SortOrder
  }

  export type PedidoStatusSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type VendaResumoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type VendaResumoAvgOrderByAggregateInput = {
    id?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type VendaResumoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type VendaResumoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type VendaResumoSumOrderByAggregateInput = {
    id?: SortOrder
    totalVendas?: SortOrder
    qtdPedidos?: SortOrder
    qtdProdutos?: SortOrder
  }

  export type FreteListRelationFilter = {
    every?: FreteWhereInput
    some?: FreteWhereInput
    none?: FreteWhereInput
  }

  export type FreteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportadoraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type TransportadoraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransportadoraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type TransportadoraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type TransportadoraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComprovanteEntregaCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    nomeRecebedor?: SortOrder
    fotoUrl?: SortOrder
    dataEntrega?: SortOrder
  }

  export type ComprovanteEntregaAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type ComprovanteEntregaMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    nomeRecebedor?: SortOrder
    fotoUrl?: SortOrder
    dataEntrega?: SortOrder
  }

  export type ComprovanteEntregaMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    nomeRecebedor?: SortOrder
    fotoUrl?: SortOrder
    dataEntrega?: SortOrder
  }

  export type ComprovanteEntregaSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type PromocaoCreateNestedOneWithoutProdutoInput = {
    create?: XOR<PromocaoCreateWithoutProdutoInput, PromocaoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: PromocaoCreateOrConnectWithoutProdutoInput
    connect?: PromocaoWhereUniqueInput
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemPedidoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PromocaoUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<PromocaoCreateWithoutProdutoInput, PromocaoUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: PromocaoCreateOrConnectWithoutProdutoInput
    upsert?: PromocaoUpsertWithoutProdutoInput
    disconnect?: PromocaoWhereInput | boolean
    delete?: PromocaoWhereInput | boolean
    connect?: PromocaoWhereUniqueInput
    update?: XOR<XOR<PromocaoUpdateToOneWithWhereWithoutProdutoInput, PromocaoUpdateWithoutProdutoInput>, PromocaoUncheckedUpdateWithoutProdutoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput> | ItemPedidoCreateWithoutProdutoInput[] | ItemPedidoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutProdutoInput | ItemPedidoCreateOrConnectWithoutProdutoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput | ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItemPedidoCreateManyProdutoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput | ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutProdutoInput | ItemPedidoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FreteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FreteCreateOrConnectWithoutPedidoInput
    connect?: FreteWhereUniqueInput
  }

  export type PedidoStatusCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput> | PedidoStatusCreateWithoutPedidoInput[] | PedidoStatusUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoStatusCreateOrConnectWithoutPedidoInput | PedidoStatusCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoStatusCreateManyPedidoInputEnvelope
    connect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
  }

  export type ComprovanteEntregaCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput> | ComprovanteEntregaCreateWithoutPedidoInput[] | ComprovanteEntregaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprovanteEntregaCreateOrConnectWithoutPedidoInput | ComprovanteEntregaCreateOrConnectWithoutPedidoInput[]
    createMany?: ComprovanteEntregaCreateManyPedidoInputEnvelope
    connect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type FreteUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FreteCreateOrConnectWithoutPedidoInput
    connect?: FreteWhereUniqueInput
  }

  export type PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput> | PedidoStatusCreateWithoutPedidoInput[] | PedidoStatusUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoStatusCreateOrConnectWithoutPedidoInput | PedidoStatusCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoStatusCreateManyPedidoInputEnvelope
    connect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
  }

  export type ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput> | ComprovanteEntregaCreateWithoutPedidoInput[] | ComprovanteEntregaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprovanteEntregaCreateOrConnectWithoutPedidoInput | ComprovanteEntregaCreateOrConnectWithoutPedidoInput[]
    createMany?: ComprovanteEntregaCreateManyPedidoInputEnvelope
    connect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type FreteUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FreteCreateOrConnectWithoutPedidoInput
    upsert?: FreteUpsertWithoutPedidoInput
    disconnect?: FreteWhereInput | boolean
    delete?: FreteWhereInput | boolean
    connect?: FreteWhereUniqueInput
    update?: XOR<XOR<FreteUpdateToOneWithWhereWithoutPedidoInput, FreteUpdateWithoutPedidoInput>, FreteUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoStatusUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput> | PedidoStatusCreateWithoutPedidoInput[] | PedidoStatusUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoStatusCreateOrConnectWithoutPedidoInput | PedidoStatusCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoStatusUpsertWithWhereUniqueWithoutPedidoInput | PedidoStatusUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoStatusCreateManyPedidoInputEnvelope
    set?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    disconnect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    delete?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    connect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    update?: PedidoStatusUpdateWithWhereUniqueWithoutPedidoInput | PedidoStatusUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoStatusUpdateManyWithWhereWithoutPedidoInput | PedidoStatusUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoStatusScalarWhereInput | PedidoStatusScalarWhereInput[]
  }

  export type ComprovanteEntregaUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput> | ComprovanteEntregaCreateWithoutPedidoInput[] | ComprovanteEntregaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprovanteEntregaCreateOrConnectWithoutPedidoInput | ComprovanteEntregaCreateOrConnectWithoutPedidoInput[]
    upsert?: ComprovanteEntregaUpsertWithWhereUniqueWithoutPedidoInput | ComprovanteEntregaUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComprovanteEntregaCreateManyPedidoInputEnvelope
    set?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    disconnect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    delete?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    connect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    update?: ComprovanteEntregaUpdateWithWhereUniqueWithoutPedidoInput | ComprovanteEntregaUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComprovanteEntregaUpdateManyWithWhereWithoutPedidoInput | ComprovanteEntregaUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComprovanteEntregaScalarWhereInput | ComprovanteEntregaScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type FreteUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FreteCreateOrConnectWithoutPedidoInput
    upsert?: FreteUpsertWithoutPedidoInput
    disconnect?: FreteWhereInput | boolean
    delete?: FreteWhereInput | boolean
    connect?: FreteWhereUniqueInput
    update?: XOR<XOR<FreteUpdateToOneWithWhereWithoutPedidoInput, FreteUpdateWithoutPedidoInput>, FreteUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput> | PedidoStatusCreateWithoutPedidoInput[] | PedidoStatusUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoStatusCreateOrConnectWithoutPedidoInput | PedidoStatusCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoStatusUpsertWithWhereUniqueWithoutPedidoInput | PedidoStatusUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoStatusCreateManyPedidoInputEnvelope
    set?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    disconnect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    delete?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    connect?: PedidoStatusWhereUniqueInput | PedidoStatusWhereUniqueInput[]
    update?: PedidoStatusUpdateWithWhereUniqueWithoutPedidoInput | PedidoStatusUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoStatusUpdateManyWithWhereWithoutPedidoInput | PedidoStatusUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoStatusScalarWhereInput | PedidoStatusScalarWhereInput[]
  }

  export type ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput> | ComprovanteEntregaCreateWithoutPedidoInput[] | ComprovanteEntregaUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ComprovanteEntregaCreateOrConnectWithoutPedidoInput | ComprovanteEntregaCreateOrConnectWithoutPedidoInput[]
    upsert?: ComprovanteEntregaUpsertWithWhereUniqueWithoutPedidoInput | ComprovanteEntregaUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ComprovanteEntregaCreateManyPedidoInputEnvelope
    set?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    disconnect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    delete?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    connect?: ComprovanteEntregaWhereUniqueInput | ComprovanteEntregaWhereUniqueInput[]
    update?: ComprovanteEntregaUpdateWithWhereUniqueWithoutPedidoInput | ComprovanteEntregaUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ComprovanteEntregaUpdateManyWithWhereWithoutPedidoInput | ComprovanteEntregaUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ComprovanteEntregaScalarWhereInput | ComprovanteEntregaScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PromocaoCreateNestedOneWithoutItensPedidoInput = {
    create?: XOR<PromocaoCreateWithoutItensPedidoInput, PromocaoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: PromocaoCreateOrConnectWithoutItensPedidoInput
    connect?: PromocaoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensInput
    upsert?: ProdutoUpsertWithoutItensInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensInput, ProdutoUpdateWithoutItensInput>, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type PromocaoUpdateOneWithoutItensPedidoNestedInput = {
    create?: XOR<PromocaoCreateWithoutItensPedidoInput, PromocaoUncheckedCreateWithoutItensPedidoInput>
    connectOrCreate?: PromocaoCreateOrConnectWithoutItensPedidoInput
    upsert?: PromocaoUpsertWithoutItensPedidoInput
    disconnect?: PromocaoWhereInput | boolean
    delete?: PromocaoWhereInput | boolean
    connect?: PromocaoWhereUniqueInput
    update?: XOR<XOR<PromocaoUpdateToOneWithWhereWithoutItensPedidoInput, PromocaoUpdateWithoutItensPedidoInput>, PromocaoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type ItemPedidoCreateNestedManyWithoutPromocaoInput = {
    create?: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput> | ItemPedidoCreateWithoutPromocaoInput[] | ItemPedidoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPromocaoInput | ItemPedidoCreateOrConnectWithoutPromocaoInput[]
    createMany?: ItemPedidoCreateManyPromocaoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutPromocaoInput = {
    create?: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput> | ProdutoCreateWithoutPromocaoInput[] | ProdutoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPromocaoInput | ProdutoCreateOrConnectWithoutPromocaoInput[]
    createMany?: ProdutoCreateManyPromocaoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPromocaoInput = {
    create?: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput> | ItemPedidoCreateWithoutPromocaoInput[] | ItemPedidoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPromocaoInput | ItemPedidoCreateOrConnectWithoutPromocaoInput[]
    createMany?: ItemPedidoCreateManyPromocaoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutPromocaoInput = {
    create?: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput> | ProdutoCreateWithoutPromocaoInput[] | ProdutoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPromocaoInput | ProdutoCreateOrConnectWithoutPromocaoInput[]
    createMany?: ProdutoCreateManyPromocaoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ItemPedidoUpdateManyWithoutPromocaoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput> | ItemPedidoCreateWithoutPromocaoInput[] | ItemPedidoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPromocaoInput | ItemPedidoCreateOrConnectWithoutPromocaoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPromocaoInput | ItemPedidoUpsertWithWhereUniqueWithoutPromocaoInput[]
    createMany?: ItemPedidoCreateManyPromocaoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPromocaoInput | ItemPedidoUpdateWithWhereUniqueWithoutPromocaoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPromocaoInput | ItemPedidoUpdateManyWithWhereWithoutPromocaoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutPromocaoNestedInput = {
    create?: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput> | ProdutoCreateWithoutPromocaoInput[] | ProdutoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPromocaoInput | ProdutoCreateOrConnectWithoutPromocaoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutPromocaoInput | ProdutoUpsertWithWhereUniqueWithoutPromocaoInput[]
    createMany?: ProdutoCreateManyPromocaoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutPromocaoInput | ProdutoUpdateWithWhereUniqueWithoutPromocaoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutPromocaoInput | ProdutoUpdateManyWithWhereWithoutPromocaoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPromocaoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput> | ItemPedidoCreateWithoutPromocaoInput[] | ItemPedidoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPromocaoInput | ItemPedidoCreateOrConnectWithoutPromocaoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPromocaoInput | ItemPedidoUpsertWithWhereUniqueWithoutPromocaoInput[]
    createMany?: ItemPedidoCreateManyPromocaoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPromocaoInput | ItemPedidoUpdateWithWhereUniqueWithoutPromocaoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPromocaoInput | ItemPedidoUpdateManyWithWhereWithoutPromocaoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutPromocaoNestedInput = {
    create?: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput> | ProdutoCreateWithoutPromocaoInput[] | ProdutoUncheckedCreateWithoutPromocaoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutPromocaoInput | ProdutoCreateOrConnectWithoutPromocaoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutPromocaoInput | ProdutoUpsertWithWhereUniqueWithoutPromocaoInput[]
    createMany?: ProdutoCreateManyPromocaoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutPromocaoInput | ProdutoUpdateWithWhereUniqueWithoutPromocaoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutPromocaoInput | ProdutoUpdateManyWithWhereWithoutPromocaoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type TransportadoraCreateNestedOneWithoutFretesInput = {
    create?: XOR<TransportadoraCreateWithoutFretesInput, TransportadoraUncheckedCreateWithoutFretesInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutFretesInput
    connect?: TransportadoraWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutFreteInput = {
    create?: XOR<PedidoCreateWithoutFreteInput, PedidoUncheckedCreateWithoutFreteInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutFreteInput
    connect?: PedidoWhereUniqueInput
  }

  export type TransportadoraUpdateOneWithoutFretesNestedInput = {
    create?: XOR<TransportadoraCreateWithoutFretesInput, TransportadoraUncheckedCreateWithoutFretesInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutFretesInput
    upsert?: TransportadoraUpsertWithoutFretesInput
    disconnect?: TransportadoraWhereInput | boolean
    delete?: TransportadoraWhereInput | boolean
    connect?: TransportadoraWhereUniqueInput
    update?: XOR<XOR<TransportadoraUpdateToOneWithWhereWithoutFretesInput, TransportadoraUpdateWithoutFretesInput>, TransportadoraUncheckedUpdateWithoutFretesInput>
  }

  export type PedidoUpdateOneRequiredWithoutFreteNestedInput = {
    create?: XOR<PedidoCreateWithoutFreteInput, PedidoUncheckedCreateWithoutFreteInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutFreteInput
    upsert?: PedidoUpsertWithoutFreteInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutFreteInput, PedidoUpdateWithoutFreteInput>, PedidoUncheckedUpdateWithoutFreteInput>
  }

  export type PedidoCreateNestedOneWithoutHistoricoStatusInput = {
    create?: XOR<PedidoCreateWithoutHistoricoStatusInput, PedidoUncheckedCreateWithoutHistoricoStatusInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutHistoricoStatusInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutHistoricoStatusNestedInput = {
    create?: XOR<PedidoCreateWithoutHistoricoStatusInput, PedidoUncheckedCreateWithoutHistoricoStatusInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutHistoricoStatusInput
    upsert?: PedidoUpsertWithoutHistoricoStatusInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutHistoricoStatusInput, PedidoUpdateWithoutHistoricoStatusInput>, PedidoUncheckedUpdateWithoutHistoricoStatusInput>
  }

  export type FreteCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput> | FreteCreateWithoutTransportadoraInput[] | FreteUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: FreteCreateOrConnectWithoutTransportadoraInput | FreteCreateOrConnectWithoutTransportadoraInput[]
    createMany?: FreteCreateManyTransportadoraInputEnvelope
    connect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
  }

  export type FreteUncheckedCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput> | FreteCreateWithoutTransportadoraInput[] | FreteUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: FreteCreateOrConnectWithoutTransportadoraInput | FreteCreateOrConnectWithoutTransportadoraInput[]
    createMany?: FreteCreateManyTransportadoraInputEnvelope
    connect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
  }

  export type FreteUpdateManyWithoutTransportadoraNestedInput = {
    create?: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput> | FreteCreateWithoutTransportadoraInput[] | FreteUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: FreteCreateOrConnectWithoutTransportadoraInput | FreteCreateOrConnectWithoutTransportadoraInput[]
    upsert?: FreteUpsertWithWhereUniqueWithoutTransportadoraInput | FreteUpsertWithWhereUniqueWithoutTransportadoraInput[]
    createMany?: FreteCreateManyTransportadoraInputEnvelope
    set?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    disconnect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    delete?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    connect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    update?: FreteUpdateWithWhereUniqueWithoutTransportadoraInput | FreteUpdateWithWhereUniqueWithoutTransportadoraInput[]
    updateMany?: FreteUpdateManyWithWhereWithoutTransportadoraInput | FreteUpdateManyWithWhereWithoutTransportadoraInput[]
    deleteMany?: FreteScalarWhereInput | FreteScalarWhereInput[]
  }

  export type FreteUncheckedUpdateManyWithoutTransportadoraNestedInput = {
    create?: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput> | FreteCreateWithoutTransportadoraInput[] | FreteUncheckedCreateWithoutTransportadoraInput[]
    connectOrCreate?: FreteCreateOrConnectWithoutTransportadoraInput | FreteCreateOrConnectWithoutTransportadoraInput[]
    upsert?: FreteUpsertWithWhereUniqueWithoutTransportadoraInput | FreteUpsertWithWhereUniqueWithoutTransportadoraInput[]
    createMany?: FreteCreateManyTransportadoraInputEnvelope
    set?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    disconnect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    delete?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    connect?: FreteWhereUniqueInput | FreteWhereUniqueInput[]
    update?: FreteUpdateWithWhereUniqueWithoutTransportadoraInput | FreteUpdateWithWhereUniqueWithoutTransportadoraInput[]
    updateMany?: FreteUpdateManyWithWhereWithoutTransportadoraInput | FreteUpdateManyWithWhereWithoutTransportadoraInput[]
    deleteMany?: FreteScalarWhereInput | FreteScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutComprovantesInput = {
    create?: XOR<PedidoCreateWithoutComprovantesInput, PedidoUncheckedCreateWithoutComprovantesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComprovantesInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutComprovantesNestedInput = {
    create?: XOR<PedidoCreateWithoutComprovantesInput, PedidoUncheckedCreateWithoutComprovantesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutComprovantesInput
    upsert?: PedidoUpsertWithoutComprovantesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutComprovantesInput, PedidoUpdateWithoutComprovantesInput>, PedidoUncheckedUpdateWithoutComprovantesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PedidoCreateWithoutClienteInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    frete?: FreteCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    frete?: FreteUncheckedCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    numeroPedido?: StringFilter<"Pedido"> | string
    clienteId?: IntFilter<"Pedido"> | number
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    stripeSessionId?: StringFilter<"Pedido"> | string
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type ItemPedidoCreateWithoutProdutoInput = {
    quantidade: number
    valor?: number | null
    pedido: PedidoCreateNestedOneWithoutItensInput
    promocao?: PromocaoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutProdutoInput = {
    id?: number
    pedidoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type ItemPedidoCreateOrConnectWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoCreateManyProdutoInputEnvelope = {
    data: ItemPedidoCreateManyProdutoInput | ItemPedidoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type PromocaoCreateWithoutProdutoInput = {
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    itensPedido?: ItemPedidoCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    itensPedido?: ItemPedidoUncheckedCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoCreateOrConnectWithoutProdutoInput = {
    where: PromocaoWhereUniqueInput
    create: XOR<PromocaoCreateWithoutProdutoInput, PromocaoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItemPedidoCreateWithoutProdutoInput, ItemPedidoUncheckedCreateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutProdutoInput, ItemPedidoUncheckedUpdateWithoutProdutoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutProdutoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    produtoId?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    valor?: FloatNullableFilter<"ItemPedido"> | number | null
    promocaoId?: IntNullableFilter<"ItemPedido"> | number | null
  }

  export type PromocaoUpsertWithoutProdutoInput = {
    update: XOR<PromocaoUpdateWithoutProdutoInput, PromocaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<PromocaoCreateWithoutProdutoInput, PromocaoUncheckedCreateWithoutProdutoInput>
    where?: PromocaoWhereInput
  }

  export type PromocaoUpdateToOneWithWhereWithoutProdutoInput = {
    where?: PromocaoWhereInput
    data: XOR<PromocaoUpdateWithoutProdutoInput, PromocaoUncheckedUpdateWithoutProdutoInput>
  }

  export type PromocaoUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUpdateManyWithoutPromocaoNestedInput
  }

  export type PromocaoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPedido?: ItemPedidoUncheckedUpdateManyWithoutPromocaoNestedInput
  }

  export type ClienteCreateWithoutPedidosInput = {
    nome: string
    email: string
    password: string
    cpf?: string | null
    role?: $Enums.Role
    cep?: string | null
    logradouro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    email: string
    password: string
    cpf?: string | null
    role?: $Enums.Role
    cep?: string | null
    logradouro?: string | null
    cidade?: string | null
    estado?: string | null
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    quantidade: number
    valor?: number | null
    produto: ProdutoCreateNestedOneWithoutItensInput
    promocao?: PromocaoCreateNestedOneWithoutItensPedidoInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    produtoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type FreteCreateWithoutPedidoInput = {
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    transportadora?: TransportadoraCreateNestedOneWithoutFretesInput
  }

  export type FreteUncheckedCreateWithoutPedidoInput = {
    id?: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    transportadoraId?: number | null
  }

  export type FreteCreateOrConnectWithoutPedidoInput = {
    where: FreteWhereUniqueInput
    create: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoStatusCreateWithoutPedidoInput = {
    status: string
    dataStatus?: Date | string
  }

  export type PedidoStatusUncheckedCreateWithoutPedidoInput = {
    id?: number
    status: string
    dataStatus?: Date | string
  }

  export type PedidoStatusCreateOrConnectWithoutPedidoInput = {
    where: PedidoStatusWhereUniqueInput
    create: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoStatusCreateManyPedidoInputEnvelope = {
    data: PedidoStatusCreateManyPedidoInput | PedidoStatusCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ComprovanteEntregaCreateWithoutPedidoInput = {
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
  }

  export type ComprovanteEntregaUncheckedCreateWithoutPedidoInput = {
    id?: number
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
  }

  export type ComprovanteEntregaCreateOrConnectWithoutPedidoInput = {
    where: ComprovanteEntregaWhereUniqueInput
    create: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput>
  }

  export type ComprovanteEntregaCreateManyPedidoInputEnvelope = {
    data: ComprovanteEntregaCreateManyPedidoInput | ComprovanteEntregaCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type FreteUpsertWithoutPedidoInput = {
    update: XOR<FreteUpdateWithoutPedidoInput, FreteUncheckedUpdateWithoutPedidoInput>
    create: XOR<FreteCreateWithoutPedidoInput, FreteUncheckedCreateWithoutPedidoInput>
    where?: FreteWhereInput
  }

  export type FreteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: FreteWhereInput
    data: XOR<FreteUpdateWithoutPedidoInput, FreteUncheckedUpdateWithoutPedidoInput>
  }

  export type FreteUpdateWithoutPedidoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    transportadora?: TransportadoraUpdateOneWithoutFretesNestedInput
  }

  export type FreteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    transportadoraId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoStatusUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoStatusWhereUniqueInput
    update: XOR<PedidoStatusUpdateWithoutPedidoInput, PedidoStatusUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoStatusCreateWithoutPedidoInput, PedidoStatusUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoStatusUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoStatusWhereUniqueInput
    data: XOR<PedidoStatusUpdateWithoutPedidoInput, PedidoStatusUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoStatusUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoStatusScalarWhereInput
    data: XOR<PedidoStatusUpdateManyMutationInput, PedidoStatusUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoStatusScalarWhereInput = {
    AND?: PedidoStatusScalarWhereInput | PedidoStatusScalarWhereInput[]
    OR?: PedidoStatusScalarWhereInput[]
    NOT?: PedidoStatusScalarWhereInput | PedidoStatusScalarWhereInput[]
    id?: IntFilter<"PedidoStatus"> | number
    pedidoId?: IntFilter<"PedidoStatus"> | number
    status?: StringFilter<"PedidoStatus"> | string
    dataStatus?: DateTimeFilter<"PedidoStatus"> | Date | string
  }

  export type ComprovanteEntregaUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ComprovanteEntregaWhereUniqueInput
    update: XOR<ComprovanteEntregaUpdateWithoutPedidoInput, ComprovanteEntregaUncheckedUpdateWithoutPedidoInput>
    create: XOR<ComprovanteEntregaCreateWithoutPedidoInput, ComprovanteEntregaUncheckedCreateWithoutPedidoInput>
  }

  export type ComprovanteEntregaUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ComprovanteEntregaWhereUniqueInput
    data: XOR<ComprovanteEntregaUpdateWithoutPedidoInput, ComprovanteEntregaUncheckedUpdateWithoutPedidoInput>
  }

  export type ComprovanteEntregaUpdateManyWithWhereWithoutPedidoInput = {
    where: ComprovanteEntregaScalarWhereInput
    data: XOR<ComprovanteEntregaUpdateManyMutationInput, ComprovanteEntregaUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ComprovanteEntregaScalarWhereInput = {
    AND?: ComprovanteEntregaScalarWhereInput | ComprovanteEntregaScalarWhereInput[]
    OR?: ComprovanteEntregaScalarWhereInput[]
    NOT?: ComprovanteEntregaScalarWhereInput | ComprovanteEntregaScalarWhereInput[]
    id?: IntFilter<"ComprovanteEntrega"> | number
    pedidoId?: IntFilter<"ComprovanteEntrega"> | number
    nomeRecebedor?: StringFilter<"ComprovanteEntrega"> | string
    fotoUrl?: StringFilter<"ComprovanteEntrega"> | string
    dataEntrega?: DateTimeFilter<"ComprovanteEntrega"> | Date | string
  }

  export type PedidoCreateWithoutItensInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    frete?: FreteCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    frete?: FreteUncheckedCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensInput = {
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    promocao?: PromocaoCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutItensInput = {
    id?: number
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    promocaoId?: number | null
  }

  export type ProdutoCreateOrConnectWithoutItensInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
  }

  export type PromocaoCreateWithoutItensPedidoInput = {
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    Produto?: ProdutoCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoUncheckedCreateWithoutItensPedidoInput = {
    id?: number
    nome: string
    desconto: number
    freteGratis: boolean
    dataInicio: Date | string
    dataFim: Date | string
    Produto?: ProdutoUncheckedCreateNestedManyWithoutPromocaoInput
  }

  export type PromocaoCreateOrConnectWithoutItensPedidoInput = {
    where: PromocaoWhereUniqueInput
    create: XOR<PromocaoCreateWithoutItensPedidoInput, PromocaoUncheckedCreateWithoutItensPedidoInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    frete?: FreteUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frete?: FreteUncheckedUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProdutoUpsertWithoutItensInput = {
    update: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
    create: XOR<ProdutoCreateWithoutItensInput, ProdutoUncheckedCreateWithoutItensInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensInput, ProdutoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateWithoutItensInput = {
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocao?: PromocaoUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PromocaoUpsertWithoutItensPedidoInput = {
    update: XOR<PromocaoUpdateWithoutItensPedidoInput, PromocaoUncheckedUpdateWithoutItensPedidoInput>
    create: XOR<PromocaoCreateWithoutItensPedidoInput, PromocaoUncheckedCreateWithoutItensPedidoInput>
    where?: PromocaoWhereInput
  }

  export type PromocaoUpdateToOneWithWhereWithoutItensPedidoInput = {
    where?: PromocaoWhereInput
    data: XOR<PromocaoUpdateWithoutItensPedidoInput, PromocaoUncheckedUpdateWithoutItensPedidoInput>
  }

  export type PromocaoUpdateWithoutItensPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    Produto?: ProdutoUpdateManyWithoutPromocaoNestedInput
  }

  export type PromocaoUncheckedUpdateWithoutItensPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    desconto?: IntFieldUpdateOperationsInput | number
    freteGratis?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    Produto?: ProdutoUncheckedUpdateManyWithoutPromocaoNestedInput
  }

  export type ItemPedidoCreateWithoutPromocaoInput = {
    quantidade: number
    valor?: number | null
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutPromocaoInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor?: number | null
  }

  export type ItemPedidoCreateOrConnectWithoutPromocaoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput>
  }

  export type ItemPedidoCreateManyPromocaoInputEnvelope = {
    data: ItemPedidoCreateManyPromocaoInput | ItemPedidoCreateManyPromocaoInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoCreateWithoutPromocaoInput = {
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    itens?: ItemPedidoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutPromocaoInput = {
    id?: number
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutPromocaoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput>
  }

  export type ProdutoCreateManyPromocaoInputEnvelope = {
    data: ProdutoCreateManyPromocaoInput | ProdutoCreateManyPromocaoInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPromocaoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPromocaoInput, ItemPedidoUncheckedUpdateWithoutPromocaoInput>
    create: XOR<ItemPedidoCreateWithoutPromocaoInput, ItemPedidoUncheckedCreateWithoutPromocaoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPromocaoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPromocaoInput, ItemPedidoUncheckedUpdateWithoutPromocaoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPromocaoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPromocaoInput>
  }

  export type ProdutoUpsertWithWhereUniqueWithoutPromocaoInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutPromocaoInput, ProdutoUncheckedUpdateWithoutPromocaoInput>
    create: XOR<ProdutoCreateWithoutPromocaoInput, ProdutoUncheckedCreateWithoutPromocaoInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutPromocaoInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutPromocaoInput, ProdutoUncheckedUpdateWithoutPromocaoInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutPromocaoInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutPromocaoInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    title?: StringFilter<"Produto"> | string
    categoria?: StringNullableFilter<"Produto"> | string | null
    description?: StringFilter<"Produto"> | string
    price?: FloatFilter<"Produto"> | number
    image?: StringFilter<"Produto"> | string
    estoque?: IntFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    promocaoId?: IntNullableFilter<"Produto"> | number | null
  }

  export type TransportadoraCreateWithoutFretesInput = {
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type TransportadoraUncheckedCreateWithoutFretesInput = {
    id?: number
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type TransportadoraCreateOrConnectWithoutFretesInput = {
    where: TransportadoraWhereUniqueInput
    create: XOR<TransportadoraCreateWithoutFretesInput, TransportadoraUncheckedCreateWithoutFretesInput>
  }

  export type PedidoCreateWithoutFreteInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    historicoStatus?: PedidoStatusCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutFreteInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    historicoStatus?: PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput
    comprovantes?: ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutFreteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutFreteInput, PedidoUncheckedCreateWithoutFreteInput>
  }

  export type TransportadoraUpsertWithoutFretesInput = {
    update: XOR<TransportadoraUpdateWithoutFretesInput, TransportadoraUncheckedUpdateWithoutFretesInput>
    create: XOR<TransportadoraCreateWithoutFretesInput, TransportadoraUncheckedCreateWithoutFretesInput>
    where?: TransportadoraWhereInput
  }

  export type TransportadoraUpdateToOneWithWhereWithoutFretesInput = {
    where?: TransportadoraWhereInput
    data: XOR<TransportadoraUpdateWithoutFretesInput, TransportadoraUncheckedUpdateWithoutFretesInput>
  }

  export type TransportadoraUpdateWithoutFretesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransportadoraUncheckedUpdateWithoutFretesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUpsertWithoutFreteInput = {
    update: XOR<PedidoUpdateWithoutFreteInput, PedidoUncheckedUpdateWithoutFreteInput>
    create: XOR<PedidoCreateWithoutFreteInput, PedidoUncheckedCreateWithoutFreteInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutFreteInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutFreteInput, PedidoUncheckedUpdateWithoutFreteInput>
  }

  export type PedidoUpdateWithoutFreteInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutFreteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutHistoricoStatusInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    frete?: FreteCreateNestedOneWithoutPedidoInput
    comprovantes?: ComprovanteEntregaCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutHistoricoStatusInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    frete?: FreteUncheckedCreateNestedOneWithoutPedidoInput
    comprovantes?: ComprovanteEntregaUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutHistoricoStatusInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutHistoricoStatusInput, PedidoUncheckedCreateWithoutHistoricoStatusInput>
  }

  export type PedidoUpsertWithoutHistoricoStatusInput = {
    update: XOR<PedidoUpdateWithoutHistoricoStatusInput, PedidoUncheckedUpdateWithoutHistoricoStatusInput>
    create: XOR<PedidoCreateWithoutHistoricoStatusInput, PedidoUncheckedCreateWithoutHistoricoStatusInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutHistoricoStatusInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutHistoricoStatusInput, PedidoUncheckedUpdateWithoutHistoricoStatusInput>
  }

  export type PedidoUpdateWithoutHistoricoStatusInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    frete?: FreteUpdateOneWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutHistoricoStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    frete?: FreteUncheckedUpdateOneWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type FreteCreateWithoutTransportadoraInput = {
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
    pedido: PedidoCreateNestedOneWithoutFreteInput
  }

  export type FreteUncheckedCreateWithoutTransportadoraInput = {
    id?: number
    pedidoId: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
  }

  export type FreteCreateOrConnectWithoutTransportadoraInput = {
    where: FreteWhereUniqueInput
    create: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput>
  }

  export type FreteCreateManyTransportadoraInputEnvelope = {
    data: FreteCreateManyTransportadoraInput | FreteCreateManyTransportadoraInput[]
    skipDuplicates?: boolean
  }

  export type FreteUpsertWithWhereUniqueWithoutTransportadoraInput = {
    where: FreteWhereUniqueInput
    update: XOR<FreteUpdateWithoutTransportadoraInput, FreteUncheckedUpdateWithoutTransportadoraInput>
    create: XOR<FreteCreateWithoutTransportadoraInput, FreteUncheckedCreateWithoutTransportadoraInput>
  }

  export type FreteUpdateWithWhereUniqueWithoutTransportadoraInput = {
    where: FreteWhereUniqueInput
    data: XOR<FreteUpdateWithoutTransportadoraInput, FreteUncheckedUpdateWithoutTransportadoraInput>
  }

  export type FreteUpdateManyWithWhereWithoutTransportadoraInput = {
    where: FreteScalarWhereInput
    data: XOR<FreteUpdateManyMutationInput, FreteUncheckedUpdateManyWithoutTransportadoraInput>
  }

  export type FreteScalarWhereInput = {
    AND?: FreteScalarWhereInput | FreteScalarWhereInput[]
    OR?: FreteScalarWhereInput[]
    NOT?: FreteScalarWhereInput | FreteScalarWhereInput[]
    id?: IntFilter<"Frete"> | number
    pedidoId?: IntFilter<"Frete"> | number
    tipo?: StringFilter<"Frete"> | string
    valor?: FloatFilter<"Frete"> | number
    prazoEstimado?: StringFilter<"Frete"> | string
    codigoRastreamento?: StringNullableFilter<"Frete"> | string | null
    transportadoraId?: IntNullableFilter<"Frete"> | number | null
  }

  export type PedidoCreateWithoutComprovantesInput = {
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
    frete?: FreteCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutComprovantesInput = {
    id?: number
    numeroPedido: string
    clienteId: number
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
    frete?: FreteUncheckedCreateNestedOneWithoutPedidoInput
    historicoStatus?: PedidoStatusUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutComprovantesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutComprovantesInput, PedidoUncheckedCreateWithoutComprovantesInput>
  }

  export type PedidoUpsertWithoutComprovantesInput = {
    update: XOR<PedidoUpdateWithoutComprovantesInput, PedidoUncheckedUpdateWithoutComprovantesInput>
    create: XOR<PedidoCreateWithoutComprovantesInput, PedidoUncheckedCreateWithoutComprovantesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutComprovantesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutComprovantesInput, PedidoUncheckedUpdateWithoutComprovantesInput>
  }

  export type PedidoUpdateWithoutComprovantesInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    frete?: FreteUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutComprovantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    frete?: FreteUncheckedUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyClienteInput = {
    id?: number
    numeroPedido: string
    valorTotal: number
    status: string
    stripeSessionId: string
    createdAt?: Date | string
  }

  export type PedidoUpdateWithoutClienteInput = {
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
    frete?: FreteUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
    frete?: FreteUncheckedUpdateOneWithoutPedidoNestedInput
    historicoStatus?: PedidoStatusUncheckedUpdateManyWithoutPedidoNestedInput
    comprovantes?: ComprovanteEntregaUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroPedido?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManyProdutoInput = {
    id?: number
    pedidoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type ItemPedidoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    promocao?: PromocaoUpdateOneWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    produtoId: number
    quantidade: number
    valor?: number | null
    promocaoId?: number | null
  }

  export type PedidoStatusCreateManyPedidoInput = {
    id?: number
    status: string
    dataStatus?: Date | string
  }

  export type ComprovanteEntregaCreateManyPedidoInput = {
    id?: number
    nomeRecebedor: string
    fotoUrl: string
    dataEntrega?: Date | string
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
    promocao?: PromocaoUpdateOneWithoutItensPedidoNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    promocaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoStatusUpdateWithoutPedidoInput = {
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoStatusUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoStatusUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dataStatus?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprovanteEntregaUpdateWithoutPedidoInput = {
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprovanteEntregaUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComprovanteEntregaUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeRecebedor?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    dataEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPedidoCreateManyPromocaoInput = {
    id?: number
    pedidoId: number
    produtoId: number
    quantidade: number
    valor?: number | null
  }

  export type ProdutoCreateManyPromocaoInput = {
    id?: number
    title: string
    categoria?: string | null
    description: string
    price: number
    image: string
    estoque?: number
    createdAt?: Date | string
  }

  export type ItemPedidoUpdateWithoutPromocaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPromocaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPromocaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProdutoUpdateWithoutPromocaoInput = {
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutPromocaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemPedidoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutPromocaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    estoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FreteCreateManyTransportadoraInput = {
    id?: number
    pedidoId: number
    tipo: string
    valor: number
    prazoEstimado: string
    codigoRastreamento?: string | null
  }

  export type FreteUpdateWithoutTransportadoraInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutFreteNestedInput
  }

  export type FreteUncheckedUpdateWithoutTransportadoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreteUncheckedUpdateManyWithoutTransportadoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    prazoEstimado?: StringFieldUpdateOperationsInput | string
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}