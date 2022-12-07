import Pocketbase, { BaseAuthStore } from 'pocketbase';
import React from 'react';

type PocketbaseProviderProps = {
  client: Pocketbase;
  children: React.ReactNode;
};

function useCreatePocketbase(
  pocketbaseUrl: string,
  authStore?: BaseAuthStore | null,
  lang?: string,
) {
  return new Pocketbase(pocketbaseUrl, authStore, lang);
}
const PocketbaseContext = React.createContext<Pocketbase | null>(null);

function PocketbaseProvider({ children, client }: PocketbaseProviderProps) {
  return React.createElement(
    PocketbaseContext.Provider,
    { value: client },
    children,
  );
}

function usePocketbaseClient() {
  const context = React.useContext(PocketbaseContext);
  if (context === null) {
    throw new Error(
      'usePocketbaseClient must be used within a PocketbaseProvider',
    );
  }

  return context;
}

export { PocketbaseProvider, usePocketbaseClient, useCreatePocketbase };
