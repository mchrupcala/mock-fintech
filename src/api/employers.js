export const fetchEmployers = () => {
  setTimeout((query) => {
    return ["Google", "Meta", "TikTok", "Amazon"].filter((company) =>
      company.toLowerCase().contains(query)
    );
  }, 1000);
};
