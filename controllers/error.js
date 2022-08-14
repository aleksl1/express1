exports.getErrorPage = (req, res, next) => {
  res.status(404).render("error", { docTitle: "error page", path: null });
};
