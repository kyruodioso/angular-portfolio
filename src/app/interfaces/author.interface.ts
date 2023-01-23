
export interface Author {
    _id:                   string;
    description:            string;
    image:                 Image;
    link:                  null;
    name:                  string;
    slug:                  Slug;
    technology:            string[];
    technology_in_process: string[];
}



export interface Image {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref:  string;
    _type: string;
}

export interface Slug {
    _type:   string;
    current: string;
}
