import Pocketbase, { BaseAuthStore } from 'pocketbase';
import React from 'react';
declare type PocketbaseProviderProps = {
    client: Pocketbase;
    children: React.ReactNode;
};
declare function usePocketbase(pocketbaseUrl: string, authStore?: BaseAuthStore | null, lang?: string): Pocketbase;
declare function PocketbaseProvider({ children, client }: PocketbaseProviderProps): React.FunctionComponentElement<React.ProviderProps<Pocketbase | null>>;
declare function usePocketbaseClient(): Pocketbase;
export { PocketbaseProvider, usePocketbaseClient, usePocketbase };
//# sourceMappingURL=createPocketbase.d.ts.map