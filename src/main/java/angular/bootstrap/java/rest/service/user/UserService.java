package angular.bootstrap.java.rest.service.user;

import java.util.Date;
import java.util.List;

import angular.bootstrap.java.rest.domain.user.User;
import angular.bootstrap.java.rest.repository.user.UserJongoRepository;

public class UserService {
	
	private UserJongoRepository userRepo;
	
	public UserService(UserJongoRepository userJongoRepo) {
		this.userRepo = userJongoRepo;
	}
	
	public List<User> fetch() {
		return userRepo.fetch();
	}
	
	public User fetchOne(String id) {
		return userRepo.fetchOne(id);
	}
	
	public void upsert(User user) {
		user.setLastUpdatedDt(new Date());
		userRepo.upsert(user);
	}
	
	public void delete(String id) {
		userRepo.delete(id);
	}
}
