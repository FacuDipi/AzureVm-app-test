
const fetchCoins = async (fetch: WindowOrWorkerGlobalScope['fetch']) => {
  const coinsRes = await fetch('https://api.coincap.io/v2/assets');
  const coinsData= await coinsRes.json();
  const coinsArray= Object.values(coinsData.data)
  return coinsArray
};

export const load = async ({fetch}: {fetch: WindowOrWorkerGlobalScope['fetch']}) => {
  return {coins: await fetchCoins(fetch)};
};

export const _refetchCoins = async ({fetch}: {fetch: WindowOrWorkerGlobalScope['fetch']}) => {
  return {coins: await fetchCoins(fetch)};
};
