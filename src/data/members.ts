import exampleImg from '@/assets/member/anhchandung.jpg';
import type { StaticImageData } from 'next/image';

export type Member = {
  id: number;
  name: string;
  phone: string;
  ID: string;
  email: string;
  generation: string;
  department: 'Ban Truyền Thông' | 'Ban Đối Ngoại' | 'Ban Chuyên Môn' | 'Ban Tổ Chức Sự Kiện';
  imageUrl: string | StaticImageData;
  isLeader: boolean;
  isPresident: boolean;
};

export const members: Member[] = [
  { id: 1, name: 'Đặng Minh Tuấn', phone: '0788778027', ID:'2213765', email:'tuan.dangminh372004@hcmut.edu.vn', generation: 'F10', department: 'Ban Truyền Thông', imageUrl: 'https://raw.githubusercontent.com/dang-tuan-3724/Fuji-assets/refs/heads/main/anhchandung.jpg', isLeader: false, isPresident: false },
  { id: 22, name: 'Hoàng Đình Anh Trung', phone: '0972345807', ID:'2213683', email:'trung.hoang796@hcmut.edu.vn', generation: 'F10', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: true },
  { id: 2, name: 'Nguyễn Thị Thanh Nhàn', phone: '0934497069', ID:'2356190049', email:'2356190049@hcmussh.edu.vn', generation: 'F10', department: 'Ban Đối Ngoại', imageUrl: 'https://placehold.co/200x200.png', isLeader: true, isPresident: false },
  { id: 3, name: 'Trần Hà Nam', phone: '0979943887', ID:'2212160', email:'tranhanamptag2004@gmail.com', generation: 'F10', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: true, isPresident: false },
  { id: 4, name: 'Nguyễn Thị Ngọc Yến', phone: '0911967401', ID:'2356190122', email:'ngthngocyen015@gmail.com', generation: 'F10', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: true, isPresident: false },
  { id: 5, name: 'Trần Chí Linh', phone: '0333254872', ID:'22311873', email:'linh.tranhotaru@hcmut.edu.vn', generation: 'F10', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: true, isPresident: false },
  { id: 6, name: 'Nguyễn Trọng Khang Nghĩa', phone: '0915777934', ID:'2212233', email:'nghia.nguyenbk071004@hcmut.edu.vn', generation: 'F10', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 7, name: 'Nguyễn Nhân Nghị', phone: '0353943156', ID:'2312295', email:'nghi.nguyen2295bktdh@hcmut.edu.vn', generation: 'F10', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 8, name: 'Hà Thiên Bình', phone: '0989268506', ID:'2310294', email:'binh.hathien1085@hcmut.edu.vn', generation: 'F10', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 9, name: 'Ngô Nguyễn Diễm Trinh', phone: '0352411844', ID:'2313575', email:'trinh.ngo3010@hcmut.edu.vn', generation: 'F11', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 10, name: 'Lê Quỳnh Hương', phone: '0779682319', ID:'2411396', email:'huong.le1903@hcmut.edu.vn', generation: 'F11', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 11, name: 'Ngô Thị Thảo Uyên', phone: '0947566935', ID:'2356040111', email:'2356040111@hcmussh.edu.vn', generation: 'F11', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 12, name: 'Đỗ Phú Hiến', phone: '0869786625', ID:'2210974', email:'hien.dok22bk@hcmut.edu.vn', generation: 'F10', department: 'Ban Tổ Chức Sự Kiện', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 13, name: 'Phùng Thị Ngọc Trâm', phone: '0792155850', ID:'2456190094', email:'2456190094@hcmussh.edu.vn', generation: 'F11', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 14, name: 'Phan Quang Duy', phone: '0902830649', ID:'2110935', email:'duy.phansvbk@hcmut.edu.vn', generation: 'F10', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 15, name: 'Nguyễn Ngọc Phát', phone: '0772403140', ID:'2412589', email:'phat.nguyen081206@hcmut.edu.vn', generation: 'F11', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 16, name: 'Nguyễn Thành Danh', phone: '0903172132', ID:'2052417', email:'ntdanh1507@gmail.com', generation: 'F11', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 17, name: 'Nguyễn Gia Bảo', phone: '0969092247', ID:'2452127', email:'bao.nguyengia@hcmut.edu.vn', generation: 'F11', department: 'Ban Chuyên Môn', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 18, name: 'Hồ Thị Thủy Tiên', phone: '0357074062', ID:'2457010211', email:'2457010211@hcmussh.edu.vn', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 19, name: 'Nguyễn Vĩnh Tường', phone: '0886726745', ID:'2413895', email:'Tuong.nguyenvinh1201@hcmut.edu.vn', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 20, name: 'Tiến Nguyễn Nguyệt Minh', phone: '0916818841', ID:'2312114', email:'minh.tiennguyen121@hcmut.edu.vn', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 21, name: 'Trần Thị Xuân Mai', phone: '0947604323', ID:'2312023', email:'mai.tranmaitran23@hcmut.edu.vn', generation: 'F10', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false },
  { id: 23, name: 'Nguyễn Đăng Phương Nam', phone: '0931252300', ID:'2312170', email:'nam.nguyen230405@hcmut.edu.vn', generation: 'F11', department: 'Ban Truyền Thông', imageUrl: 'https://placehold.co/200x200.png', isLeader: false, isPresident: false }
];