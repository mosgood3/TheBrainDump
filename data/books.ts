export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  amazon_url: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Books data for frontend display