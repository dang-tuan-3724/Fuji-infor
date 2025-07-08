export type Member = {
  id: number;
  name: string;
  generation: string;
  department: 'Ban Chủ Nhiệm' | 'Ban Truyền Thông' | 'Ban Đối Ngoại' | 'Ban Chuyên Môn';
  imageUrl: string;
};

export const members: Member[] = [
  { id: 1, name: 'Nguyễn Văn An', generation: 'F10', department: 'Ban Chủ Nhiệm', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 2, name: 'Trần Thị Bình', generation: 'F10', department: 'Ban Chủ Nhiệm', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 3, name: 'Lê Hoàng Cường', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 4, name: 'Phạm Thị Dung', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 5, name: 'Võ Minh Kha', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 6, name: 'Đỗ Gia Hân', generation: 'F12', department: 'Ban Đối Ngoại', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 7, name: 'Hoàng Thị Yến', generation: 'F12', department: 'Ban Đối Ngoại', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 8, name: 'Bùi Quang Minh', generation: 'F12', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 9, name: 'Đặng Thùy Linh', generation: 'F12', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 10, name: 'Ngô Bảo Châu', generation: 'F12', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 11, name: 'Trịnh Hoài Nam', generation: 'F10', department: 'Ban Chủ Nhiệm', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 12, name: 'Mai Anh Tuấn', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 13, name: 'Hồ Thị Kim Oanh', generation: 'F12', department: 'Ban Đối Ngoại', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 14, name: 'Lý Thanh Thảo', generation: 'F12', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png' },
  { id: 15, name: 'Dương Minh Nhật', generation: 'F12', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png' },
];
