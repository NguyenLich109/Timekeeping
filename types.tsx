export interface typeLogin {
  key_login: string;
}

export interface typeUser {
  _id: string;
  name: string;
  sex: string;
  key_login: string;
  date: string;
  phone: string;
  cmnd: string;
  isAdmin: string;
  address: string;
  image: string;
  disable: string;
  createdAt: string;
}

export interface typeWorkplace {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface dataHistory {
  id: string;
  date: string;
  fullName: string;
  choose_shift: string;
  url: string;
}

export interface typeTimekeeping {
  data: {
    file: { idFile: string; urlFile: string };
    _id: string;
    choose_shift: string;
    note_title: string;
    user: { _id: string; name: string };
    createdAt: string;
    updatedAt: string;
    _v: number;
  }[];
  page: number;
  pages: number;
}
