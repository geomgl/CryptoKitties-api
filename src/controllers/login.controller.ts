
import { repository } from '@loopback/repository';
import { post, get, requestBody, HttpErrors, param } from '@loopback/rest';
import { UserRepo } from '../repositories/user.repository';
import { User } from '../models/user';
import { Login } from '../models/login';
import { sign, verify } from 'jsonwebtoken';

import * as bcrypt from 'bcrypt';

export class LoginController {
    constructor(
        @repository(UserRepo.name) private userRepo: UserRepo,
    ) { }

    // register a new user
    @post('/register')
    async createUser(@requestBody() user: User) {

        let hashedPassword = await bcrypt.hash(user.password, 10);

        console.log(user);

        var userToStore = new User();
        //userToStore.user_id = user.user_id;
        userToStore.first_name = user.first_name; 
        userToStore.last_name = user.last_name;
        userToStore.email = user.email;
        // userToStore.profile_pic = user.profile_pic; 
        userToStore.password = hashedPassword;
        console.log(userToStore);

        // check if email address already exists with another user
        var users = await this.userRepo.find();
        for (var i = 0; i < users.length; i++) {
            if (user.email == users[i].email) {
                throw new HttpErrors.BadRequest('email address already registered with another user');
            }
        }

        // check for characters expected in an email address
        if (!user.email.includes("@") || !user.email.includes(".")) {
            throw new HttpErrors.BadRequest('email address invalid');

        }

        // create a new user in server
        let storedUser = await this.userRepo.create(userToStore);
        storedUser.password = ""; 

        return storedUser;


    }

    @post('/login')
    async login(@requestBody() login: Login): Promise<any> {
        var users = await this.userRepo.find();
        var email = login.email;

        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.email == email && await bcrypt.compare(login.password, user.password)) {

                var jwt = sign(
                    {
                        user: {
                            id: user.user_id,
                            firstName: user.first_name,
                            email: user.email
                        },
                        anything: "hello"
                    },
                    'shh',
                    {
                        issuer: 'auth.ix.co.za',
                        audience: 'ix.co.za',
                    },
                );

                return {
                    token: jwt
                };
            }
        }
        //return "Error";
        throw new HttpErrors.Unauthorized('Incorrect username and/or password!');
    }
}
