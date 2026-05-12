export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  screenshots: string[];
  price: number;
  emiStartsAt: number;
  genre: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  rating: string;
  isPopular?: boolean;
  systemRequirements: {
    minimum: string[];
    recommended: string[];
  };
}

export interface Installment {
  id: string;
  gameId: string;
  gameTitle: string;
  totalAmount: number;
  monthlyAmount: number;
  paidInstallments: number;
  totalInstallments: number;
  nextDueDate: string;
  status: 'active' | 'completed' | 'overdue';
}

export interface Activity {
  id: string;
  type: 'payment' | 'wishlist' | 'sync' | 'login';
  title: string;
  timestamp: string;
  details: string;
}

export interface WishlistItem {
  id: string;
  title: string;
  image: string;
  price: number;
  monthlyPrice: number;
}
