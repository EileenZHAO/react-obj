import React,{Component} from 'react'


class Blog extends Component {
    render(){
        return(
            <div className="Blog">
                <div className="container">
                    <h1>Blog page</h1>
					<section className="content">
						<button type="button" id="add" className="btn btn-primary"  data-toggle="modal" data-target=".bs-example-modal-lg">增加</button>
						<button type="button" id="delete" className="btn btn-danger" data-toggle="modal" data-target="#gridSystemModalLabel">删除</button>
						<table id="example"
							   className="table table-striped table-bordered"
							   cellSpacing="0"
							   width="100%">
						</table>
					</section>
                </div>
            </div>
        )
    }
    
}

export default Blog