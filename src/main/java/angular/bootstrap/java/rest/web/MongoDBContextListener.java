package angular.bootstrap.java.rest.web;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.jongo.Jongo;
import org.jongo.MongoCollection;
import org.mongojack.JacksonDBCollection;
import org.mongojack.internal.MongoJackModule;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.joda.JodaModule;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import angular.bootstrap.java.rest.domain.user.User;
import angular.bootstrap.java.rest.repository.user.UserJongoRepository;
import angular.bootstrap.java.rest.service.user.UserService;

public class MongoDBContextListener implements ServletContextListener {
	
	private MongoClient mongoClient;

	public void contextInitialized(ServletContextEvent servletContextEvent) {
		System.out.println("\nConnecting to Mongo DB");
		try {
			ServletContext servletContext = servletContextEvent.getServletContext();

			mongoClient = new MongoClient("localhost",27017);
			DB db = mongoClient.getDB("test_app");
			
			ObjectMapper objectMapper = new ObjectMapper().registerModule(new MongoJackModule());
			objectMapper.registerModule(new JodaModule());
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			
			//Jongo
			Jongo jongo = new Jongo(db);

			MongoCollection userCollection = jongo.getCollection("user");
			UserJongoRepository userRepository = new UserJongoRepository(userCollection);
			servletContext.setAttribute("userService", new UserService(userRepository));			
		} catch (Exception e) {
			System.out.println("\nMongoClient error :->"+e);
			e.printStackTrace();
			System.exit(1);
		}
	}

	public void contextDestroyed(ServletContextEvent servletContextEvent) {
		mongoClient.close();
		System.out.println("\nClosing Mongo DB");
	}
}
