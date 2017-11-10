import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: localStorage.getItem('userphone')
        };
        this._logOut = this._logOut.bind(this);
    }

	_logOut(){
		this.props.auth.logout();
	}


    render(){

		const {isLoggedIn}= this.props.auth;
		const isLogined = isLoggedIn();
		//alert("isLogined"+isLogined);
		const signinAndSignUpElement = (
            <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="" data-toggle="modal" data-target="#exampleModal" className="smoothScroll">登录</NavLink></li>
                <li><NavLink to="" data-toggle="modal" data-target="#myModal" className="smoothScroll">注册</NavLink></li>
            </ul>
		);

		const signOutElement = (
            <ul className="nav navbar-nav navbar-right" >
                <li> <NavLink to=""  className="dropdown-toggle glyphicon glyphicon-user"
                         data-toggle="dropdown"> 你好 {localStorage.getItem('userphone')}
                    <span className="caret"></span></NavLink>
                    <ul className="dropdown-menu" role="menu">
                        <li> <NavLink to="" data-toggle="modal" data-target="#pwdrestModal"
                                      className="active">重置密码</NavLink></li>
                        <li> <NavLink to="/profile" className="active">个人中心</NavLink></li>
                        <li> <NavLink to="/my-blog" className="active">我的博客</NavLink></li>
                        <li id="signout"> <NavLink to=""  onClick={this._logOut} className="active">
                            <span className="glyphicon glyphicon-log-out">&nbsp;</span>退出
                        </NavLink></li>
                    </ul>
                </li>
            </ul>
		);

		return(
            <div className="navigation">
                <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
                    <div className="container container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>


                            <ul className="nav navbar-nav ">
                                <li className="area"> <NavLink  to="http://www.jieqinwang.com/Index/index/changecity/1"
                                                                id="city" title="选择您所在的城市">
                                    [ 成都 <i className="caret"></i> ]
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/">首页</NavLink></li>
                                <li><NavLink to="/about">关于我们</NavLink></li>
                                <li><NavLink to="/contact">联系我们</NavLink></li>
                                <li><NavLink to="#/settings"
                                       className="dropdown-toggle"
                                       data-toggle="dropdown">应用
                                    <span className="caret"></span>
                                </NavLink>
                                    <ul className="dropdown-menu" role="menu">
                                        <li className="dropdown-header">用户</li>
                                        <li><NavLink to="/user-list">用户列表</NavLink></li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header">博客</li>
                                        <li><NavLink to="/blog">新增博客</NavLink></li>
                                        <li><NavLink to="/blog">查看博客</NavLink></li>

                                    </ul>
                                </li>
                            </ul>
                            {!isLogined ? signinAndSignUpElement:signOutElement}

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default Navigation