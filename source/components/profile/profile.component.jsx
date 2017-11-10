import React,{Component} from 'react';
import 'whatwg-fetch';

 import Uploadfile from '../uploadfile/uploadfile.component.jsx';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
			phone:'',
			email: '',
			realname: '',
			nickname: '',
			age: '',
			address: '',
			gender: '',
			userphone: localStorage.getItem('userphone'),
			profilePictureUrl: '',
			remoteUrl: this.props.auth.remoteHost,
			signined: false,
			validator:{ }
        }

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEmailBlur = this.handleEmailBlur.bind(this);
		this.handleRealnameBlur = this.handleRealnameBlur.bind(this);
		this.handleNicknameBlur = this.handleNicknameBlur.bind(this);
		this.handleAgeBlur = this.handleAgeBlur.bind(this);
		this.handleAddressBlur = this.handleAddressBlur.bind(this);
		this.UpdateInfo = this.UpdateInfo.bind(this);
    }

    // 文档挂载完成（文档就绪事件）
	componentDidMount() {
		//alert("to componentDidMount");
		var self = this;
		let url = `${this.props.auth.apiUrl}/profile/${this.state.userphone}`;
		//alert(url);
		fetch(url).then(function (response) {
			//console.log(response.json());
			return response.json();
		}).then(function (json) {
			//console.log(json);
			if(parseInt(json.code)==1)
			{
				//console.log(json);
				self.setState({
					userphone : localStorage.getItem('userphone'),
					phone: json.users.phone,
					realname: json.users.realName,
					profilePictureUrl: json.users.picture,
					//email: self.doShowEmail(json.users.email,json.users.phone),
					email: json.users.email,
					nickname: json.users.nickName,
					gender: json.users.gender,
					age: json.users.age,
					address: json.users.address
				});

			}
		}),function(error){

		}
	}

	doShowEmail(email, phone) {

	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
    }

	handleEmailBlur(event) {
		const value = event.target.value;
		if(!validator.isEmail(value,{allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true})){
			this.setState({validator: {
				invalidEmail: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidEmail: false}}) ;
		}
	}

	handleRealnameBlur(event) {
		const value = event.target.value;
		if(!validator.isLength(value,{min: 2, max: 20})){
			this.setState({validator: {
				invalidRealname: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidRealname: false}}) ;
		}
	}

	handleNicknameBlur(event) {
		const value = event.target.value;
		if(!validator.isLength(value,{min: 2, max: 20})){
			this.setState({validator: {
				invalidNickname: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidNickname: false}}) ;
		}
	}

	handleAgeBlur(event) {
		const value = event.target.value;
		if(parseInt(value) < 18){
			this.setState({validator: {
				invalidAge: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidAge: false}}) ;
		}
	}

	handleAddressBlur(event) {
		const value = event.target.value;
		if(!validator.isLength(value,{min: 2, max: 20})){
			this.setState({validator: {
				invalidAddress: true }}) ;
		}
		else
		{
			this.setState({validator: {
				invalidAddress: false}}) ;
		}
	}

	// 上传文件
	UpdateInfo() {
		//console.log(this.state);
		let {phone, email, realname, nickname, age, address, gender} = this.state;
		let data = `phone=${phone}&email=${email}&realname=${realname}&nickname=${nickname}&age=${age}&address=${address}&gender=${gender}`;
		let url = this.props.auth.apiUrl + '/save-profile';
		//alert(data)
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
				window.location.href = "#/profile";
			}
		}),function(error){

		}
	}



    render(){
    	let maleChecked = '';
    	let femaleChecked = '';
    	if(parseInt(this.state.gender) == 0) {
    		femaleChecked = 'checked';
		}
    	if(parseInt(this.state.gender) == 1) {
    		maleChecked = 'checked';
		}


        return(
            <div className="Home">
                <div className="container">
                    <h1>Profile page</h1>
                    <img src={this.state.remoteUrl + this.state.profilePictureUrl} />
					{
						!this.state.profilePictureUrl ?  <div >你还没有头像，请上传一张头像</div> : ""
					}
                        <Uploadfile auth={this.props.auth} />
                        <hr />

                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-center" id="myModalLabel">完善用户信息</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal"
                                  name="completeinfo"
                                  id="completeinfo"
                                  action=""
                                  method="POST">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">电话</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="电话"
                                               type="tel"
                                               name="phone"
                                               id="phone"
                                               value={this.state.phone}
                                               readOnly />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">邮箱</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="邮箱"
                                               type="email"
                                               name="email"
                                               id="email"
                                               value={this.state.email}
                                               onChange={this.handleInputChange}
                                               onBlur={(e) => this.handleEmailBlur(e)}
                                                required/>
										{
											this.state.validator.invalidEmail ?
                                                <div id="phoneErro" className="alert alert-danger" role="alert">
                                                    <p>邮箱格式不正确</p>
                                                </div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">姓名</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="姓名"
                                               type="text"
                                               name="realname"
                                               id="realname"
                                               value={this.state.realname}
                                               onChange={this.handleInputChange}
                                               onBlur={(e) => this.handleRealnameBlur(e)}
                                               required />
                                        {
											this.state.validator.invalidRealname ?
                                                <div id="phoneErro" className="alert alert-danger" role="alert">
                                                    <p>姓名必须是2-20个字符</p>
                                                </div> : ""
                                        }
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">昵称</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="昵称"
                                               type="text"
                                               name="nickname"
                                               id="nickname"
                                               value={this.state.nickname}
                                               onChange={this.handleInputChange}
                                               onBlur={(e) => this.handleNicknameBlur(e)}
                                               required />
										{
											this.state.validator.invalidNickname ?
                                                <div id="phoneErro" className="alert alert-danger" role="alert">
                                                    <p>昵称必须是2-20个字符</p>
                                                </div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">年龄</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="年龄"
                                               type="text"
                                               name="age"
                                               id="age"
                                               value={this.state.age}
                                               onChange={this.handleInputChange}
                                               onBlur={(e) => this.handleAgeBlur(e)}
                                               required />
										{
											this.state.validator.invalidAge ?
                                                <div id="phoneErro" className="alert alert-danger" role="alert">
                                                    <p>年龄必须大于18岁</p>
                                                </div> : ""
										}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">性别</label>
                                    <div className="col-sm-10">
                                        <div className="radio col-sm-1">
                                            <label>
                                                <input type="radio"
													   name="gender"
													   id="male"
													   value="1"
													   onChange={this.handleInputChange}
													   checked={maleChecked}/>
                                                    男
                                            </label>
                                        </div>
                                        <div className="radio col-sm-1">
                                            <label>
                                                <input type="radio"
													   name="gender"
													   id="female"
													   value="0"
													   onChange={this.handleInputChange}
													   checked={femaleChecked}/>
                                                    女
                                            </label>
                                        </div>
                                        <div className="col-sm-8"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">地址</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               placeholder="地址"
                                               type="text"
                                               name="address"
                                               id="address"
                                               value={this.state.address}
                                               onChange={this.handleInputChange}
                                               onBlur={(e) => this.handleAddressBlur(e)}
                                               required />
										{
											this.state.validator.invalidAddress ?
                                                <div id="phoneErro" className="alert alert-danger" role="alert">
                                                    <p>地址不能为空</p>
                                                </div> : ""
										}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
                                    <button id="save" type="button" className="btn btn-primary" onClick={this.UpdateInfo}>保存</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
    
}

export default Profile