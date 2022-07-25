export type GalleryFilters = {
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time' | 'rising';
  window: 'day' | 'week' | 'month' | 'year' | 'all';
  page: number;
  showViral?: boolean;
};
