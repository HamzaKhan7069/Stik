import { Game, Installment, Activity, WishlistItem } from '../types';

export const GAMES: Game[] = [
  {
    id: 're9-requiem',
    title: 'RE9 Requiem',
    description: 'Descend into the final chapter of the Requiem saga. Experience survival horror reimagined with hyper-realistic visuals and immersive soundscapes.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX1y3zKSN4gFKVxX7yDMlgyXcl3mp_-o2gpb6pmHmDY242rcgKas2jqE_aBIjt1hCl2t3_nRWVtH-Zt5iDpJs2EBywhMq_77YTf8Xg_GUZImemuTLKtv5kJD5zwrsCCVrKBWgho4ZvFyaywYpvquwX2XyeqTa8f84bHmUgDwIi9iX7tRm86YG7YKpc4Elr2Cpw-0YALkM4-7Ok5BILtB_NC9tcjTTSyZnpMIAF9JAYWxWM8fJlOfCbtn_Uf-Xf24xqVELOi2RGioQi',
    screenshots: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1k2iLT4kle9ZUbH5QQG8aMiGTOVaj6E9aGzVqi0bV0myXWqUjBMlefNqSTS8HJ6C4TT7jiGcNRKaHUxSJs7naIeSqIj-s2m5-WvJUQnrt4pZJOf__35uzFNyHMerbp2UxpEOlnUykieWQyuHGs4TxGhfrxYXbM-RmnMj4dYKZdQdQYNd-2s83BIC832QBnJFrnifUULx4gfeSYZLt-3EM5DQ63GcPRmZICUoui51SyrDcrcTTcsUXKsHrciVSAjzfIwWjzH7eciTF',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhNjXZJ6DL-TcpOkYMm7_N93fzVngFiQ0zaEF4qwjWXGD4x1m6geWMV42EOem2PW7Fg8QFy3l4uFM_VX73YfHny5QTKPOD4D169WOdMBw1uwYL4lq4bDLghDHiq_WqwX98rRuPz8PeIh1hlq0NjW8pRLYMQPoLWaCh2YCB0bnB1jz7x1p4_kxtVf78cDUfhG5n6l3_bMcMkR7UntlDb2rfOwmEpzTmBDj8NpvLfCK2YRMXBy-298tUzgSXj4zjncNDMgbICc91199S',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwnyv-9ILpU0wVyWIrUrY1tnPIcrqczuV6db7eQN7dr0dG19FD-VUDHA_L8mb8mqPgi64nAqKB5z33IHyPwM-vDYUSN9OAUTSOeRdDSanw8RkDuzcH_BI1y26eZitogfxRTy6OIoTJ-g_GJSX7CQPufDVZIhQuYwWWvS8zSU8IYkXYUny5vMwo9lz0GV-NLs57hMWWs5W5jWV61SX0WN127M5Lo8WWCW_64HxQC8QKHCRxdg-SJawxuyg6nB99b2_YcXdneuroHCbK'
    ],
    price: 59.99,
    emiStartsAt: 6.25,
    genre: ['Action', 'Horror'],
    releaseDate: 'Nov 12, 2024',
    developer: 'Stik Studios',
    publisher: 'Stik Interactive',
    rating: 'M',
    systemRequirements: {
      minimum: ['OS: Windows 10 64-bit', 'Processor: Intel Core i5-8400', 'Memory: 12 GB RAM', 'Graphics: NVIDIA GTX 1070'],
      recommended: ['OS: Windows 11 64-bit', 'Processor: Intel Core i7-12700K', 'Memory: 32 GB RAM', 'Graphics: NVIDIA RTX 3080']
    }
  },
  {
    id: 'gta-v',
    title: 'GTA 5: Premium Edition',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVbGlj91hUzhLCwRU4lBAYjVzKgo_5pjmoHH2PupldlfM2ksRJh2IUWjaXAX3TUG_UmShIvavdlUwOgnyojXhLSCMdqc3qcH4-N76xdDF2zdpOC_L87dakuS-NXb06sQYP5HvGNa4im9Vw0_mgyFziAhmeuERO6djMDkJf5vhlsPfs88F6mI1okYG3iP9KdzU9Qj1-83un6jCh7CzFRq-21IgjWefmkYRzpCV4cPLDD1I8vcxbuEmYWJIWnI5S5LnuLH8XiC23Rc0P',
    screenshots: [],
    price: 29.99,
    emiStartsAt: 4.99,
    genre: ['Open World', 'Action'],
    releaseDate: 'Apr 14, 2015',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    rating: 'M',
    isPopular: true,
    systemRequirements: {
      minimum: ['Intel Core 2 Quad CPU Q6600 @ 2.40GHz', '4GB RAM', 'NVIDIA 9800 GT 1GB'],
      recommended: ['Intel Core i5 3470 @ 3.2GHz', '8GB RAM', 'NVIDIA GTX 660 2GB']
    }
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    description: 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhMir23IRTBNgOg70LWVMehiNiq0d9l_oC4LLeT7JvGhT0ODBrtG4bVtFUODcRD4wkc_Awrt0c8Lu4GJZsB1Y26F9sYEQ2NuAp2DAiQgZPWL8pWfBfq4bagGFuIDVt3Qi26xAt5nUn5GQJ8LW81eLzTdRTrY1SfZWUq5m353BmEXMAyEw8SLks1nmfGX4WZ-UH9tGK-3uPIvcCfU-VBN0o82cYU-WjYWw0KXdN2V7uTBozb7rzCwAIZ5A8j8PgiH919rDmxQf9TR3Y',
    screenshots: [],
    price: 59.99,
    emiStartsAt: 7.50,
    genre: ['Adventure', 'RPG'],
    releaseDate: 'Oct 26, 2018',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    rating: 'M',
    systemRequirements: {
      minimum: ['Intel Core i5-2500K', '8GB RAM', 'NVIDIA GTX 770 2GB'],
      recommended: ['Intel Core i7-4770K', '12GB RAM', 'NVIDIA GTX 1060 6GB']
    }
  },
  {
    id: 'cod-mw3',
    title: 'Call of Duty: MW3',
    description: 'In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK9UdSWB6KuZ62eyX5H_MCeEjb7aYLMp0xZtT2D39wf8n1GR9pRNEBOpKXppr4bl40iIf3hkZSPrT0RDNTt6MSfSDeT76L6KeoQvEcNyKc7ylG_xX3vR8IVPTVmT6hgIy0TgURimbAVE54uvp828eY_bvF6Se4p66zl2rgoPbGWdhXprMXltd2n1dn7OZG8z9s3PZnpYW53F-l8YdswnRvTrsNu3g2Cpl9LL1e7fvGzjZvI-wzQkR-h0IHstgyTWEtqqS4i91K3ml6',
    screenshots: [],
    price: 69.99,
    emiStartsAt: 9.99,
    genre: ['FPS', 'Tactical'],
    releaseDate: 'Nov 10, 2023',
    developer: 'Sledgehammer Games',
    publisher: 'Activision',
    rating: 'M',
    systemRequirements: {
      minimum: ['Intel Core i5-6600', '8GB RAM', 'NVIDIA GTX 960'],
      recommended: ['Intel Core i7-6700K', '16GB RAM', 'NVIDIA GTX 1080']
    }
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD309w_y6Ljl0AJZ437a9IbnCXmgXnJuRf3MOr9Ys0hjgFIwavUxDfeZi8k6jU3MdUzS6p2qrII3wOfn0we6OtGzqY8LEr8ZkHKNu7srXZ-FTk4IhCyJl0kK8BtRfpacPNNekzrVW3HBip92VmDgWHcxS7i4w81bhfHNjO478phUzuTO34WizGVFFFfENIO0oS0Ipmlpr1isDJmlq5Za6sepAo2t_XrcStkXkiXwCc9tcUYPJvv-Y2L9SvY29svyV7_BhJqcbRYITrz',
    screenshots: [],
    price: 59.99,
    emiStartsAt: 8.25,
    genre: ['RPG', 'Fantasy'],
    releaseDate: 'Feb 25, 2022',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    rating: 'M',
    systemRequirements: {
      minimum: ['Intel Core i5-8400', '12GB RAM', 'NVIDIA GTX 1060 3GB'],
      recommended: ['Intel Core i7-8700K', '16GB RAM', 'NVIDIA GTX 1070 8GB']
    }
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvTqrT7yqYzE17eoCFmAOelD5Ku60mgpkgSCEsk4D4p1UV-LwfP_um4Mr92f5B9-g_yZcMiStwk62yBPm2EJKyBoDOIkjA7fJ2GeSgbRGqxNhQ2Xm0PZPA8LDhiRXlmF-uXS0MDnbTIHlqjTdQk4eoI_khH1L2yFeet5nH8IF1X_gQPh5VLhIaqPotlJ6onlyxKR8Tnr8Bo_wGgFM0-l6MT8S3spzoE4t4vaKwnheK1GfcIbFBkkBb6PEdLZyH-h1fw5PC26PzDnRC',
    screenshots: [],
    price: 59.99,
    emiStartsAt: 6.99,
    genre: ['Action', 'Sci-Fi'],
    releaseDate: 'Dec 10, 2020',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    rating: 'M',
    systemRequirements: {
      minimum: ['Intel Core i5-3570K', '8GB RAM', 'NVIDIA GTX 780 3GB'],
      recommended: ['Intel Core i7-4790', '12GB RAM', 'NVIDIA GTX 1060 6GB']
    }
  },
  {
    id: 'forza-5',
    title: 'Forza Horizon 5',
    description: 'Your ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR-Z0KCwLHp4C83vS8_o348VukjJj4MDPP566-9RcPEO82niOPv44LYa3pxmSrJa5SjSAxytxxXjpshrytPw08FkSDtZiq1kp7XBqh-B2zQq0RC4ElB8x4umgweKD-IYMuB09j8rm13bDg1wCBEnrE3LfdZNDUHl0MtjMbfeGHqEY807fmq6p_bbHlxLctyD4OjICC8OHL_Gml12FgSGTguQ215stzQ2EC9nIGCPvsi42a0hetlEEYede9skdJyNvbEgbwKN8O8fbJ',
    screenshots: [],
    price: 59.99,
    emiStartsAt: 5.50,
    genre: ['Racing', 'Sports'],
    releaseDate: 'Nov 9, 2021',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    rating: 'E',
    systemRequirements: {
      minimum: ['Intel i5-4460', '8GB RAM', 'NVidia GTX 760'],
      recommended: ['Intel i5-8400', '16GB RAM', 'NVidia GTX 1070']
    }
  }
];

export const INSTALLMENTS: Installment[] = [
  {
    id: 'inst-1',
    gameId: 'cyberpunk-2077',
    gameTitle: 'Cybervoid 2099',
    totalAmount: 179.88,
    monthlyAmount: 14.99,
    paidInstallments: 9,
    totalInstallments: 12,
    nextDueDate: 'Nov 14, 2024',
    status: 'active'
  },
  {
    id: 'inst-2',
    gameId: 'elden-ring',
    gameTitle: 'Elden Throne',
    totalAmount: 239.88,
    monthlyAmount: 19.99,
    paidInstallments: 4,
    totalInstallments: 12,
    nextDueDate: 'Nov 28, 2024',
    status: 'active'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    type: 'payment',
    title: 'Installment Paid',
    timestamp: 'Nov 01',
    details: 'Cybervoid 2099'
  },
  {
    id: 'act-2',
    type: 'wishlist',
    title: 'New Wishlist Item',
    timestamp: 'Oct 28',
    details: 'Starfield Legacy'
  },
  {
    id: 'act-3',
    type: 'sync',
    title: 'Steam Library Synced',
    timestamp: 'Oct 25',
    details: '142 Games found'
  },
  {
    id: 'act-4',
    type: 'login',
    title: 'Login Verified',
    timestamp: 'Oct 24',
    details: 'New device: PC-Main'
  }
];

export const WISHLIST: WishlistItem[] = [
  {
    id: 'starfield',
    title: 'Starfield Legacy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxuwZnqtTHGcTlc0q1PRqg8B5sLds4842FXSxRwpePDyvvXP_bM_KTIpL9IVCrBoZYhnvcm3GvagGa0Uh783OIz1BJKn7r8GFaY6bvb3SitVDxaRxbBtGmgFjHZiWS0HLMj-Cw1rkUxjE9_s7UJlH6czkhxnZs1yiBrgcdlSkD6-mGFjxje3-XQ1kjNIlB5_qW30yRujehf8shE_0GwL88tgQK3cmxyqHbli_DH5rPmBDnHFab7FF-m9l_yrzk9xfS54twYYkFJNTn',
    price: 69.99,
    monthlyPrice: 5.83
  },
  {
    id: 'ghost-runner',
    title: 'Ghost Runner II',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKzSx8isUuQLSgsolSOyIynOW_TFHDYOeIxhVUuqNc89uSWQ5sKblgRfNzjMeuuEo0MscaDDKASEkzzBDGPuw7010i73gOjXEc9MolDwgkg-y5lT97Egw8wIihbfusmRyJQacUO-Ksg_wZ9YvMEQCqCw8VXccfEa0llPS0lBMDDGaO2t6qpZ0hV1A6CQ3TsmUMEcNeSgzZ94ttTTZJfwWpZYeM3cwTb-yMuntfO08UE0JfEijJcf0ck-xgKuO6JWtaYE7FAWQeAUqL',
    price: 39.99,
    monthlyPrice: 3.33
  },
  {
    id: 'void-walker',
    title: 'Void Walker',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-7SS2Qa_ytY_7eBbBPxK4IDqN0vaL6DVm0LLebByGiNdKjybuNzWXFvOhkMEKJQ-5H2TGmLmn08KUGOe4QQBGqUTXw41RliKR2W-fZZT75YEfwTiIjbGJKSpXfCmaJ4w49pbqu6JYgIG_8hOUx50qaCXkc5p2zJ49jmjjCC5eh4SsB5X_ZQTNOlUVYbeHhu3UF3GciVexImGwA2YbX8A5PWzudL67PmHuiPCggd3cd0_ewdUJFGT_Ek4rh6TVTtpOUkuCA8WgH41v',
    price: 59.99,
    monthlyPrice: 4.99
  }
];
