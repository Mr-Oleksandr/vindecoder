export interface IArticle {
    id: number
    title: string
    imageUrl: string
    summary: string
    updatedAt: string
}

export type ArticleQueryParams = {

    _limit: number;
    title_contains: string;
    summary_contains: string;
};