export class NewsItem {
    id: number
    title: string
    img_url: string
    pub_time: string
    text: string
    short_description: string
    is_external_link: boolean
    external_link: string

    constructor(
            id: number = 0,
            title: string = "",
            img_url: string = "",
            pub_time: string = "",
            text: string = "",
            short_description: string = "",
            is_external_link: boolean = false,
            external_link: string = ""){

        this.id = id
        this.title = title
        this.img_url = img_url
        this.pub_time = pub_time
        this.short_description = short_description 
        this.is_external_link = is_external_link
        this.external_link = external_link
        this.text = text
    }
}