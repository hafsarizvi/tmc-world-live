export interface Scholar {
  id: string;
  slug: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  biography: string;
  qualifications: string[];
  expertise: string[];
  socialLinks: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const scholars: Scholar[] = [
  {
    id: "1",
    slug: "mujahid-ibnu-razeen",
    name: "Mujahid Ibnu Razeen",
    designation: "Islamic Scholar, Da'ee, Author & Director of Dharul Hudha Ladies College",
    description:
      "A respected Islamic scholar known for his extensive work in Aqeedah, Tafseer, Seerah, Islamic Civilization, and family guidance, serving Tamil-speaking audiences worldwide.",
    image: "/assets/lecturers/mujahid-ibnu-razeen.jpg",
    biography:
      "Mujahid Ibnu Razeen has dedicated his life to the service of Islamic knowledge and education. With advanced academic qualifications in Islamic studies, he has been a guiding voice for Tamil-speaking Muslim communities both in Sri Lanka and internationally. He leads Dharul Hudha Ladies College and continues to deliver impactful lectures on core Islamic sciences.",
    qualifications: [
      "Advanced Diploma in Islamic Studies",
      "Specialization in Aqeedah and Tafseer",
    ],
    expertise: ["Aqeedah", "Tafseer", "Seerah", "Islamic Civilization", "Family Guidance"],
    socialLinks: {},
  },
  {
    id: "2",
    slug: "adil-hassan",
    name: "Ash Sheikh Adil Hassan",
    designation: "Islamic Scholar & Religious Educator",
    description:
      "Actively contributes to Islamic education and community outreach through lectures and guidance on jurisprudence and contemporary issues affecting Muslim communities.",
    image: "/assets/lecturers/adil-hassan.jpg",
    biography:
      "Ash Sheikh Adil Hassan has been a consistent voice in Islamic education, offering clarity on matters of faith, jurisprudence, and daily Islamic practice. His community-centered approach has made him a trusted figure among Tamil-speaking Muslims.",
    qualifications: ["Islamic Studies Graduate", "Specialization in Fiqh"],
    expertise: ["Islamic Jurisprudence", "Community Outreach", "Islamic Lifestyle"],
    socialLinks: {},
  },
  {
    id: "3",
    slug: "mufaris-rashadi",
    name: "Sheikh Al Hafil Mufaris Thajudeen Rashadi",
    designation: "Islamic Scholar, Hadith Specialist & Author",
    description:
      "Specializes in Ulum al-Hadith, Islamic Jurisprudence, and Comparative Religion, recognized for scholarly lectures and authorship in the field of Hadith Sciences.",
    image: "/assets/lecturers/mufaris-rashadi.jpg",
    biography:
      "Sheikh Mufaris Rashadi is a hafiz of the Quran and a recognized authority in Hadith Sciences. His scholarly works and lectures have been widely appreciated across Sri Lanka and beyond. He brings academic depth and clarity to complex subjects in Islamic scholarship.",
    qualifications: [
      "Hafiz of the Holy Quran",
      "Specialization in Ulum al-Hadith",
      "Advanced studies in Comparative Religion",
    ],
    expertise: ["Ulum al-Hadith", "Islamic Jurisprudence", "Comparative Religion"],
    socialLinks: {},
  },
  {
    id: "4",
    slug: "niyas-siddeek-siraji",
    name: "Moulavi Niyas Siddeek Siraji",
    designation: "Islamic Scholar, Lecturer & Community Educator",
    description:
      "Engaged in religious education, community development, and Islamic awareness programs with a focus on practical guidance, spirituality, and social responsibility.",
    image: "/assets/lecturers/niyas-siddeek-siraji.jpg",
    biography:
      "Moulavi Niyas Siddeek Siraji is known for his accessible and practical approach to Islamic education. He works closely with communities to address real-world challenges through an Islamic lens, emphasizing spiritual development and social responsibility.",
    qualifications: ["Islamic Studies", "Community Education Training"],
    expertise: ["Spirituality", "Social Responsibility", "Youth Development", "Practical Fiqh"],
    socialLinks: {},
  },
];