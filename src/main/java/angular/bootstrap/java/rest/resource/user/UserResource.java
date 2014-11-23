package angular.bootstrap.java.rest.resource.user;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.List;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import angular.bootstrap.java.rest.domain.user.User;
import angular.bootstrap.java.rest.service.user.UserService;

@Path("/user")
public class UserResource {
	
	@Context
	private ServletContext servletContext;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUsers() {
		//List<User> users = getUserService().fetchAll();
		//System.out.println("I have "+users.size()+" users");
		return Response.ok(getService().fetch()).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserByUserId(@PathParam("id") String id) {
		//User user = getUserService().fetchOne(id);
		return Response.ok(getService().fetchOne(id)).build();
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response upsertUser(User user) {
    	getService().upsert(user);
        return Response.ok().build();
    }
	
	@DELETE
	@Path("/{id}")
	public Response deleteUser(@PathParam("id") String id) {
		getService().delete(id);
		return Response.ok().build();
	}
	
	private UserService getService() {
		return (UserService)servletContext.getAttribute("userService");
	}
}
