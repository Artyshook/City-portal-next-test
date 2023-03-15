import { useRouter } from "next/router";
import Article, {ArticleData} from "./components/articles/Article";
import axios from "axios";

type ArticlePageProps = {
    articleData?: ArticleData['data'];
};

const ArticlePage = ({ articleData }: ArticlePageProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Article articles={articleData} />
        </div>
    );
};


export const getStaticPaths = async () => {
    let slugs: any[] = [];

    try {
        const response = await axios.get<ArticleData[]>('https://acecmsmock.z6.web.core.windows.net/api/content/web/3');
        slugs = response.data.map((article) => article.slug);
        console.log("slug:", slugs)
    } catch (error) {
        console.error(error);
    }

    const paths = slugs.map((slug) => ({ params: { slug } }));
    return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: any) => {
    let articleData;

    try {
        const response = await axios.get<ArticleData>(`https://acecmsmock.z6.web.core.windows.net/api/content/slug/${params.slug}?webId=3`);
        articleData = response.data.data;
    } catch (error) {
        console.error(error);
        return { notFound: true }; // return 404 status code
    }

    return { props: { articleData } };
};


export default ArticlePage;
