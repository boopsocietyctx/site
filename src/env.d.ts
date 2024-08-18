/* eslint-disable-next-line @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  TICKET_TAILOR_API_TOKEN: string;
  CACHE: KVNamespace;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  interface Locals extends Runtime {}
}
