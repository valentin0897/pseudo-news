export class NewsItem {
    title: string
    imgUrl: string
    published: string
    refUrl: string

    constructor(title: string, imgUrl: string, published: string, refUrl: string){
        this.title = title
        this.imgUrl = imgUrl
        this.published = published
        this.refUrl = refUrl
    }
}