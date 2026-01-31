import articles from "../../data/articles.json" with { type: "json" };

const articlesHandler = {
  byId(req, res, next) {
    const articleIndex = req.params.id - 1;
    res.render("article.ejs", {
      articles,
      articleIndex,
      pageTitle: articles[articleIndex].title,
    });
  },

  byCategory(req, res, next) {
    const articlesCategory = req.params.category;
    const articlesFiltered = articles.filter(
      (article) => article.category === articlesCategory,
    );
    res.render("index.ejs", {
      articles: articlesFiltered,
      pageTitle: articlesCategory,
      mainTitle: `Les articles de la catégorie : ${articlesCategory}`,
    });
  },

  byAuthor(req, res, next) {
    const articlesAuthor = req.params.author;
    const articlesFiltered = articles.filter(
      (article) => article.author === articlesAuthor,
    );
    res.render("index.ejs", {
      articles: articlesFiltered,
      pageTitle: articlesAuthor,
      mainTitle: `Les articles de : ${articlesAuthor}`,
    });
  },
};

export default articlesHandler;
