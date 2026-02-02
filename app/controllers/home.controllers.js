import articles from "../../data/articles.json" with { type: "json" };

const homePage = {
  hP(req, res, next) {
    res.render("index.ejs", { articles, pageTitle: "Les actus" });
  },

  resultPage(req, res, next) {
    const search = req.query.search;
    const userSearch = search.toLowerCase();
    const resultSearch = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(userSearch) ||
        article.text.toLowerCase().includes(userSearch) ||
        article.author.toLowerCase().includes(userSearch) ||
        article.category.toLowerCase().includes(userSearch),
    );
    res.render("index.ejs", {
      articles: resultSearch,
      pageTitle: "Recherche",
      mainTitle: `Resultat de la recherche pour : ${search}`,
      search: search,
    });
  },
};

export default homePage;
