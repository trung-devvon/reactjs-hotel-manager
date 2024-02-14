import { IoBedOutline } from 'react-icons/io5'
import { MdOutlineAttractions, MdOutlineHotel, MdTravelExplore } from 'react-icons/md'
import { pathAdmin, pathUser } from './path'
import { BsCarFront } from 'react-icons/bs'
import { GoPlusCircle, GoTasklist } from 'react-icons/go'
import { AiOutlineDashboard } from 'react-icons/ai'
import { PiUsersThree } from 'react-icons/pi'
export const menuCategories = [
  {
    id: 1,
    name: 'Lưu trú',
    icon: <IoBedOutline size={23} />,
    path: pathUser.HOME,
    header: 'Vi vu theo cách của bạn',
    subHeader: 'Tiết kiệm ít nhất 15% cho lưu trú toàn cầu, từ nghỉ dưỡng đến phiêu lưu hoang dã'
  },
  {
    id: 2,
    name: 'Chuyến bay & khách sạn',
    icon: <MdTravelExplore size={23} />,
    path: pathUser.CATEGORIES.FLIGHT,
    header: 'Toàn bộ kỳ nghỉ trong một cú bấm chuột!',
    subHeader: 'Đặt chuyến bay + khách sạn'
  },
  {
    id: 3,
    name: 'Thuê xe',
    icon: <BsCarFront size={23} />,
    path: pathUser.CATEGORIES.CAR_RENTAL,
    header: 'Thuê ô tô cho bất cứ chuyến đi nào',
    subHeader: 'Ưu đãi tốt, giá hấp dẫn từ các công ty cho thuê xe lớn nhất'
  },
  {
    id: 4,
    name: 'Địa điểm tham quan',
    icon: <MdOutlineAttractions size={24} />,
    path: pathUser.CATEGORIES.ATTRACTION,
    header: 'Đặt các địa điểm tham quan hàng đầu với Ưu Đãi Mùa Du Lịch',
    subHeader: 'Tiết kiệm hơn khi đặt tour, trải nghiệm và các điểm tham quan hàng đầu với Ưu Đãi Mùa Du Lịch.'
  }
]
export const appRole = {
  admin: '1945',
  member: '1954',
  user: '1979'
}
export const menuAdmin = [
  {
    id: 1,
    name: 'Thống kê',
    path: pathAdmin.DASHBOARD,
    icon: <AiOutlineDashboard size={20} />,
    type: 'SINGLE'
  },
  {
    id: 2,
    name: 'Quản lý thành viên',
    path: pathAdmin.MANAGE_MEMBER,
    icon: <PiUsersThree size={20} />,
    type: 'SINGLE'
  },
  {
    id: 3,
    name: 'Địa điểm tham quan',
    icon: <MdOutlineAttractions size={20} />,
    type: 'PARENT',
    subs: [
      {
        id: 1,
        path: pathAdmin.MANAGE_DESTINATION,
        name: 'Quản lý',
        icon: <GoTasklist />
      },
      {
        id: 2,
        path: pathAdmin.CREATE_DESTINATION,
        name: 'Thêm mới',
        icon: <GoPlusCircle />
      }
    ]
  },
  {
    id: 4,
    name: 'Khách sạn / chỗ ở',
    icon: <MdOutlineHotel size={20} />,
    type: 'PARENT',
    subs: [
      {
        id: 1,
        path: pathAdmin.MANAGE_HOTEL,
        name: 'Quản lý',
        icon: <GoTasklist />
      },
      {
        id: 2,
        path: pathAdmin.CREATE_HOTEL,
        name: 'Thêm mới',
        icon: <GoPlusCircle />
      }
    ]
  }
]
export const hotelTypes = [
  'Khách sạn',
  'Căn hộ',
  'Resort',
  'Biệt thự',
  'Nhà gỗ',
  'Nhà nghỉ thôn dã',
  'Glamping',
  'Nhà trọ',
  'Chỗ nghỉ nhà dân',
  'Khu cắm trại'
]
