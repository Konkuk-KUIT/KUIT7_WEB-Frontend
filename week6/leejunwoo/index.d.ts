type Todo = {
    id: number;
    text: string;
    done: boolean;
};
declare let todos: Todo[];
declare function getElement<T extends HTMLElement>(id: string): T;
declare const form: HTMLFormElement;
declare const input: HTMLInputElement;
declare const list: HTMLUListElement;
declare function deleteTodo(id: number): void;
declare function toggleDone(id: number): void;
declare function render(): void;
declare function updateTodo(id: number, span: HTMLSpanElement): void;
//# sourceMappingURL=index.d.ts.map