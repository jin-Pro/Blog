export type wrapPromiseReturnType<T> = { get: () => T | undefined };

export function wrapPromise<T>(
  promise: Promise<T>,
  cb?: Function
): wrapPromiseReturnType<T> {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = cb ? cb(r) : r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    get() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
