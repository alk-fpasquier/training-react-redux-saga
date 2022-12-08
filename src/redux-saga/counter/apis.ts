const fakeRequest = <T = unknown>(func: T): T =>
  async function doFakeRequest(...args: any) {
    const min = 500;
    const max = 2000;
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * (max - min + 1) + min))
    );
    return await (func as any)(...args);
  } as T;

export const fetchCounter = fakeRequest(async () => {
  const value = localStorage.getItem("counter") || "";
  return /^[-0-9]+$/.test(value) ? Number(value) : 0;
});

export const postCounter = fakeRequest(async (counter: number) => {
  localStorage.setItem("counter", String(counter));
});
