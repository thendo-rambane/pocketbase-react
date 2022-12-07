import i from "pocketbase";
import t from "react";
function k(o, n, r) {
  function s() {
    return new i(
      o,
      n,
      r
    );
  }
  const c = t.createContext(
    new i(
      o,
      n,
      r
    )
  );
  function u({ children: e, client: P }) {
    return t.createElement(c.Provider, { value: P }, e);
  }
  function a() {
    const e = t.useContext(c);
    if (e === void 0)
      throw new Error("usePocketbaseClient must be used within a PocketbaseProvider");
    return e;
  }
  return {
    PocketbaseProvider: u,
    usePocketbaseClient: a,
    usePocketbase: s
  };
}
export {
  k as createPocketbase
};
