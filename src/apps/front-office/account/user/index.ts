import cache from "@mongez/cache";
import {
  User as BaseUser,
  setCurrentUser,
  UserCacheDriverInterface,
  UserInterface,
} from "@mongez/user";

class User extends BaseUser implements UserInterface {
  /**
   * Cache driver
   */
  protected cacheDriver: UserCacheDriverInterface = cache;

  /**
   * {@inheritDoc}
   */
  public getCacheKey(): string {
    return "usr";
  }

  public isLoggedIn(): boolean {
    return this.get("accessToken")?.length > 0;
  }

  public get isGuest(): boolean {
    return this.get("userType") === "guest";
  }

  public get name(): string {
    return this.get("name", "");
  }

  public get firstName(): string {
    return this.get("firstName", "");
  }

  public get lastName(): string {
    return this.get("lastName", "");
  }

  public get email(): string {
    return this.get("email", "");
  }

  public get phoneNumber(): string {
    return this.get("phoneNumber", "");
  }

  public get gender(): string {
    return this.get("gender", "");
  }
}

const user: User = new User();

// boot the class
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;
