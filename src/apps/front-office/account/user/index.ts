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

  public get isGuest(): boolean {
    return this.id === null;
  }
}

const user: User = new User();

// boot the class
user.boot();

// update current user instance to be used from other packages
setCurrentUser(user);

export default user;
