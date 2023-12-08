import * as Effect from 'effect/Effect';
import { pipe } from 'effect/Function';

// Rewrite to Effect.gen

export async function refactorMe(arg: string) {
  return await Promise.resolve(1);
}

// Toggle lazy const

const test1 = 1;

const test2 = () => 1;

const test3 = () => {
  console.log('Hello');
};

// Rewrite to datafirst

const test = pipe(
  Effect.succeed('Hello'),
  Effect.flatMap((_) => Effect.log(_)),
  Effect.zipRight(Effect.succeed(42)),
  Effect.map((_) => _ * 2)
);
