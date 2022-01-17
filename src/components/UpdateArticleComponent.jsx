import React, { Component } from 'react'
import ArticleService from '../services/ArticleService';

class UpdateArticleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            body: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
    }

    componentDidMount(){
        ArticleService.getArticleById(this.state.id).then( (res) =>{
            console.log('fetch_article_before_update---',res.data.data);
            let article = res.data.data;
            this.setState({title: article.title,
                body: article.body
            });
        });
    }

    updateArticle = (e) => {
        e.preventDefault();
        let article = {title: this.state.title, body: this.state.body};
        console.log('update_article_data => ' + JSON.stringify(article));
        console.log('update_article_data_id => ' + JSON.stringify(this.state.id));
        ArticleService.updateArticle(article, this.state.id).then( res => {
            this.props.history.push('/articles');
        });
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeBodyHandler= (event) => {
        this.setState({body: event.target.value});
    }

    cancel(){
        this.props.history.push('/articles');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Article</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                               value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Body: </label>
                                        <input placeholder="Body" name="body" className="form-control"
                                               value={this.state.body} onChange={this.changeBodyHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateArticle}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateArticleComponent