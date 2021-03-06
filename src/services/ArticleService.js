import axios from 'axios';

const ARTICLE_API_BASE_URL = "xxxxx/api/v1/articles";

class ArticleService {

    getArticles(){
        return axios.get(ARTICLE_API_BASE_URL);
    }

    createArticle(article){
        return axios.post(ARTICLE_API_BASE_URL, article);
    }

    getArticleById(articleId){
        return axios.get(ARTICLE_API_BASE_URL + '/' + articleId);
    }

    updateArticle(article, articleId){
        return axios.put(ARTICLE_API_BASE_URL + '/' + articleId, article);
    }

    deleteArticle(articleId){
        return axios.delete(ARTICLE_API_BASE_URL + '/' + articleId);
    }
}

export default new ArticleService()