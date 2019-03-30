/// <reference types="node" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

declare module 'breadtags' {

    interface Tag {
        name: string;
        aliases: Array<string>;
        run(ctx: any): string;
    }

    export default class Parser {
        public constructor();
        public tags: Map<string, Tag>;
        public loadAll(directory: string): void;
        public load(tag: Tag): void;
        public parse(source: string, context: any): Promise<string>;
    }
}