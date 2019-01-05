export default function (ingredients: Array<any>): Array<any> {
  const now: number = Date.now();

  return ingredients
    .filter((item: any) => new Date(item['use-by']).getTime() > now)
    .map((item: any) => {
      const bestBefore: number = new Date(item['best-before']).getTime();

      return {
        ...item,
        bestBeforePassed: bestBefore < now,
      };
    });
}