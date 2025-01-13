import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    PORT: z.ZodEffects<z.ZodEffects<z.ZodString, number, string>, number, string>;
    PASSWORD_SALT: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodString>, number, string>, number, string>;
    JWT_SECRET: z.ZodString;
}, "strip", z.ZodTypeAny, {
    PORT?: number;
    PASSWORD_SALT?: number;
    JWT_SECRET?: string;
}, {
    PORT?: string;
    PASSWORD_SALT?: string;
    JWT_SECRET?: string;
}>;
export type Envs = z.infer<typeof envSchema>;
