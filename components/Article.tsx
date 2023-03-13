import React from 'react';

export interface ArticleData {
    id: number;
    name: string;
    slug: string;
    locale: string;
    publishDate: string;
    web: {
        id: number;
    };
    data: {
        perex: string;
        image: string;
        content: string;
    };
}

type ArticleProps = {
    articles?: ArticleData['data'];
};

const Article = ({ articles }: ArticleProps) => {
    return (
        <div>
            {articles && (
                <>
                    <div>{articles.perex && <p>{articles.perex}</p>}</div>
                    {articles.content && <p><div dangerouslySetInnerHTML={{__html: articles.content}} ></div></p>}
                    {articles.image && <img src={articles.image} alt="Article" />}
                </>
            )}
        </div>
    );
};

export default Article;