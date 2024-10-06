import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<import("./user.schema").User>;
}
