
export interface Project {
    _id:         string;
    date:        Date;
    description: string;
    link:        string;
    mainImage:   MainImage;
    place:       string;
    tags:        string[];
    title:       string;
}

export interface MainImage {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref:  string;
    _type: string;
}