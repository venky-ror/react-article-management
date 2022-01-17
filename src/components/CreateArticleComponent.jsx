import React, { Component } from 'react'
import ArticleService from '../services/ArticleService';

class CreateArticleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            body: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.saveOrUpdateArticle = this.saveOrUpdateArticle.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ArticleService.getArticleById(this.state.id).then( (res) =>{
                let article = res.data;
                this.setState({title: article.title,
                    body: article.body
                });
            });
        }
    }
    saveOrUpdateArticle = (e) => {
        e.preventDefault();
        let article = {title: this.state.title, body: this.state.body};
        console.log('article => ' + JSON.stringify(article));

        // step 5
        if(this.state.id === '_add'){
            ArticleService.createArticle(article).then(res =>{
                this.props.history.push('/articles');
            });
        }else{
            ArticleService.updateArticle(article, this.state.id).then( res => {
                this.props.history.push('/articles');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Article</h3>
        }else{
            return <h3 className="text-center">Update Article</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
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
                                    <button className="btn btn-success" onClick={this.saveOrUpdateArticle}>Save</button>
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

export default CreateArticleComponent