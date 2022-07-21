import React, { Component } from 'react'
import ArticleService from '../services/ArticleService'

class ViewArticleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            article: {}
        }
    }

    componentDidMount(){
        ArticleService.getArticleById(this.state.id).then( res => {
            console.log('show_article---',res.data.data);
            this.setState({article: res.data.data});
        })
    }

    render() {
        return (
         <div>
            <br></br>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">View Article Details</h3>
                        <div className = "card-body">
                                <div className = "form-group">
                                    <label> Title: </label>
                                    <input placeholder="Title" name="title" className="form-control" value={this.state.article.title}/>
                                </div>
                                <div className = "form-group">
                                    <label> Body: </label>
                                    <input placeholder="Body" name="body" className="form-control" value={this.state.article.body}/>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default ViewArticleComponent