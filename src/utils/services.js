const headerConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { headerConfig };
