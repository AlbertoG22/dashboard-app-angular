export interface UsersResponse {
  page:         number;
  per_page:     number;
  total:        number;
  total_pages:  number;
  data:         User[];
  support:      Support;
}

export interface UserResponse {
  data:     User;
  support:  Support;
}

export interface User {
  id:         number;
  first_name: string;
  email:      string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url: string;
  text: string;
}