export class NewsItem {
    id: number
    title: string
    img_url: string
    pub_time: string
    text: string
    short_description: string
    is_outer_link: boolean
    outer_link: string

    tag_id: number

    constructor(
            id: number,
            title: string,
            img_url: string,
            pub_time: string,
            text: string,
            short_description: string,
            is_outer_link: boolean,
            outer_link: string,
            tag_id: number){

        this.id = id
        this.title = title
        this.img_url = img_url
        this.pub_time = pub_time
        this.short_description = short_description 
        this.is_outer_link = is_outer_link
        this.outer_link = outer_link
        this.text = text

        this.tag_id = tag_id
    }
}