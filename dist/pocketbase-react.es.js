import c from "pocketbase";
import o from "react";
function a(e, t, n) {
  return new c(e, t, n);
}
const r = o.createContext(null);
function i({ children: e, client: t }) {
  return o.createElement(
    r.Provider,
    { value: t },
    e
  );
}
function P() {
  const e = o.useContext(r);
  if (e === null)
    throw new Error(
      "usePocketbaseClient must be used within a PocketbaseProvider"
    );
  return e;
}
export {
  i as PocketbaseProvider,
  a as useCreatePocketbase,
  P as usePocketbaseClient
};
