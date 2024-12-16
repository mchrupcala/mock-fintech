export const fetchEmployers = async () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(["Google", "Meta", "TikTok", "Amazon"]);
    }, 500);
  });
};
