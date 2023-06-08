import type { Rules, Values } from 'async-validator';
import type { InjectionKey } from 'vue';

export interface FormData {
    model: Record<string, unknown>;
    rules?: Rules;
}

export interface FormItem {
    validate: () => Promise<Values>
}

export const key: InjectionKey<FormData> = Symbol('form-data')