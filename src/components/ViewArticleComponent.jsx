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
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Article Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Title: </label>
                            <div> { this.state.article.title }</div>
                        </div>
                        <div className = "row">
                            <label> Body: </label>
                            <div> { this.state.article.body }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewArticleComponent