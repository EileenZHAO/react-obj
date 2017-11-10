import React,{Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="exampleModalLabel">发送邮件</h4>
                        </div>
                        <div className="modal-body">
                            <form method="POST"
                                  action="/send-email"
                                  name="email"
                                  className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">标题</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="text"
                                               name="subj"
                                               id="recipients" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">收件人</label>
                                    <div className="col-sm-10">
                                        <input className="form-control"
                                               type="email"
                                               name="to"
                                               id="subj" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">邮件内容</label>
                                    <div className="col-sm-10">
                                        <textarea name="body" cols="63" rows="8"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">发送</label>
                                    <div className="col-sm-10">
                                        <input type="submit" value="send" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Contact