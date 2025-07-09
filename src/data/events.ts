export type Event = {
  id: number;
  name: string;
  date: string;
  description: string;
  imageUrl: string;
  facebookLink: string;
  registrationLink?: string;
  isUpcoming: boolean;
};

export const events: Event[] = [
  {
    id: 1,
    name: 'Ngày hội văn hóa Nhật Bản',
    date: '2024-09-15',
    description: 'Trải nghiệm các hoạt động văn hóa truyền thống như trà đạo, thư pháp, và các trò chơi dân gian Nhật Bản.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    registrationLink: '#',
    isUpcoming: true,
  },
  {
    id: 2,
    name: 'Workshop làm Teru Teru Bozu',
    date: '2024-08-20',
    description: 'Cùng nhau tự tay làm những chú búp bê cầu thời tiết nắng Teru Teru Bozu đáng yêu và tìm hiểu về ý nghĩa của chúng.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    registrationLink: '#',
    isUpcoming: true,
  },
  {
    id: 3,
    name: 'Workshop làm chuông gió',
    date: '2024-07-07',
    description: 'Tạo ra những chiếc chuông gió xinh xắn, mang lại âm thanh trong trẻo và may m',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    isUpcoming: false,
  },
 
];
