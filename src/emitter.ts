import mitt, {type Emitter} from 'mitt';
import type { FormItem } from './components/form/type';

export interface Events {
    validate: undefined;
    addFormItem: FormItem;
    [x: string | symbol]: unknown;
}

export const emitter: Emitter<Events> = mitt<Events>();