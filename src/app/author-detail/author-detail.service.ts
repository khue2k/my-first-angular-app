export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    gender: "Female",
    ipAddress: "192.168.1.101",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Johnson",
    email: "b.johnson@fakemail.net",
    gender: "Male",
    ipAddress: "10.0.0.45",
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Williams",
    email: "charlie.w@testdomain.org",
    gender: "Male",
    ipAddress: "172.16.30.212",
  },
  {
    id: 4,
    firstName: "Diana",
    lastName: "Brown",
    email: "diana.brown12@sample.co",
    gender: "Female",
    ipAddress: "203.0.113.15",
  },
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Jones",
    email: "e.jones@mailinator.com", // Using a disposable email domain example
    gender: "Male",
    ipAddress: "8.8.8.8", // Example public IP
  },
  {
    id: 6,
    firstName: "Fiona",
    lastName: "Garcia",
    email: "fgarcia@mycorp.io",
    gender: "Female",
    ipAddress: "198.51.100.99",
  },
  {
    id: 7,
    firstName: "George",
    lastName: "Miller",
    email: "george.miller@email.info",
    gender: "Male",
    ipAddress: "1.1.1.1", // Another example public IP
  },
];
