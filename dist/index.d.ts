import Pocketbase, { BaseAuthStore } from 'pocketbase';
import React from 'react';
declare type PocketbaseProviderProps = {
    client: Pocketbase;
    children: React.ReactNode;
};
declare function useCreatePocketbase(pocketbaseUrl: string, authStore?: BaseAuthStore | null, lang?: string): Pocketbase;
declare function PocketbaseProvider({ children, client }: PocketbaseProviderProps): React.FunctionComponentElement<React.ProviderProps<Pocketbase | null>>;
declare function usePocketbaseClient(): {
    client: Pocketbase;
    setAuthStore: (authStore: BaseAuthStore) => void;
};
export { PocketbaseProvider, usePocketbaseClient, useCreatePocketbase };
//# sourceMappingURL=index.d.ts.map