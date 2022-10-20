function changeInfiniteScrollDataToArray(pageList: any) {
  const array: any = [];

  pageList?.pages.forEach((page: any) => {
    array.push(...page.result);
  });

  return array;
}

export { changeInfiniteScrollDataToArray };
