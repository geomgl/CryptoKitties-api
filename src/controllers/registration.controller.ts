
// import { repository } from '@loopback/repository';
// import { post, get, requestBody, HttpErrors, param } from '@loopback/rest';
// import { UserRepo } from '../repositories/user.repository';
// import { User } from '../models/user';
// import { Login } from '../models/login';
// import { sign, verify } from 'jsonwebtoken';

// import * as bcrypt from 'bcrypt';

// export class LoginController {
//     constructor(
//         @repository(UserRepo.name) private userRepo: UserRepo,
//     ) { }

//     // register a new user
//     @post('/register')
//     async createUser(@requestBody() user: User) {

//         let hashedPassword = await bcrypt.hash(user.password, 10);

//         var userToStore = new User();
//         userToStore.id = user.id;
//         userToStore.firstName = user.firstName; 
//         userToStore.lastName = user.lastName;
//         userToStore.emailAddress = user.email;
//         userToStore.username = user.username;
//         userToStore.password = hashedPassword;

//         let storedUser = await this.userRepo.create(userToStore);
//         storedUser.password = ""; 

//         return storedUser;


//     }

//     @post('/login')
//     async login(@requestBody() login: Login): Promise<any> {
//         var users = await this.userRepo.find();

//         var email = login.email;

//         for (var i = 0; i < users.length; i++) {
//             var user = users[i];
//             if (user.email == email && await bcrypt.compare(login.password, user.password)) {

//                 var jwt = sign(
//                     {
//                         user: {
//                             id: user.id,
//                             firstName: user.firstName,
//                             email: user.email
//                         },
//                         anything: "hello"
//                     },
//                     'shh',
//                     {
//                         issuer: 'auth.ix.co.za',
//                         audience: 'ix.co.za',
//                     },
//                 );

//                 return {
//                     token: jwt,
//                 };
//             }
//         }
//         //return "Error";
//         throw new HttpErrors.Unauthorized('Incorrect username and/or password!');
//     }
// }
