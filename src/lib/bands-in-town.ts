export type BandsInTownEvent = {
  offers: {
    type: string;
    url: string;
    status: string;
  }[];
  venue: {
    street_address: string;
    country: string;
    city: string;
    latitude: string;
    name: string;
    location: string;
    postal_code: string;
    region: string;
    longitude: string;
  };
  starts_at: string;
  artist: {
    thumb_url: string;
    mbid: string;
    facebook_page_url: string;
    image_url: string;
    tracker_count: number;
    tracking: unknown[];
    upcoming_event_count: number;
    url: string;
    support_url: string;
    show_multi_ticket: boolean;
    name: string;
    options: {
      display_listen_unit: boolean;
    };
    links: {
      type: string;
      url: string;
    }[];
    artist_optin_show_phone_number: boolean;
    id: string;
  };
  festival_datetime_display_rule: string;
  description: string;
  lineup: string[];
  festival_start_date: string;
  bandsintown_plus: boolean;
  title: string;
  artist_id: string;
  presale: string;
  url: string;
  datetime_display_rule: string;
  datetime: string;
  on_sale_datetime: string;
  sold_out: boolean;
  id: string;
  ends_at: string;
  free: boolean;
  festival_end_date: string;
};
