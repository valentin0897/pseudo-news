export class NewsItem {
    id: number
    title: string
    imgUrl: string
    published: string
    text: string
    tag: string

    constructor(id: number, title: string, imgUrl: string, published: string, text: string, tag: string){
        this.id = id
        this.title = title
        this.imgUrl = imgUrl
        this.published = published
        this.text = text
        this.tag = tag
    }
}