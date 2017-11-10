import React,{Component} from 'react';
import 'whatwg-fetch';
import {Link, NavLink} from 'react-router-dom';

class Signup extends Component {

	constructor(props) {
		// 通过props到父组件
		super(props);

		this.state = {
			captchaUrl: this.props.auth.captchaUrl,
			phone:'',
			pwd: '',
			signined: false,
			captcha: '',
			repwd: '',
			validator:{ }
		}
		this.getCaptcha = this.getCaptcha.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handlePhoneBlur = this.handlePhoneBlur.bind(this);
		this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
		this.handleRepasswordBlur = this.handleRepasswordBlur.bind(this);
		this.handleCaptchaBlur = this.handleCaptchaBlur.bind(this);
		this.SignUp = this.SignUp.bind(this);
	}

	getCaptcha() {
		this.setState({
			captchaUrl: this.props.auth.captchaUrl+'?t='+ Date.now()+ Math.random(),
		});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handlePhoneBlur(event) {
		const value = event.target.value;
		if(!validator.isMobilePhone(value,'zh-CN')){
			//console.log("电话号码===", value);
			this.setState({validator: {
				invalidPhone: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidPhone: false}}) ;
		}
	}

	handlePasswordBlur(event) {
		const value = event.target.value;
		if(!validator.isLength(value, {min: 6, max: 16})){
			this.setState({validator: {
				invalidPassword: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidPassword: false}}) ;
		}
	}

	handleRepasswordBlur() {
		if(!(this.state.pwd === this.state.repwd)){
			this.setState({validator: {
				invalidRepassword: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidRepassword: false}}) ;
		}
	}

	handleCaptchaBlur(event) {
		const value = event.target.value;
		if(!validator.isLength(value, 4)){
			this.setState({validator: {
				invalidCaptcha: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidCaptcha: false}}) ;
		}
	}

	SignUp() {
		console.log(this.state);
		let {phone, pwd,repwd,captcha} = this.state;
		let data = `phone=${phone}&pwd=${pwd}&repwd=${repwd}&captcha=${captcha}`;
		let url = this.props.auth.apiUrl + '/signup';
		fetch(url, {method: "POST",
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			body: data
		}).then(function(response){
			return response.json();
			//console.log(response)
		}).then(function(json) {
			//console.log(json)

			if(parseInt(json.code)==1)
			{
				let phone = json.data;
				localStorage.setItem('userphone',phone);
				window.location.href = "#/profile";
			}
		}),function(error){

		}
	}

	render(){
        return(
            <div className="sign-up">
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">注册</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal"
                                  name="signUpform"
                                  id="signUpform"
                                  action="/signup"
                                  method="POST">
                                <div className="form-group">
                                    <label className="col-sm-1 control-label"></label>
                                    <div className="col-sm-11">
                                        <input className="form-control"
                                               placeholder="请输入电话号码"
                                               type="tel"
                                               name="phone"
                                               id="phone"
											   value={this.state.phone}
											   onChange={this.handleInputChange}
											   onBlur={(e) => this.handlePhoneBlur(e)}
                                               required />
										{
											this.state.validator.invalidPhone ?
												<div id="phoneErro" className="alert alert-danger" role="alert">
													<p>您输入的电话号码无效</p>
												</div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-1 control-label"></label>
                                    <div className="col-sm-11">
                                        <input className="form-control"
                                               placeholder="密码"
                                               type="password"
                                               name="pwd"
                                               id="password"
											   value={this.state.pwd}
                                               onChange={this.handleInputChange}
											   onBlur={(e) => this.handlePasswordBlur(e)}
                                               required />
										{
											this.state.validator.invalidPassword ?
												<div id="passwordErro" className="alert alert-danger" role="alert">
													<p>密码必须是6-16个字符</p>
												</div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-1 control-label"></label>
                                    <div className="col-sm-11">
                                        <input className="form-control"
                                               placeholder="确认密码"
                                               type="password"
                                               name="repwd"
                                               id="repassword"
											   value={this.state.repwd}
                                               onChange={this.handleInputChange}
											   onBlur={(e) => this.handleRepasswordBlur(e)}
                                               required />
										{
											this.state.validator.invalidRepassword ?
												<div id="repasswordErro" className="alert alert-danger" role="alert">
													<p>两次输入密码不一致</p>
												</div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group" style={{marginLeft: 33 + 'px'}}>
                                    <div className="col-sm-3">
                                        <input className="form-control"
                                               placeholder="验证码"
                                               type="text"
                                               name="captcha"
                                               id="captcha"
											   value={this.state.captcha}
                                               onChange={this.handleInputChange}
											   onBlur={(e) => this.handleCaptchaBlur(e)}
                                               required />
										{
											this.state.validator.invalidCaptcha ?
												<div id="captchaErro" className="alert alert-danger" role="alert">
													<p>验证码为四个字符</p>
												</div> : ""
										}
                                    </div>
                                    <div className="col-sm-9">
                                        <img src={this.state.captchaUrl} className="col-sm-4" id="captchaImg"  onClick={this.getCaptcha} />
                                            <div className="col-sm-8">
                                                <p>请填写图片中的字符，不区分大小写</p>
                                                <NavLink to=""  onClick={this.getCaptcha} className="changeOne">看不清楚？换张图片</NavLink>
                                            </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                    <button id="signup" type="button" className="btn btn-primary" onClick={this.SignUp}>提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    
}

export default Signup