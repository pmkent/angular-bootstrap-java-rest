package angular.bootstrap.java.rest.repository.user;

import java.util.ArrayList;
import java.util.List;

import org.jongo.MongoCollection;
import org.jongo.MongoCursor;
import static org.jongo.Oid.withOid;

import angular.bootstrap.java.rest.domain.user.User;

public class UserJongoRepository {
	
	private MongoCollection userJongoColl;
	
	public UserJongoRepository(MongoCollection userCollection) {
		this.userJongoColl = userCollection;
	}
	
	public List<User> fetch() {
		MongoCursor<User> all = userJongoColl.find().sort("{lastName : 1}").as(User.class);
		List<User> userList = new ArrayList<User>();
		while (all.hasNext()) {
			userList.add(all.next());
		}
		return userList;
	}
	
	public User fetchOne(String id) {
		return userJongoColl.findOne(withOid(id)).as(User.class);
	}
	
	public void upsert(User user) {
		userJongoColl.save(user);
	}
	
	public void delete(String id) {
		userJongoColl.remove(withOid(id));
	}

}
