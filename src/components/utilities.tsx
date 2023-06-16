import cardIcon1 from '../assets/card_icon-1.png';
import cardIcon2 from '../assets/card_icon-2.png';
import cardIcon3 from '../assets/card_icon-3.png';
import cardIcon4 from '../assets/card_icon-4.png';

const baseApi = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

export const forbiddenPaths = ['/login', '/'];

type Status = {
  class: string;
  text: string;
};

export interface IUser {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: any[string];
  guarantor: any[string];
  accountBalance: string;
  accountNumber: string;
  socials: any;
  education: any;
  id: number;
}

export type DataProps = {
  data: IUser[];
};

const fetchAllUsers = async (url: string): Promise<Array<IUser>> => {
  const response = await fetch(url);
  const data = await response.json();
  localStorage.setItem('usersData', JSON.stringify(data));
  return data;
};
fetchAllUsers(baseApi);

export const fetchUser = async (url: string, id: number): Promise<Array<IUser>> => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  localStorage.setItem('userInfo', JSON.stringify(data));

  return data;
};

export const toggler = (element: string, displayType: string) => {
  let Element = document.getElementById(element);

  // Element !== null && Element.style.display ='block'
  if (Element !== null) {
    Element.style.display = displayType;
  }
};

export const paginate = (data: any[], dataPerPage: number): any[][] | null => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('The data provided is not an array or is empty.');
    return null;
  }
  if (dataPerPage < 1) {
    console.error('The number of data per page should be greater than 0.');
    return null;
  }
  const totalPages = Math.ceil(data.length / dataPerPage);
  const paginatedData: any[][] = [];
  for (let page = 0; page < totalPages; page++) {
    paginatedData.push(data.slice(page * dataPerPage, (page + 1) * dataPerPage));
  }
  return paginatedData;
};

export const assignBank = (userId: number): string | undefined => {
  const banks = ['Access Bank', 'Kuda Bank', 'Providus Bank'];
  const randomIndex = Math.floor(Math.random() * banks.length);
  const bankName = banks[randomIndex];
  // console.log(`User ${userId} has been assigned to ${bankName}`);

  return userId === undefined ? undefined : bankName;
};
export function CurrentPathIsForbidden(paths: string[]): boolean {
  let isForbidden = false;
  paths.find((path: string) => {
    return window.location.pathname === path ? (isForbidden = true) : false;
  });
  return isForbidden;
}

export const generateAccountNumber = (): string => {
  let accountNumber = '';
  for (let i = 0; i < 10; i++) {
    accountNumber += Math.floor(Math.random() * 10);
  }
  return accountNumber;
};

export function truncateString(str: string, maxLength: number): string {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export const formatPhoneNumber = (phoneNumber: string): string => {
  let formattedNumber = phoneNumber.replace(/[^0-9]/g, ''); //remove any non-numeric characters
  const countryCode = formattedNumber.length === 11 ? formattedNumber.slice(0, 1) : '1';
  if (countryCode !== '1') {
    //if the phone number starts with a country code other than 1, add the '+' sign
    formattedNumber = `+${countryCode} ${formattedNumber.slice(1)}`;
  }
  return formattedNumber;
};

export const addStatusClass = (userId: string): Status => {
  const classes: Status = { class: 'status_active', text: 'active' };
  const parsedUserId = parseInt(userId);

  const classNames = [
    { class: 'status_active', text: 'active' },
    { class: 'status_pending', text: 'pending' },
    { class: 'status_inactive', text: 'inactive' },
    { class: 'status_blacklist', text: 'blacklist' },
  ];

  if (classNames.length === 0) {
    return classes;
  }

  const randomIndex = parsedUserId % classNames.length;
  const randomClass = classNames[randomIndex];

  if (randomClass) {
    classes.class = randomClass.class;
    classes.text = randomClass.text;
  }

  return classes;
};



export const convertDateString = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // convert to 12 hour format
  const hour12 = hour.toString().padStart(2, '0');
  const min12 = minute.toString().padStart(2, '0');
  return `${month} ${day}, ${year} ${hour12}:${min12} ${ampm}`;
};

export const numberWithCommas = (num: number) => {
  return num === undefined ? null : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const usersCardData = [
  {
    id: 1,
    title: 'users',
    icon: cardIcon1,
    amount: 2453,
  },

  {
    id: 2,
    title: 'active users',
    icon: cardIcon2,
    amount: 2453,
  },
  {
    id: 3,
    title: 'users with loan',
    icon: cardIcon3,
    amount: 12453,
  },
  {
    id: 4,
    title: 'users with savings',
    icon: cardIcon4,
    amount: 102453,
  },
];
