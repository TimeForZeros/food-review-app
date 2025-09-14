import { betterAuth } from 'better-auth';
import { argon2id, argon2Verify } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { account, db, session, user, verification } from '@/db';

const ARGON2ID_CONFIG = {
  // OWASP recommended config
  iterations: 2,
  parallelism: 1,
  memorySize: 1024 * 19, // 19 MiB
  hashLength: 32,
  outputType: 'encoded' as const,
  secret: process.env.pepper!,
};

export const hashPassword = (password: string): Promise<string> =>
  argon2id({
    ...ARGON2ID_CONFIG,
    password,
    salt: randomBytes(16),
  });

export const authenticate = async (password: string, hash: string) =>
  argon2Verify({ password, hash, secret: process.env.pepper! });

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      account,
      session,
      verification,
    },
  }),
});
