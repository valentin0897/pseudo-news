export class SettingsItem {
    id: number
    header_title: string
    is_active: boolean

    constructor(id: number, header_title: string, is_active: boolean){
        this.id = id
        this.header_title = header_title
        this.is_active = is_active
    }
}