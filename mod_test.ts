import { JSONParseStream } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("json parse stream", async () => {
  const stream = new JSONParseStream();
  const writer = stream.writable.getWriter();
  writer.write("[1,2,3]");
  const reader = stream.readable.getReader();
  const result = await reader.read();
  const value = result.value as number[];
  assertEquals(value, [1, 2, 3]);
});
