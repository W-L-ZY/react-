import Home from "../component/Home";
import Login from "../component/Login";
import Register from "../component/Register";

const routes = {
  routes: [
    { path: '/home',
      component: Home,
    },
    { path: '/login',
      component: Login
    },
    { path: '/register',
      component: Register
    },
  ]
}

export default routes;