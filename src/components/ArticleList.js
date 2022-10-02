import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
    const articleElements = posts.map(element => <Article key={element.id} title={element.title} preview={element.preview} date={element.date} minutes={element.minutes} />)

    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList