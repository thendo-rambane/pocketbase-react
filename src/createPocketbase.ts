import Pocketbase, { BaseAuthStore } from 'pocketbase';
import React from 'react';

type PocketbaseProviderProps = {
  client: Pocketbase;
  children: React.ReactNode;
};

function createPocketbase(pocketbaseUrl: string,  authStore?: BaseAuthStore | null, lang?: string ) {
  function usePocketbase() {
    return new Pocketbase(pocketbaseUrl, 
      authStore,
      lang
      );
  }
  const PocketbaseContext = React.createContext<Pocketbase>(
    new Pocketbase(pocketbaseUrl, 
      authStore,
      lang
      )
  );

  function PocketbaseProvider({ children, client }: PocketbaseProviderProps) {
    return React.createElement(PocketbaseContext.Provider, { value: client }, children);
  }

  function usePocketbaseClient() {
    const context = React.useContext(PocketbaseContext);
    if (context === undefined) {
      throw new Error('usePocketbaseClient must be used within a PocketbaseProvider');
    }
    return context;
  }

  return {
    PocketbaseProvider,
    usePocketbaseClient,
    usePocketbase,
  }
}

export default createPocketbase;
