import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';


import {config} from "../config/app.config.jsx";
import Auth from '../service/auth.service.jsx';



import Home from './home/home.component.jsx';
import About from './about/about.component.jsx';
import Contact from './contact/contact.component.jsx';
import Footer from './footer/footer.component.jsx';
import Navigation from './navigation/navigation.component.jsx';
import Signin from "./sign-in/sign-in.component.jsx";
import Signup from "./sign-up/sign-up.component.jsx";
import UserList from "./user-list/user-list.component.jsx";
import Profile from "./profile/profile.component.jsx";
import Blog from "./blog/blog.component.jsx";
// import Uploadfile from './uploadfile/uploadfile.component.jsx';



const auth = new Auth();

class Routing extends Component {

   
    render() {
        const captchaUrl = config.API_CAPTCHA;
        //console.log("Auth===", auth);


        return(
            <HashRouter>
            <div>
                <Navigation auth={auth} />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/about"  component={About}/>
                    <Route path="/contact" component={Contact} />
                    <Route path="/user-list" render={(props) => <UserList auth={auth} {...props}/>} />
                    <Route path="/blog" render={(props) => <Blog auth={auth} {...props}/>} />
                    <Route path="/profile" render={(props) => <Profile auth={auth} {...props}/>} />
                    {/*<Route path="/uploadfile" render={(props) => <Uploadfile auth={auth} {...props}/>} />*/}
                 </main>
                <Footer />
                <Signin auth={auth}/>
                <Signup auth={auth}/>
            </div>
          </HashRouter>
        )
    }
}
export default Routing