import React,{Component} from 'react';

import 'whatwg-fetch';


class Uploadfile extends Component {
    constructor(props) {
        super(props);


        this.state = {
            userphone: localStorage.getItem("userphone"),
            UID: localStorage.getItem("userphone")
        }

        this.submitFile = this.submitFile.bind(this);
        this.handleGetFile = this.handleGetFile.bind(this);
        const now = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth();
		this.timestr = Date.now();




    }

	handleGetFile(e)
	{
		this.files = e.target.files;
	}



	submitFile(){
		var self = this;
		let url= `${this.props.auth.apiUrl}/upload-profile/${this.state.UID}/${this.year}/${this.month}/${this.timestr}`;

		//console.log(this.files);
		let file = this.files[0];
		//console.log(file)
		if(this.files.length > 0) {

			var formData = new FormData();
			formData.append('photo', file, file.name);

			fetch(url, {method: "POST",
				headers:{'enctype': 'multipart/form-data'},
				body: formData
			}).then(function(response){
			    //console.log(response.json())
				return response.json();
			}).then(function(json) {
			    //console.log(self.state.remoteUrl + json.imgpath);
				self.setState = {
					profilePictureUrl: self.state.remoteUrl + json.imgpath
                }
				window.location.reload();
			}),function(error){

			}
		}
	}

    render(){
        return(
            <div className="Uploadfile">
                    <form className="form-horizontal uploadForm" role="form"
                          encType="multipart/form-data">

                        <div className="form-group">
                            <label htmlFor="fieldPhoto" className="col-sm-2 control-label">个人头像</label>
                            <div className="col-sm-4">
                                <input
                                    type="file"
                                    className="form-control"
                                    required
                                    id="fieldPhoto"
                                    onChange={this.handleGetFile}
                                    name="photo" />
                                <input type="hidden" name="uid" value="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-4">
                                <button type="button" className="btn btn-primary" onClick={this.submitFile}>提交</button>
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
    
}

export default Uploadfile