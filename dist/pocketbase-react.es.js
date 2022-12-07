import c from "pocketbase";
import r, { useCallback as s } from "react";
function i(e, t, o) {
  return new c(e, t, o);
}
const n = r.createContext(null);
function l({ children: e, client: t }) {
  return r.createElement(
    n.Provider,
    { value: t },
    e
  );
}
function P() {
  const e = r.useContext(n);
  if (e === null)
    throw new Error(
      "usePocketbaseClient must be used within a PocketbaseProvider"
    );
  const t = s(
    (o) => {
      e.authStore = o;
    },
    [e]
  );
  return {
    client: e,
    setAuthStore: t
  };
}
export {
  l as PocketbaseProvider,
  i as useCreatePocketbase,
  P as usePocketbaseClient
};
