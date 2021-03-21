import { createContext, useContext } from "react";

// 컨텍스트 디폴트값
// client: null, server: {done:false, promises: []}
const PreloadContext = createContext(null);
export default PreloadContext;

//파라미터 resolve는 함수타입
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);

  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

export const usePreloader = (resolve) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;
  preloadContext.promises.push(Promise.resolve(resolve()));
};
