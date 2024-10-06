declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        name: any;
        email: any;
        roles: any;
    }>;
}
export {};
