import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.HashMap;

public class LoginServlet extends HttpServlet {
    private static final HashMap<String, String> users = new HashMap<>();

    static {
        users.put("user1", "pwd1");
        users.put("user2", "pwd2");
        users.put("user3", "pwd3");
        users.put("user4", "pwd4");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        PrintWriter out = response.getWriter();
        
        for (String user : users.keySet()) {
            Cookie cookie = new Cookie(user, users.get(user));
            response.addCookie(cookie);
        }

        Cookie[] cookies = request.getCookies();
        boolean authenticated = false;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(username) && cookie.getValue().equals(password)) {
                    authenticated = true;
                    break;
                }
            }
        }

        if (authenticated) {
            out.println("<h1>Welcome, " + username + "!</h1>");
        } else {
            out.println("<h1>Invalid username or password.</h1>");
            out.println("<a href='login.html'>Try Again</a>");
        }
    }
}
