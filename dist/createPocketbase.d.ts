import Pocketbase, { BaseAuthStore } from 'pocketbase';
import React from 'react';
declare type PocketbaseProviderProps = {
    client: Pocketbase;
    children: React.ReactNode;
};
declare function createPocketbase(pocketbaseUrl: string, authStore?: BaseAuthStore | null, lang?: string): {
    PocketbaseProvider: ({ children, client }: PocketbaseProviderProps) => React.FunctionComponentElement<React.ProviderProps<Pocketbase>>;
    usePocketbaseClient: () => Pocketbase;
    usePocketbase: () => Pocketbase;
};
export default createPocketbase;
//# sourceMappingURL=createPocketbase.d.ts.map