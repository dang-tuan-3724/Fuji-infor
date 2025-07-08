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
    name: 'Lễ hội Tanabata',
    date: '2024-07-07',
    description: 'Viết những điều ước lên giấy Tanzaku và treo lên cành tre, tham gia các hoạt động trong lễ Thất Tịch.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    isUpcoming: false,
  },
  {
    id: 4,
    name: 'Cuộc thi hùng biện tiếng Nhật',
    date: '2024-05-30',
    description: 'Sân chơi bổ ích cho các bạn sinh viên thể hiện khả năng tiếng Nhật và tranh tài hùng biện.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    isUpcoming: false,
  },
  {
    id: 5,
    name: 'Chiếu phim anime ngoài trời',
    date: '2024-04-12',
    description: 'Thưởng thức những bộ phim anime kinh điển dưới bầu trời sao cùng bạn bè.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    isUpcoming: false,
  },
  {
    id: 6,
    name: 'Lớp học nấu ăn: Mochi',
    date: '2024-03-02',
    description: 'Học cách làm bánh mochi dẻo thơm, một món bánh truyền thống không thể thiếu trong các dịp lễ của Nhật Bản.',
    imageUrl: 'https://placehold.co/400x250.png',
    facebookLink: '#',
    isUpcoming: false,
  },
];
