import c from "pocketbase";
import o from "react";
function i(e, t, r) {
  return new c(e, t, r);
}
const n = o.createContext(null);
function a({ children: e, client: t }) {
  return o.createElement(
    n.Provider,
    { value: t },
    e
  );
}
function P() {
  const e = o.useContext(n);
  if (e === null)
    throw new Error(
      "usePocketbaseClient must be used within a PocketbaseProvider"
    );
  return e;
}
export {
  a as PocketbaseProvider,
  i as usePocketbase,
  P as usePocketbaseClient
};
