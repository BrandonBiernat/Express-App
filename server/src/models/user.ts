export type User = {
    UserId: string,
    Email: string,
    FirstName: string,
    LastName: string,
    PhoneNumber: string,
    Username: string,
    PasswordHash: string
}

export type CreateUserRequest = {
    Email: string,
    FirstName: string,
    LastName: string,
    PhoneNumber: string,
    Username: string,
    Password: string
}

export type LoginUserRequest = {
    Email: string,
    Password: string
}