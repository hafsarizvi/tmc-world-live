export interface Category {
  id: string;
  name: string;
  nameTamil: string;
  slug: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: "1", name: "Aqeedah", nameTamil: "அகீதா", slug: "aqeedah", icon: "🕌", description: "Islamic beliefs and articles of faith" },
  { id: "2", name: "Tafseer", nameTamil: "தஃப்சீர்", slug: "tafseer", icon: "📖", description: "Quranic explanation and commentary" },
  { id: "3", name: "Hadith", nameTamil: "ஹதீஸ்", slug: "hadith", icon: "📜", description: "Prophetic traditions and narrations" },
  { id: "4", name: "Seerah", nameTamil: "சீரா", slug: "seerah", icon: "⭐", description: "Biography of Prophet Muhammad ﷺ" },
  { id: "5", name: "Fiqh", nameTamil: "ஃபிக்ஹ்", slug: "fiqh", icon: "⚖️", description: "Islamic jurisprudence and rulings" },
  { id: "6", name: "Family Life", nameTamil: "குடும்ப வாழ்க்கை", slug: "family-life", icon: "🏠", description: "Marriage, parenting, and family values in Islam" },
  { id: "7", name: "Marriage", nameTamil: "திருமணம்", slug: "marriage", icon: "💍", description: "Islamic guidance on marriage and relationships" },
  { id: "8", name: "Women's Education", nameTamil: "பெண் கல்வி", slug: "womens-education", icon: "🌸", description: "Islamic knowledge and empowerment for women" },
  { id: "9", name: "Youth Development", nameTamil: "இளைஞர் வளர்ச்சி", slug: "youth-development", icon: "🌱", description: "Guidance and programs for Muslim youth" },
  { id: "10", name: "Islamic History", nameTamil: "இஸ்லாமிய வரலாறு", slug: "islamic-history", icon: "🏛️", description: "History of Islam and Muslim civilizations" },
];