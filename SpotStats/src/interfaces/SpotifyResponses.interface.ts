export interface UserInfo {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  type: string;
  uri: string;
  followers: {
    href: null;
    total: number;
  };
  country: string;
  product: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  email: string;
}

export interface TopArtists {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: null;
        total: number;
      };
      genres: string[];
      href: string;
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
      popularity: number;
      type: string;
      uri: string;
}
